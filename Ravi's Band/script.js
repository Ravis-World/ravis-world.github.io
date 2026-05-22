/*
    =========================================
    DYNAMIC ROSTER CONFIGURATION BLOCK
    =========================================
    Simply add or remove objects from these arrays to update the site.
    Available visuals (theme): "purple", "pink", "amber", "emerald", "blue"
*/

// 1. Core Band Members List
const bandMembers = [
    {
        name: "Ravi's World",
        role: "Leader",
        bio: "The leader of the group. Works with Musescore and Soundtrap.",
        theme: "purple",
        tag: "Ravi's World",
        image: "Images/Ravi&apos;s World In Plotagon.png"
    },
    {
        name: "Diamond Sparkles",
        role: "Singer",
        bio: "Epic singer and carer of Ravi's World.",
        theme: "pink",
        tag: "Diamond Sparkles",
        image: "Images/Diamond Sparkles In Plotagon.png"
    }
];

// 2. Featured Guest Artists List
const featuredArtists = [
    {
        name: "Hitsune Kumi",
        role: "Guest Voice",
        bio: "Appears in many songs with Japanese lyrics.",
        theme: "purple",
        tag: "Wave Tech",
        image: "Images/Hitsune Kumi.webp"
    },
    {
        name: "Anna Nyui",
        role: "Special Vocalist",
        bio: "Brought vocal frequencies to one collaborative song meant to be a jab at the number 10.",
        theme: "pink",
        tag: "Guest Voice",
        image: "https://placehold.co/600x400?text=Error:+Needs+Permission" // Image of Nyui requires permission
    },
    {
        name: "Bennett",
        role: "Guest Voice",
        bio: "May appear alongside other featured artists.",
        theme: "amber",
        tag: "Wave Tech",
        image: "Images/Bennett.png"
    },{
        name: "Esther",
        role: "Guest Voice",
        bio: "Appears in one song about food.",
        theme: "emerald",
        tag: "Wave Tech",
        image: "Images/Esther.png"
    },
    {
        name: "SHIRA",
        role: "Guest Voice",
        bio: "Appears alongside Bennett, mostly.",
        theme: "blue",
        tag: "Wave Tech",
        image: "Images/SHIRA.png"
    },
];

// Function to dynamically render any set of cards
function renderRoster(dataArray, targetContainerId) {
    const container = document.getElementById(targetContainerId);
    if (!container) return;

    // Clear existing markup
    container.innerHTML = "";

    dataArray.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";

        // Images utilize 'object-fit: contain' via CSS class '.member-img'
        // Fallback handled seamlessly inside inline 'onerror'
        card.innerHTML = `
                        <div class="member-visual visual-${member.theme}">
                            <img class="member-img" src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <span class="member-placeholder-tag" style="display: none;">${member.tag}</span>
                        </div>
                        <div class="member-info">
                            <div class="member-title-row">
                                <h3 class="member-name">${member.name}</h3>
                                <span class="member-role role-${member.theme}">${member.role}</span>
                            </div>
                            <p class="member-bio">${member.bio}</p>
                        </div>
                    `;
        container.appendChild(card);
    });
}

// Toast notifications
function showToast(message) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toast-text');
    text.innerText = message;

    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Trigger render processes on page load
window.addEventListener('DOMContentLoaded', () => {
    renderRoster(bandMembers, "team-roster-container");
    renderRoster(featuredArtists, "featured-roster-container");
    showToast("Welcome to Ravi's Band Official Space");
});

// Get full year
document.getElementById("year").textContent = new Date().getFullYear();