// Array of your real items and image files representing each design.
const items = [
    {
        id: "item-adofai-1",
        title: "Hyphen - ^/7(L|?[_(L+#+&|^(o)",
        game: "A Dance of Fire and Ice",
        desc: `Head icons created by Pixel perfect from Flaticon: https://www.flaticon.com/free-icons/head\n\nLetters floating around track provided by PikWizard: https://pikwizard.com/png/abstract-scattered-letters-and-symbols-on-transparent-background/4df6ffab6839cca219d8621ef520f471`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3731966887",
        img: "https://images.steamusercontent.com/ugc/18303061561911961812/B1F191EA481470A77648D32396BB3F42DCC8884B/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-2",
        title: "CS4W - Collapse",
        game: "A Dance of Fire and Ice",
        desc: `Image of Space by Hans from Pixabay: https://pixabay.com/users/hans-2/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1655503\n\nWitches Hat Icon by jemastock on Magnific: https://www.magnific.com/free-vector/halloween-witch-hat-isolated-illustration_88414595.htm#fromView=keyword&page=1&position=0&uuid=a6f1fa2d-a6e4-48b3-9a15-1fe041a8531f&query=Witch+hat+png`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3742029341",
        img: "https://images.steamusercontent.com/ugc/14605721005713364077/4AA3204AC57A7AAC6C4789729A163CE531FB2F5D/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-3",
        title: "NoLongerNull - Beneath The Final Light",
        game: "A Dance of Fire and Ice",
        desc: `Level Tile Image by juicy_fish on Magnific: https://www.magnific.com/free-vector/performance-meter-cog_392949425.htm#fromView=keyword&page=1&position=0&uuid=d4d7eac3-4905-487c-b269-54cc2b336d72&query=Pressure+logo`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3745315129",
        img: "https://images.steamusercontent.com/ugc/12312989070797195224/3387CF9F5CBA26D2170670AB7C6871925B571873/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-4",
        title: "HyuN - Cross†Revolution (feat. LyuU)",
        game: "A Dance of Fire and Ice",
        desc: `Blue Flower Image by gstudioimagen on Freepik: https://www.freepik.com/free-vector/flower-cute-illustration_145244016.htm`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3745317565",
        img: "https://images.steamusercontent.com/ugc/12655133960742327800/04088BE7C318591F7D22D9B8CDA074B48344CC5A/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-5",
        title: "Human Servant - Gamol Hundgēar",
        game: "A Dance of Fire and Ice",
        desc: `Glitched Screen Image by Techfiesta - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=66388215\nRoad Video by Kmeel.com from Pixabay: https://pixabay.com/users/kmeel_com-5075826/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=80398\nBlack To White Video by Christian Bodhi from Pixabay: https://pixabay.com/users/christianbodhi-9869182/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=187666\nTunnel Video by Adis Resic from Pixabay: https://pixabay.com/users/adisresic-9188734/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=227152\nEntire Video strung together by me\nLevel Tile icons created by Freepik - Flaticon: https://www.flaticon.com/free-icons/values`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3745323899",
        img: "https://images.steamusercontent.com/ugc/11547719491396603532/B50B1AC86CA5582A312E6AEECEBFF67EF3C94D8F/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-6",
        title: "Sad Keyboard Guy - Lullaby For An Android",
        game: "A Dance of Fire and Ice",
        desc: `Background designed by ITV`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3745326477",
        img: "https://images.steamusercontent.com/ugc/11077994790094549120/EDDBBA4CBAAC466ADD36DB996D5EE3E246FAFE12/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-adofai-7",
        title: "816ThreeNumbers - Only 1 Minute",
        game: "A Dance of Fire and Ice",
        desc: `Level Tile icons created by Freepik - Flaticon: https://www.flaticon.com/free-icons/planet`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3745330393",
        img: "https://images.steamusercontent.com/ugc/12882458856226622362/558FA655CAB26A9FD7D8423448230AAB1271C466/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-plague-1",
        title: "Φ-Anomaly", 
        game: "Plague Inc: Evolved",
        desc: "Shortly after the events of ouroVoros, Dr. Φ unleashes a plagiarised plague upon the world — a semi-transparent slime masquerading as a vampire virus. Those who survive the bite do not just die. Some change. Australia locks down immediately. Raviolo and his team begin a cure before the first anomaly is fully understood. The villains never win — but this time, the world might not either.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3628048840",
        img: "https://images.steamusercontent.com/ugc/13810752722073457394/E39458390D76FAE38ABCC65038B63E26EAF9560F/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-6",
        title: "Colonising Aperture Part 6",
        game: "Portal 2",
        desc: `Hello, user. It's Richard Dale. You may wonder where your friend is.
        That's okay, he already broke out. Now, all you need to do is destroy the main core of Aperture via conveniently placed targets; we will then make an all-out attack to take control and stop the central core. Thank you for your service.`,
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3528404991",
        img: "https://images.steamusercontent.com/ugc/11548482930445270124/418765D44058651D00D13055A54DA79B4349D4EB/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-5",
        title: "Colonising Aperture Part 5",
        game: "Portal 2",
        desc: "You find the relaxation vault. No bed; your friend must be somewhere else. But as you search the vault disaster strikes.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3505599417",
        img: "https://images.steamusercontent.com/ugc/16788778553155120027/48C177A59A3FA8AAA11FF788DB39403969EF5857/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-4",
        title: "Colonising Aperture Part 4",
        game: "Portal 2",
        desc: "You sense that you are getting closer to your friend. Raviolo gives you the exact coordinates of the relaxation vault; it's just past this course.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3495835367",
        img: "https://images.steamusercontent.com/ugc/10231721105551258816/E906B105D15B52613F568B79D67B8FC4A76B7D3E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-3",
        title: "Colonising Aperture Part 3",
        game: "Portal 2",
        desc: "You stumble across a test that was meant to be solved with the Paint Gun. I'm sure you can solve it another way.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3485121154",
        img: "https://images.steamusercontent.com/ugc/13709359579510932136/CB1753A41562681B2C0272E1001C134043FC0531/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-2",
        title: "Colonising Aperture Part 2",
        game: "Portal 2",
        desc: "You get a distress signal that your friend is trapped in a relaxation vault and needs your help. So you go through some test chambers to get to him.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3474328996",
        img: "https://images.steamusercontent.com/ugc/16559057337709344641/4ED4F39F5111D8C6EC0485A927D09DBAE5947C87/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        id: "item-portal-1",
        title: "Colonising Aperture Part 1",
        game: "Portal 2",
        desc: "Raviolo sent you to investigate the depths of Aperture Laboratories in Michigan.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3453292547",
        img: "https://images.steamusercontent.com/ugc/51335054349498291/58E2573526FAE3DA7C33E95B31FBA4705F530703/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }
];

let currentActiveFolder = '';

// Initialize state
window.addEventListener('DOMContentLoaded', () => {
    filterItems();
});

// Open a folder on click
function openFolder(folderName) {
    currentActiveFolder = folderName;
    
    // Toggle view visibility
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('folder-view').classList.remove('hidden');
    
    // Set folder heading title
    document.getElementById('current-folder-header').innerText = folderName;
    
    // Render specific games list
    filterItems();
}

// Return to selection boxes
function goBackToLanding() {
    currentActiveFolder = '';
    document.getElementById('folder-view').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    
    // Reset input
    document.getElementById('search-input').value = '';
}

// Filter and Render the list
function filterItems() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const grid = document.getElementById('workshop-grid');
    grid.innerHTML = '';

    const filtered = items.filter(item => {
        const matchesFolder = item.game === currentActiveFolder;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
        return matchesFolder && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0; color: var(--text-muted); font-size: 0.875rem;">
                No workshop items match your search.
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = "item-card";
        
        card.innerHTML = `
            <div>
                <!-- Image Photo -->
                <div class="thumbnail-container">
                    <img src="${item.img}" alt="${item.title}" 
                         class="item-thumbnail"
                         onerror="this.src='https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf'">
                </div>

                <!-- Card Body Content -->
                <div class="item-card-body">
                    <h3 class="item-card-title" title="${item.title}">${item.title}</h3>
                    <p class="item-card-desc">${item.desc}</p>
                </div>
            </div>

            <!-- Card Action Button -->
            <div class="item-card-footer">
                <a href="${item.link}" target="_blank" class="steam-link-btn">
                    View on Steam Workshop ↗
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}