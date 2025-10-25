// Event data for Raviolo's timeline
// This data structure has been updated to support multiple links per event.

const timelineEvents = [
    {
        id: 1,
        content: "🩺 Heartbeat: Facility Comes to Life",
        date: "January 16, 2017",
        description: "Player discovers a facility in ruins that brings itself to life. A mysterious voice helps the player defeat Dr. Κ.",
        links: [
            { label: "Heartbeat: Prologue", url: "https://sites.google.com/view/1000-heartbeats/prologue" }
        ]
    },
    {
        id: 2,
        content: "💼 Raviolo's Business Origins",
        date: "January 2029",
        description: "Raviolo finally gets a chance to work with the Toads in his own corporation.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=o25wteCGBz4" }
        ]
    },
    {
        id: 3,
        content: "🔴 Red's Adventure",
        date: "March 1-13, 2029",
        description: "5 birds are hired by Raviolo to stop the explosion of the Earth's Core.",
        links: [
            { label: "Red's Adventure Website", url: "https://sites.google.com/view/redsadventure/home" }
        ]
    },
    {
        id: 4,
        content: "🩺 Heartbeat (cont): New Facility Disaster",
        date: "January 1-6, 2030",
        description: "A disaster happened that had everything continue in a new facility. The player is still required to defeat Dr. Κ.",
        links: [
            { label: "Heartbeat: Issue 1 Chapter 8", url: "https://sites.google.com/view/1000-heartbeats/chapter-8" }
        ]
    },
    {
        id: 5,
        content: "🧙‍♂️ Raviolo The Magician",
        date: "February 1, 2030",
        description: "Raviolo is tasked to defeat Dr. Γ for taking over the world.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=X0wFGE8PvC4" }
        ]
    },
    {
        id: 6,
        content: "🚪 Ravi's Doors",
        date: "February 28, 2030",
        description: "Raviolo and his team needs to escape Door's gauntlet of 100 doors.",
        links: [
            { label: "Ravi's Doors Website", url: "https://sites.google.com/view/ravis-doors/home" }
        ]
    },
    {
        id: 7,
        content: "🌪️ Raviolo Vs The Time Tornado",
        date: "April 2030",
        description: "Raviolo stops a paranormal anomaly caused by an invisible man.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=-FVOavjdWgQ" }
        ]
    },
    {
        id: 8,
        content: "💥 Conflict: Planet Destruction",
        date: "August 14, 2030",
        description: "An unknown squad tries to stop Invisibility from mining a planet by destroying the planet Invisibility is on.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=mEpN4drW-8k" }
        ]
    },
    {
        id: 9,
        content: "🤝 《Ж (Zhe) /ʐɛ/》 (Convergence)",
        date: "August 15, 2030",
        description: "Raviolo gets a confirmation message from the unknown group indirectly to finish Invisibility's sidekick, Dr. Σ.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=oLE7nhdyyb4" }
        ]
    },
    {
        id: 10,
        content: "🐒 The Giant Disaster",
        date: "February 2031",
        description: "Raviolo and his team stop a giant monkey.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=5AwOAuA4xc8" }
        ]
    },
    {
        id: 11,
        content: "🌍 Raviolo: World's End",
        date: "March 2031",
        description: "Raviolo stops Dr. Γ from taking over the world again in a 5 part boss rush with the final boss not being Dr. Γ.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=tE0s2gFw2Zw" }
        ]
    },
    {
        id: 12,
        content: "🕵️ The Enemy Within",
        date: "June 3, 2031",
        description: "5 suspects are accused of being a part of a shooting; only one is a true enemy.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=R7oAz3W_oRw" }
        ]
    },
    {
        id: 13,
        content: "🕒 The Time Is Now, Ai Akamatsu",
        date: "June 4-5, 2031",
        description: "A girl can control time.",
        links: [
            { label: "itch.io Page", url: "https://ravis-world.itch.io/the-time-is-now-ai-akamatsu" }
        ]
    },
    {
        id: 14,
        content: "🌊 Undercurrent Of Time",
        date: "June 5, 2031 - 12:00 AM AEST",
        description: "A shadow is lost at sea and doesn't know what to do.",
        links: [
            { label: "Github Repository", url: "https://github.com/Ravis-World/Undercurrent-of-Time" },
            { label: "itch.io Page", url: "https://ravis-world.itch.io/undercurrent-of-time" },
            { label: "Game Jolt Page", url: "https://gamejolt.com/games/undercurrent_of_time/1018258" }
        ]
    },
    {
        id: 15,
        content: "🐉 ouroVoros",
        date: "July 28, 2031",
        description: "Raviolo tries to fight a mechanical dragon with the same intentions as Dr. Γ but with extra steps.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=tl_qrSGLoV4" }
        ]
    },
    {
        id: 16,
        content: "🔬 Colonising Aperture",
        date: "July 29, 2031",
        description: "Raviolo wants to colonise Aperture Laboratories.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=RnFQF-LxapQ" },
            { label: "Steam Workshop Collection", url: "https://steamcommunity.com/workshop/filedetails/?id=3498058511" }
        ]
    },
    {
        id: 17,
        content: "☕ Let's Drink Horror",
        date: "July 30, 2031",
        description: "Dr. Θ tries to kill a person at a bar with a poisonous drink.",
        links: [
            { label: "Github Repository", url: "https://github.com/Ravis-World/Lets-Drink-Horror-Text-Adventure" },
            { label: "itch.io Page", url: "https://ravis-world.itch.io/lets-drink-horror" },
            { label: "Game Jolt Page", url: "https://gamejolt.com/games/letsdrinkhorror/1017356" }
        ]
    },
    {
        id: 18,
        content: "🎃 The Halloween Party",
        date: "October 31, 2031",
        description: "Yōta and Víðir accidentally turn evil during a Halloween party.",
        links: [
            { label: "YouTube Video", url: "https://www.youtube.com/watch?v=jSdlXajoJbY" }
        ]
    }
];

const timelineContainer = document.getElementById('timelineContainer');
const eventModal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLinksContainer = document.getElementById('modalLinksContainer');
const modalCloseButton = document.querySelector('.modal-close-button');


// Function to render timeline events
function renderTimeline() {
    timelineEvents.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('timeline-event');
        eventDiv.dataset.id = event.id; // Store ID for modal lookup

        // Date element
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('timeline-event-date');
        dateDiv.textContent = event.date;
        eventDiv.appendChild(dateDiv);

        // Content element
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('timeline-event-content');
        contentDiv.innerHTML = `<h3>${event.content}</h3><p>${event.description}</p>`;
        contentDiv.addEventListener('click', () => showModal(event)); // Attach click listener
        eventDiv.appendChild(contentDiv);

        timelineContainer.appendChild(eventDiv);

        // Add visibility class for fade-in effect on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of element is visible
        observer.observe(eventDiv);
    });
}

// Function to show the modal with event details
function showModal(event) {
    if (event) {
        modalTitle.textContent = event.content;
        modalDescription.textContent = event.description;

        // Clear previous links
        modalLinksContainer.innerHTML = '';

        // Add new links if they exist
        if (event.links && event.links.length > 0) {
            event.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.textContent = link.label;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
                modalLinksContainer.appendChild(linkElement);
            });
            modalLinksContainer.style.display = 'flex'; // Show the links container
        } else {
            modalLinksContainer.style.display = 'none'; // Hide if no links
        }

        eventModal.style.display = 'flex'; // Show the modal
    }
}

// Function to hide the modal
function hideModal() {
    eventModal.style.display = 'none';
}

// Add event listener for the close button
modalCloseButton.addEventListener('click', hideModal);

// Close the modal if clicked outside the content
eventModal.addEventListener('click', function (e) {
    if (e.target === eventModal) {
        hideModal();
    }
});

// Close the modal if the Escape key is pressed
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && eventModal.style.display === 'flex') {
        hideModal();
    }
});

// --- JavaScript for updating the year in the footer and rendering timeline ---
document.addEventListener('DOMContentLoaded', function () {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    // Render the timeline once the DOM is ready
    renderTimeline();
});