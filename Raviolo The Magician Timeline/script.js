// Event data for Raviolo's timeline
const timelineEvents = [
    {
        id: 1,
        content: "🩺 Heartbeat: Facility Comes to Life",
        date: "January 16, 2017",
        description: "Player discovers a facility in ruins that brings itself to life. A mysterious voice helps the player defeat Dr. Κ.",
        link: "https://sites.google.com/view/1000-heartbeats/prologue"
    },
    {
        id: 2,
        content: "💼 Raviolo's Business Origins",
        date: "January 2029",
        description: "Raviolo finally gets a chance to work with the Toads in his own corporation.",
        link: "https://www.youtube.com/watch?v=o25wteCGBz4"
    },
    {
        id: 3,
        content: "🔴 Red's Adventure",
        date: "March 1-13, 2029",
        description: "5 birds are hired by Raviolo to stop the explosion of the Earth's Core.",
        link: "https://sites.google.com/view/redsadventure/home"
    },
    {
        id: 4,
        content: "🩺 Heartbeat (cont): New Facility Disaster",
        date: "January 1-6, 2030",
        description: "A disaster happened that had everything continue in a new facility. The player is still required to defeat Dr. Κ.",
        link: "https://sites.google.com/view/1000-heartbeats/chapter-8"
    },
    {
        id: 5,
        content: "🧙‍♂️ Raviolo The Magician",
        date: "February 1, 2030",
        description: "Raviolo is tasked to defeat Dr. Γ for taking over the world.",
        link: "https://www.youtube.com/watch?v=X0wFGE8PvC4"
    },
    {
        id: 6,
        content: "🚪 Ravi's Doors",
        date: "February 28, 2030",
        description: "Raviolo and his team needs to escape Door's gauntlet of 100 doors.",
        link: "https://sites.google.com/view/ravis-doors/home"
    },
    {
        id: 7,
        content: "🌪️ Raviolo Vs The Time Tornado",
        date: "April 2030",
        description: "Raviolo stops a paranormal anomaly caused by an invisible man.",
        link: "https://www.youtube.com/watch?v=-FVOavjdWgQ"
    },
    {
        id: 8,
        content: "💥 Conflict: Planet Destruction",
        date: "August 14, 2030",
        description: "An unknown squad tries to stop Invisibility from mining a planet by destroying the planet Invisibility is on.",
        link: "https://www.youtube.com/watch?v=mEpN4drW-8k"
    },
    {
        id: 9,
        content: "🤝 《Ж (Zhe) /ʐɛ/》 (Convergence)",
        date: "August 15, 2030",
        description: "Raviolo gets a confirmation message from the unknown group indirectly to finish Invisibility's sidekick, Dr. Σ.",
        link: "https://www.youtube.com/watch?v=oLE7nhdyyb4"
    },
    {
        id: 10,
        content: "🐒 The Giant Disaster",
        date: "February 2031",
        description: "Raviolo and his team stop a giant monkey.",
        link: "https://www.youtube.com/watch?v=5AwOAuA4xc8"
    },
    {
        id: 11,
        content: "🌍 Raviolo: World's End",
        date: "March 2031",
        description: "Raviolo stops Dr. Γ from taking over the world again in a 5 part boss rush with the final boss not being Dr. Γ.",
        link: "https://www.youtube.com/watch?v=tE0s2gFw2Zw"
    },
    {
        id: 12,
        content: "🕵️ The Enemy Within",
        date: "June 2031",
        description: "5 suspects are accused of being a part of a shooting; only one is a true enemy.",
        link: "https://www.youtube.com/watch?v=R7oAz3W_oRw"
    },
    {
        id: 13,
        content: "🐉 ouroVoros",
        date: "July 28, 2031",
        description: "Raviolo tries to fight a mechanical dragon with the same intentions as Dr. Γ but with extra steps.",
        link: "https://www.youtube.com/watch?v=tl_qrSGLoV4"
    },
    {
        id: 14,
        content: "🔬 Colonising Aperture",
        date: "July 29, 2031",
        description: "Raviolo wants to colonise Aperture Laboratories.",
        link: "https://www.youtube.com/watch?v=RnFQF-LxapQ"
    }
];

const timelineContainer = document.getElementById('timelineContainer');
const eventModal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLinkContainer = document.querySelector('.modal-link'); // Get the container for the link
const modalLink = document.getElementById('modalLink'); // Get the link itself
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

        // Set link properties and make it visible if a link exists
        if (event.link) {
            modalLink.href = event.link;
            modalLink.textContent = "Go To " + event.link; // Or event.linkText if you add that to data
            modalLinkContainer.style.display = 'block'; // Show the link container
        } else {
            modalLinkContainer.style.display = 'none'; // Hide if no link
        }

        eventModal.style.display = 'flex'; // Show the modal
    }
}

// Function to hide the modal
function hideModal() {
    eventModal.style.display = 'none';
    modalLinkContainer.style.display = 'none'; // Ensure link is hidden when modal closes
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