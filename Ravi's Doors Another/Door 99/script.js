let chosenDoor = null;

// Only run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get button elements
    const btn1 = document.getElementById("door1");
    const btn2 = document.getElementById("door2");
    const btn3 = document.getElementById("door3");
    const btn4 = document.getElementById("door4");
    const btn5 = document.getElementById("door5");

    // Randomly select a door
    const randomDoor = Math.floor(Math.random() * 5);

    btn1.onclick = function () {
        chosenDoor = 0;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn1.innerHTML = "Door 1 Opened"
    };
    btn2.onclick = function () {
        chosenDoor = 1;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn2.innerHTML = "Door 2 Opened"
    };
    btn3.onclick = function () {
        chosenDoor = 2;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn3.innerHTML = "Door 3 Opened"
    };
    btn4.onclick = function () {
        chosenDoor = 2;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn4.innerHTML = "Door 4 Opened"
    };
    btn5.onclick = function () {
        chosenDoor = 2;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn5.innerHTML = "Door 5 Opened"
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