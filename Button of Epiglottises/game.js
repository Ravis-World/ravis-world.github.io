// --- GLOBAL GAME STATE ---
let cash = 0;
let cashPerClick = 1;
let cashPerSecond = 0; // Tracks passive income
let currentConsonantIPA = 'ʡ';
let currentSoundPath = 'Audio/Epiglottal_stop.ogg';
const SAVE_KEY = 'epiglottis_clicker_save';
let gameLoopInterval = null;
let resetClickCount = 0; // For 3-click reset
let resetTimeout = null; // Timeout reference for reset

// NEW: Currency Definitions and State
const CURRENCIES = {
    'USD': { symbol: '$', name: 'US Dollar' },
    'EUR': { symbol: '€', name: 'Euro' },
    'JPY': { symbol: '¥', name: 'Japanese Yen' },
    'GBP': { symbol: '£', name: 'British Pound' },
    'CAD': { symbol: 'C$', name: 'Canadian Dollar' },
    'AUD': { symbol: 'A$', name: 'Australian Dollar' },
};
let selectedCurrencyCode = 'USD'; // Default currency

// A simpler formatter for the CPS and Multiplier display (just the number)
const numberFormatter = new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

/**
 * Formats a number using the user's selected currency and compact notation for large numbers.
 * @param {number} amount - The number to format.
 * @returns {string} The formatted string.
 */
function formatLargeNumber(amount) {
    const compactThreshold = 1000000; 
    
    // Use the globally selected currency code
    const currencyCode = selectedCurrencyCode; 

    const options = {
        style: 'currency', 
        currency: currencyCode, 
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    };

    if (amount >= compactThreshold) {
        options.notation = 'compact';
        options.maximumFractionDigits = 1;
    }

    // Use navigator.language for locale-aware number grouping/placement
    const formatter = new Intl.NumberFormat(navigator.language, options);
    return formatter.format(amount);
}

/**
 * NEW: Function to change the currency code based on the dropdown selection.
 * This is called internally when the dropdown value changes.
 */
function changeCurrency(code) {
    if (CURRENCIES[code]) {
        selectedCurrencyCode = code;
        updateCashDisplay();
        renderUpgrades(); // Re-render to update cost formats
        saveGame(); // Save the new currency preference
        console.log(`Currency changed to ${code}`);
    }
}


/**
 * NEW: Function to preload audio files for faster playback.
 * @param {Array<string>} fileArray - Array of audio file paths to preload.
 */
function preloadAudioFiles(fileArray) {
    fileArray.forEach(file => {
        const audio = new Audio(file);
        audio.load();
    });
}

// --- Preload all sound files at the start ---
const allSoundFiles = [
    'Audio/Epiglottal_stop.ogg',
    'Audio/Voiced_epiglottal_trill_2.ogg',
    'Audio/Voiced_epiglottal_trill.ogg',
    'Audio/Voiceless_epiglottal_trill.ogg',
    'Audio/Epiglottal_flap.oga',
    'Audio/Voiceless_epiglottal_affricate.ogg',
    'Audio/Voiced_epiglottal_affricate.ogg',
    'Audio/Voiced_pharyngeal_fricative.ogg',
    'Audio/Voiceless_pharyngeal_fricative.ogg',
    'Audio/Voiceless_pharyngeal_stop.ogg',
    'Audio/Voiced__pharyngeal_stop.ogg'
];

preloadAudioFiles(allSoundFiles);

// --- UPGRADE DATA: CLICK MULTIPLIERS ---
// This list is based on your latest file and determines cashPerClick.
const upgrades = {
    // BASE (1/11): ʡ - Voiceless Epiglottal Plosive
    'base': {
        ipa: 'ʡ',
        name: 'Voiceless Epiglottal Plosive',
        soundPath: 'Audio/Epiglottal_stop.ogg',
        cost: 0,
        clickMultiplier: 1,
        unlocked: true,
        buttonText: 'ʡ'
    },

    // JOKER 1 (2/11): ʢ - Voiced Epiglottal Trill
    'trill_voiced': {
        ipa: 'ʢ',
        name: 'Voiced Epiglottal Fricative Joker',
        soundPath: 'Audio/Voiced_epiglottal_trill_2.ogg',
        cost: 100,
        clickMultiplier: 5,
        unlocked: false,
        buttonText: 'ʢ'
    },

    'approximant_voiced': {
        ipa: 'ʢ̞',
        name: 'Voiced Epiglottal Approximant Joker',
        soundPath: 'Audio/Voiced_epiglottal_trill.ogg',
        cost: 1000,
        clickMultiplier: 50,
        unlocked: false,
        buttonText: 'ʢ̞'
    },

    // JOKER 4 (5/11): ʜ - Voiceless Epiglottal Trill
    'trill_voiceless': {
        ipa: 'ʜ',
        name: 'Voiceless Epiglottal Fricative Joker',
        soundPath: 'Audio/Voiceless_epiglottal_trill.ogg',
        cost: 4000,
        clickMultiplier: 250,
        unlocked: false,
        buttonText: 'ʜ'
    },

    // JOKER 5 (6/11): ʡ̮ - Pharyngeal Flap
    'flap': {
        ipa: 'ʡ̮',
        name: 'Pharyngeal Flap Joker',
        soundPath: 'Audio/Epiglottal_flap.oga',
        cost: 10000,
        clickMultiplier: 750,
        unlocked: false,
        buttonText: 'ʡ̮'
    },

    // JOKER 6 (7/11): ʡ͜ʜ - Voiceless Epiglottal Affricate
    'affricate_voiceless': {
        ipa: 'ʡ͜ʜ',
        name: 'Voiceless Epiglottal Affricate Joker',
        soundPath: 'Audio/Voiceless_epiglottal_affricate.ogg',
        cost: 50000,
        clickMultiplier: 3000,
        unlocked: false,
        buttonText: 'ʡ͜ʜ'
    },

    // JOKER 7 (8/11): ʡ͜ʢ - Voiced Epiglottal Affricate (NEW)
    'affricate_voiced': {
        ipa: 'ʡ͜ʢ',
        name: 'Voiced Epiglottal Affricate Joker',
        soundPath: 'Audio/Voiced_epiglottal_affricate.ogg',
        cost: 250000,
        clickMultiplier: 12000,
        unlocked: false,
        buttonText: 'ʡ͜ʢ'
    },

    // JOKER 2 (3/11): ʕ - Voiced Pharyngeal Fricative 
    'fricative_voiced': {
        ipa: 'ʕ',
        name: 'Voiced Pharyngeal Fricative Joker',
        soundPath: 'Audio/Voiced_pharyngeal_fricative.ogg',
        cost: 500000,
        clickMultiplier: 25000,
        unlocked: false,
        buttonText: 'ʕ'
    },

    // JOKER 3 (4/11): ħ - Voiceless Pharyngeal Fricative
    'fricative_voiceless': {
        ipa: 'ħ',
        name: 'Voiceless Pharyngeal Fricative Joker',
        soundPath: 'Audio/Voiceless_pharyngeal_fricative.ogg',
        cost: 750000,
        clickMultiplier: 75000,
        unlocked: false,
        buttonText: 'ħ'
    },

    // JOKER 8 (9/11): ꞯ - Voiceless Upper-Pharyngeal Plosive (NEW)
    'plosive_upper_voiceless': {
        ipa: 'ꞯ',
        name: 'Voiceless Upper-Pharyngeal Plosive Joker',
        soundPath: 'Audio/Voiceless_pharyngeal_stop.ogg',
        cost: 1200000,
        clickMultiplier: 500000,
        unlocked: false,
        buttonText: 'ꞯ'
    },

    // JOKER 9 (10/11): 𝼂 - Voiced Upper-Pharyngeal Plosive (NEW)
    'plosive_upper_voiced': {
        ipa: '𝼂',
        name: 'Voiced Upper-Pharyngeal Plosive Joker',
        soundPath: 'Audio/Voiced_pharyngeal_stop.ogg',
        cost: 5000000,
        clickMultiplier: 200000,
        unlocked: false,
        buttonText: '𝼂'
    }
};

// --- UPGRADE DATA: PASSIVE GENERATORS ---
const autoUpgrades = {
    'air_pump': {
        name: 'Air Pump',
        description: 'Pumps air for basic friction sounds.',
        baseCost: 15,
        baseCps: 1,
        owned: 0,
    },
    'epiglottal_tensioner': {
        name: 'Epiglottal Tensioner',
        description: 'Automates trills and flaps.',
        baseCost: 100,
        baseCps: 5,
        owned: 0,
    },
    'pharyngeal_resonator': {
        name: 'Pharyngeal Resonator',
        description: 'Generates continuous voiced sounds.',
        baseCost: 1100,
        baseCps: 50,
        owned: 0,
    },
    'affricate_assembler': {
        name: 'Affricate Assembler',
        description: 'Simultaneous stop and trill production.',
        baseCost: 12000,
        baseCps: 500,
        owned: 0,
    }
};


// --- DOM ELEMENT REFERENCES ---
const button = document.getElementById('epiglottal-button');
const cashCountDisplay = document.getElementById('cash-count');
const upgradesZone = document.getElementById('upgrades-zone');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const resetButton = document.getElementById('reset-button'); // Reference to the reset button
const currencySelector = document.getElementById('currency-selector'); // NEW: Reference to the dropdown

/**
 * Calculates and returns the current cost of an auto-upgrade based on quantity owned.
 * @param {object} upgrade - The auto-upgrade object.
 * @returns {number} The current cost.
 */
function getAutoUpgradeCost(upgrade) {
    // Simple exponential cost increase (e.g., Cost = BaseCost * 1.15^Owned)
    return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.owned));
}

/**
 * Starts the game loop for passive income.
 */
function startGameLoop() {
    // Clear any existing interval to prevent duplicates on load/init
    if (gameLoopInterval) {
        clearInterval(gameLoopInterval);
    }
    
    // Run the loop every 1000 milliseconds (1 second)
    gameLoopInterval = setInterval(() => {
        if (cashPerSecond > 0) {
            cash += cashPerSecond;
            updateCashDisplay();
            renderUpgrades(); // Re-render to show newly affordable items
        }
    }, 1000);
    console.log(`Game Loop started. Current CPS: ${cashPerSecond}`);
}

/**
 * Recalculates the total Cash Per Second (CPS) based on owned auto-upgrades.
 */
function recalculateCPS() {
    let newCPS = 0;
    for (const key in autoUpgrades) {
        const upgrade = autoUpgrades[key];
        newCPS += upgrade.baseCps * upgrade.owned;
    }
    cashPerSecond = newCPS;
}


/**
 * Updates the cash display element using the cash formatter, and shows CPS.
 */
function updateCashDisplay() {
    // Format the cash using the new dynamic formatter
    const formattedCash = formatLargeNumber(cash);
    const formattedCPS = numberFormatter.format(cashPerSecond);
    
    // Update the cash count display
    cashCountDisplay.innerHTML = `${formattedCash} <span class="cps-display">(+${formattedCPS}/s)</span>`;
}

/**
 * Saves the current game state to localStorage.
 */
function saveGame() {
    const saveObject = {
        cash: cash,
        cashPerClick: cashPerClick,
        cashPerSecond: cashPerSecond, 
        currentConsonantIPA: currentConsonantIPA,
        selectedCurrencyCode: selectedCurrencyCode, // NEW: Save selected currency
        // Save state of Joker click multipliers
        upgradesStatus: Object.keys(upgrades).map(key => ({
            key: key,
            unlocked: upgrades[key].unlocked
        })),
        // Save state of passive generators
        autoUpgradesOwned: Object.keys(autoUpgrades).map(key => ({
            key: key,
            owned: autoUpgrades[key].owned
        }))
    };

    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(saveObject));
        console.log("Game Saved successfully!");
    } catch (e) {
        console.error("Could not save game to localStorage:", e);
    }
}

/**
 * Loads the game state from localStorage.
 */
function loadGame() {
    try {
        const savedData = localStorage.getItem(SAVE_KEY);
        if (savedData) {
            const saveObject = JSON.parse(savedData);

            // Restore global variables
            cash = saveObject.cash || 0;
            cashPerClick = saveObject.cashPerClick || 1;
            cashPerSecond = saveObject.cashPerSecond || 0; 
            currentConsonantIPA = saveObject.currentConsonantIPA || 'ʡ';
            
            // NEW: Restore selected currency
            selectedCurrencyCode = saveObject.selectedCurrencyCode || 'USD';
            if (currencySelector) {
                currencySelector.value = selectedCurrencyCode;
            }

            const activeUpgrade = Object.values(upgrades).find(u => u.ipa === currentConsonantIPA);
            if (activeUpgrade) {
                currentSoundPath = activeUpgrade.soundPath;
                button.textContent = activeUpgrade.buttonText;
            }

            // Restore Joker click multiplier unlock status
            if (saveObject.upgradesStatus) {
                saveObject.upgradesStatus.forEach(status => {
                    if (upgrades[status.key]) {
                        upgrades[status.key].unlocked = status.unlocked;
                    }
                });
            }

            // Restore Generator owned count
            if (saveObject.autoUpgradesOwned) {
                saveObject.autoUpgradesOwned.forEach(status => {
                    if (autoUpgrades[status.key]) {
                        autoUpgrades[status.key].owned = status.owned;
                    }
                });
            }
            
            recalculateCPS();
            updateCashDisplay();
            renderUpgrades();
            console.log("Game Loaded successfully!");
        } else {
            console.log("No saved game found. Starting new game.");
        }
    } catch (e) {
        console.error("Error loading game from localStorage:", e);
    }
}

/**
 * Resets all game data and reloads the page.
 */
function resetGame() {
    localStorage.removeItem(SAVE_KEY);
    // Reload the page to reset all in-memory variables to initial state
    window.location.reload(); 
}

/**
 * Handles the 3-click reset sequence.
 */
function handleResetClick() {
    resetClickCount++;
    const clicksRemaining = 3 - resetClickCount;

    if (resetTimeout) {
        clearTimeout(resetTimeout);
    }

    if (resetClickCount === 3) {
        resetButton.textContent = 'GAME RESET!';
        resetGame(); // Perform the reset
    } else {
        resetButton.textContent = `CONFIRM RESET (${clicksRemaining} more clicks)`;
        // Set a timeout to reset the count and button text if the user pauses
        resetTimeout = setTimeout(() => {
            resetClickCount = 0;
            resetButton.textContent = 'Reset Game';
        }, 3000); // 3-second window
    }
}

// --- SONG PLAYLIST (add your song filenames here) ---
const songList = [
    'Songs/embrace-364091.mp3',
    'Songs/eona-emotional-ambient-pop-351436.mp3',
    'Songs/gardens-stylish-chill-303261.mp3',
    'Songs/kugelsicher-by-tremoxbeatz-302838.mp3',
    'Songs/[Ravis World] Tribute to 5 Gold Rings - Music Visualiser.mp3',
    'Songs/[Ravis World] 6 Faces.mp3'
];

// --- MUSIC PLAYER STATE ---
let currentSongIndex = 0;
let music = new Audio(songList[currentSongIndex]);
music.loop = false; // We'll handle looping the playlist
music.volume = 0.5;

let isMusicMuted = false;
let isSfxMuted = false;
const muteMusicButton = document.getElementById('mute-music-button');
const muteSfxButton = document.getElementById('mute-sfx-button');
const musicTitle = document.getElementById('music-title');

// --- PLAY NEXT SONG IN PLAYLIST ---
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    music.src = songList[currentSongIndex];
    music.currentTime = 0;
    if (!isMusicMuted) music.play();
    updateMusicTitle();
}

// --- UPDATE MUSIC TITLE DISPLAY ---
function updateMusicTitle() {
    if (musicTitle) {
        const file = songList[currentSongIndex].split('/').pop();
        musicTitle.textContent = `Now Playing: ${file}`;
    }
}

// --- MUTE LOGIC ---
function setMusicMuteState(mute) {
    isMusicMuted = mute;
    music.muted = mute;
    muteMusicButton.textContent = mute ? '🔇 Unmute Music' : '🔊 Mute Music';
    if (mute) music.pause();
    else music.play().catch(() => {});
}
function setSfxMuteState(mute) {
    isSfxMuted = mute;
    muteSfxButton.textContent = mute ? '🔇 Unmute SFX' : '🔊 Mute SFX';
}

// --- FIRST CLICK TO START MUSIC ---
let musicStarted = false;
function startMusicOnFirstClick() {
    if (!musicStarted) {
        musicStarted = true;
        if (!isMusicMuted) music.play().catch(() => {});
    }
}
document.body.addEventListener('pointerdown', startMusicOnFirstClick, { once: true });

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Attach manual save/load/reset listeners
    saveButton.addEventListener('click', saveGame);
    loadButton.addEventListener('click', loadGame);
    resetButton.addEventListener('click', handleResetClick); // Attach 3-click reset handler
    
    // NEW: Attach currency selector listener
    if (currencySelector) {
        currencySelector.addEventListener('change', (e) => changeCurrency(e.target.value));
    }


    // 2. Attempt to load the game before starting
    loadGame();
    
    // 3. If no save was found, ensure we start with base values
    if (currentConsonantIPA === 'ʡ') {
        button.textContent = upgrades.base.buttonText;
    }

    // 4. Attach the click handler to the main button
    button.addEventListener('click', handleButtonClick);

    // 5. Start the passive income loop
    startGameLoop();

    // 6. Initial display update (needed even if loaded)
    updateCashDisplay();
    renderUpgrades();
    
    // Start music (autoplay policy: user must interact first)
    setTimeout(() => {
        if (!isMusicMuted) music.play().catch(() => {});
        updateMusicTitle();
    }, 500);

    // Mute button logic
    muteMusicButton.addEventListener('click', () => setMusicMuteState(!isMusicMuted));
    muteSfxButton.addEventListener('click', () => setSfxMuteState(!isSfxMuted));

    // When a song ends, play the next one
    music.addEventListener('ended', playNextSong);

    updateMusicTitle();
    console.log("Game initialized with passive income loop running.");
});

// --- SOUND EFFECTS (Epiglottal Button) ---
function playCurrentSound() {
    if (isSfxMuted) {
        console.log('SFX is muted, not playing sound.');
        return;
    }
    const activeUpgrade = Object.values(upgrades).find(u => u.ipa === currentConsonantIPA);
    const path = activeUpgrade ? activeUpgrade.soundPath : currentSoundPath; 

    const audio = new Audio(path);
    audio.play()
        .catch(error => {
            console.error(`Error playing sound from path: ${path}`, error);
        });
}

/**
 * Handles the main button click event.
 */
function handleButtonClick() {
    cash += cashPerClick;
    updateCashDisplay();
    playCurrentSound();
    renderUpgrades();
    saveGame();
}

/**
 * Handles the logic when a player clicks a CLICK MULTIPLIER upgrade button.
 * @param {string} key - The key of the upgrade to purchase (e.g., 'trill_voiced').
 */
function purchaseUpgrade(key) {
    const upgrade = upgrades[key];

    if (cash >= upgrade.cost && !upgrade.unlocked) {
        cash -= upgrade.cost;
        updateCashDisplay();

        upgrade.unlocked = true;
        currentConsonantIPA = upgrade.ipa;
        cashPerClick = upgrade.clickMultiplier;
        currentSoundPath = upgrade.soundPath;

        button.textContent = upgrade.buttonText;
        renderUpgrades();
        saveGame();

        console.log(`Successfully purchased ${upgrade.name}! New cash per click: ${numberFormatter.format(cashPerClick)}`);
    } else if (upgrade.unlocked) {
        console.log(`${upgrade.name} is already unlocked.`);
    } else {
        // Use formatLargeNumber for cost warnings
        console.warn(`Not enough cash! You need ${formatLargeNumber(upgrade.cost)} for the ${upgrade.name}. Current Cash: ${formatLargeNumber(cash)}`);
    }
}

/**
 * NEW: Handles the logic when a player buys a passive generator.
 * @param {string} key - The key of the auto-upgrade to purchase (e.g., 'air_pump').
 */
function purchaseAutoUpgrade(key) {
    const upgrade = autoUpgrades[key];
    const cost = getAutoUpgradeCost(upgrade);

    if (cash >= cost) {
        cash -= cost;
        upgrade.owned++;
        
        recalculateCPS(); // Update the passive income rate
        updateCashDisplay(); // Update cash and CPS display
        renderUpgrades(); // Update buttons and shop display
        saveGame();

        console.log(`Purchased ${upgrade.name}. Owned: ${upgrade.owned}. New CPS: ${cashPerSecond}`);
    } else {
        // Use formatLargeNumber for cost warnings
        console.warn(`Not enough cash for ${upgrade.name}! Required: ${formatLargeNumber(cost)}.`);
    }
}

/**
 * Renders both Click Multiplier Jokers and Passive Generator Upgrades.
 * NOW: Wraps content in two separate 'upgrade-section' divs for two-column layout.
 */
function renderUpgrades() {
    upgradesZone.innerHTML = '';
    
    // --- 1. GENERATOR SECTION (PASSIVE INCOME) ---
    const generatorSection = document.createElement('div');
    generatorSection.className = 'upgrade-section';
    
    const autoTitle = document.createElement('h2');
    autoTitle.className = 'upgrade-title';
    autoTitle.textContent = 'Phoneme Generators (Passive Income)';
    generatorSection.appendChild(autoTitle);

    for (const key in autoUpgrades) {
        const upgrade = autoUpgrades[key];
        const cost = getAutoUpgradeCost(upgrade);
        
        const upgradeButton = document.createElement('button');
        upgradeButton.className = 'upgrade-button';

        const isAffordable = cash >= cost;
        const isDisabled = !isAffordable;
        
        if (isDisabled) {
            upgradeButton.classList.add('disabled');
        } else {
            upgradeButton.addEventListener('click', () => purchaseAutoUpgrade(key));
        }

        // Use formatLargeNumber for cost
        const formattedCost = formatLargeNumber(cost);
        const formattedCPS = numberFormatter.format(upgrade.baseCps);
        
        upgradeButton.innerHTML = `
            ${upgrade.name} (Owned: ${upgrade.owned})
            <span>Generates +${formattedCPS}/s | Cost: ${formattedCost}</span>
            <span>${upgrade.description}</span>
        `;
        generatorSection.appendChild(upgradeButton);
    }
    
    // --- 2. JOKER SECTION (CLICK MULTIPLIERS) ---
    const jokerSection = document.createElement('div');
    jokerSection.className = 'upgrade-section';

    const jokerTitle = document.createElement('h2');
    jokerTitle.className = 'upgrade-title';
    jokerTitle.textContent = 'Joker Multipliers (Permanent Click Upgrade)';
    jokerSection.appendChild(jokerTitle);

    for (const key in upgrades) {
        const upgrade = upgrades[key];

        if (key !== 'base') {
            
            const upgradeButton = document.createElement('button');
            
            const isAffordable = cash >= upgrade.cost;
            const isDisabled = upgrade.unlocked || !isAffordable;

            upgradeButton.className = 'upgrade-button'; 
            if (isDisabled) {
                upgradeButton.classList.add('disabled');
            } else {
                upgradeButton.addEventListener('click', () => purchaseUpgrade(key));
            }

            // Use formatLargeNumber for cost
            const formattedCost = formatLargeNumber(upgrade.cost);
            const statusText = upgrade.unlocked ? 'UNLOCKED' : `Cost: ${formattedCost}`;

            // Format multiplier using numberFormatter
            const formattedMultiplier = numberFormatter.format(upgrade.clickMultiplier);

            upgradeButton.innerHTML = `
                ${upgrade.buttonText} Joker (${upgrade.name})
                <span>Multiplier: x${formattedMultiplier} | ${statusText}</span>
            `;
            
            jokerSection.appendChild(upgradeButton);
        }
    }
    
    // Append both new sections to the main zone
    upgradesZone.appendChild(generatorSection);
    upgradesZone.appendChild(jokerSection);
}