let chosenDoor = null;

// Only run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get button elements
    const btn1 = document.getElementById("door1");
    const btn2 = document.getElementById("door2");

    // Pick a random correct door (0 or 1)
    const randomDoor = Math.floor(Math.random() * 2);

    btn1.onclick = function () {
        chosenDoor = 0;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn1.innerHTML = "Door 1 Opened"
    };
    btn2.onclick = function () {
        chosenDoor = 1;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn2.innerHTML = "Door 2 Opened"
    };

    function checkDoors() {
        if (chosenDoor === randomDoor) {
            document.getElementById("success").style.display = "block";
            document.getElementById("failure").style.display = "none";
        } else {
            document.getElementById("failure").style.display = "block";
            document.getElementById("success").style.display = "none";
        }
    }
});