function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const message = document.getElementById("resultMessage");

    message.style.opacity = 1;

    if (input === "butcher") {
        message.style.opacity = 1;
        message.style.color = "#0f0";
        message.textContent = "Access granted. The door opens...";
        setTimeout(() => {
            window.location.href = "Past The Tunnel/index.html";
        }, 3000);
    } else {
        message.style.opacity = 1;
        message.style.color = "red";
        message.textContent = "Incorrect keyword. Try again.";

        // Fade out after 3 seconds
        setTimeout(() => {
            message.style.opacity = 0;
        }, 3000);
    }
}