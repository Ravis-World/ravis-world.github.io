// Configuration for generic placeholders
const title = "Button of ";
const blank = "_____";

// --- Custom Entries Dictionary ---
// Add entries here to override the generic placeholder for a specific letter/key.
const customGames = {
    'A': {
        title: "Button of Activation",
        primaryUrl: "https://ravis-world.itch.io/button-of-activation",
        secondaryUrl: "https://gamejolt.com/games/button-of-activation/1031167",
        secondaryLabel: "Game Jolt",
        image: "https://m.gjcdn.net/game-thumbnail/1000/1031167-wviusqts-v4.webp",
        description: "You are Henchman Qess. &Omega;, tasked with repeatedly challenging a compromised security console using cryptic commands to complete the Breach Protocol and blow up the Sun."
    },
    'D': {
        title: "Button of Deactivation",
        primaryUrl: "https://ravis-world.itch.io/button-of-deactivation",
        secondaryUrl: "https://gamejolt.com/games/button_of_deactivation/1023639",
        secondaryLabel: "Game Jolt",
        image: "https://m.gjcdn.net/game-thumbnail/500/1023639-rkfhkrg8-v4.webp",
        description: "The objective of this game is to just click a button. That's it. No tricks, no traps, just pure simplicity. Or is it?"
    },
    'E': {
        title: "Button of Epiglottises",
        primaryUrl: "https://ravis-world.itch.io/button-of-epiglottises",
        secondaryUrl: "https://gamejolt.com/games/Button-of-Epiglottises/1024417",
        secondaryLabel: "Game Jolt",
        image: "https://m.gjcdn.net/game-thumbnail/500/1024417-kujqfxib-v4.webp",
        description: "The world's first idle clicker game about rare epiglottal and pharyngeal consonants."
    },
    'F': {
        title: "Button of Flaws",
        primaryUrl: "https://ravis-world.itch.io/button-of-flaws",
        secondaryUrl: "https://gamejolt.com/games/button-of-flaws/1026226",
        secondaryLabel: "Game Jolt",
        image: "https://m.gjcdn.net/game-thumbnail/500/1026226-ll-qjmsx4jc-v4.webp",
        description: `"Button of Flaws" is a 10-level puzzle game where the system is working against you.`
    },
    'R': {
        title: "Button of Rubies",
        primaryUrl: "https://ravis-world.itch.io/button-of-rubies",
        secondaryUrl: "https://gamejolt.com/games/button-of-rubies/1031924",
        secondaryLabel: "Game Jolt",
        image: "https://m.gjcdn.net/game-thumbnail/1000/1031924-effmwnjz-v4.webp",
        description: "You play as a thief attempting to steal Team Toadette's vast fortune by hitting a single button during a crucial 1-second window that opens after a long wait. "
    },
    '&': {
        title: "Button of & (Ampersand)",
        primaryUrl: "",
        secondaryUrl: "",
        secondaryLabel: "Game Jolt",
        // Uses the same placeholder style as generic entries
        image: "https://placehold.co/300x180/6366f1/ffffff?text=Game+%26+Thumbnail",
        description: `This game is not available yet.`
    }
    // Placeholder entries do NOT need to be listed here.
};
// ---------------------------------

const games = [];
// Define all the keys we want to process: A-Z, plus &
const gameKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&'.split('');

// Loop through all defined keys
gameKeys.forEach(letter => {
    const customEntry = customGames[letter];

    if (customEntry) {
        // Use the fully customised entry data
        games.push(customEntry);
    } else {
        // Use the generic placeholder data with EMPTY URLs
        games.push({
            title: title + letter + blank,
            primaryUrl: "", // Use empty strings for conditional rendering
            secondaryUrl: "",
            secondaryLabel: "Game Jolt",
            image: `https://placehold.co/300x180/6366f1/ffffff?text=Game+${letter}+Thumbnail`,
            description: `This game is not available yet.`
        });
    }
});

const container = document.getElementById("game-list");

games.forEach(game => {
    const gameDiv = document.createElement("div");

    // Use the custom semantic class
    gameDiv.className = "game-card";

    // Determine the content for the buttons/placeholder
    let buttonContent;
    if (game.primaryUrl) {
        // If a primary URL exists, generate the active button group
        buttonContent = `
            <div class="button-group">
                <a href="${game.primaryUrl}" target="_blank" class="cta-button primary">
                    Itch.io
                </a>
                <a href="${game.secondaryUrl}" target="_blank" class="cta-button secondary">
                    ${game.secondaryLabel}
                </a>
            </div>
        `;
    } else {
        // If no primary URL exists (placeholder), generate the "Coming Soon" label
        buttonContent = `
            <span class="placeholder-label">
                Coming Soon
            </span>
        `;
    }

    // Card content structure
    gameDiv.innerHTML = `
        <!-- Image section links to the primary URL only if it exists -->
        <a href="${game.primaryUrl || '#'}" ${game.primaryUrl ? 'target="_blank"' : ''} class="image-link">
            <img 
                src="${game.image}" 
                alt="${game.title} Thumbnail" 
                onerror="this.onerror=null; this.src='https://placehold.co/300x180/9CA3AF/ffffff?text=Image+Error'"
            >
        </a>
        <div class="card-content">
            <!-- Title section -->
            <div class="game-title">
                ${game.title}
            </div>
            <!-- Description section -->
            <div class="game-description">
                ${game.description}
            </div>
            
            <!-- Dynamic Button or Placeholder -->
            ${buttonContent}
        </div>
    `;
    container.appendChild(gameDiv);
});