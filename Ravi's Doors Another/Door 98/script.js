let chosenDoor = null;

// Only run after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get button elements
    const btn1 = document.getElementById("door1");
    const btn2 = document.getElementById("door2");
    const btn3 = document.getElementById("door3");
    const btn4 = document.getElementById("door4");

    // Randomly select a door
    const randomDoor = Math.floor(Math.random() * 4);

    btn1.onclick = function () {
        chosenDoor = 0;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn1.innerHTML = "Door 1 Opened"
    };
    btn2.onclick = function () {
        chosenDoor = 1;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn2.innerHTML = "Door 2 Opened"
    };
    btn3.onclick = function () {
        chosenDoor = 2;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn3.innerHTML = "Door 3 Opened"
    };
    btn4.onclick = function () {
        chosenDoor = 3;
        checkDoors();
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn4.innerHTML = "Door 4 Opened"
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

    // --- Fruit Challenge Logic ---
    const fruitButtons = [
        document.getElementById("fruit1"),
        document.getElementById("fruit2"),
        document.getElementById("fruit3"),
        document.getElementById("fruit4")
    ];
    const fruitSuccess = document.getElementById("fruit-success");
    const fruitFailure = document.getElementById("fruit-failure");
    let correctFruit = Math.floor(Math.random() * 4);

    function resetFruitChallenge() {
        fruitButtons.forEach(b => {
            b.disabled = false;
        });
        fruitSuccess.style.display = "none";
        fruitFailure.style.display = "none";
        correctFruit = Math.floor(Math.random() * 4);
    }

    if (fruitButtons[0]) {
        fruitButtons.forEach((btn, idx) => {
            btn.onclick = function () {
                fruitButtons.forEach(b => b.disabled = true);
                if (idx === correctFruit) {
                    fruitSuccess.style.display = "block";
                    fruitFailure.style.display = "none";
                } else {
                    fruitFailure.style.display = "block";
                    fruitSuccess.style.display = "none";
                }
            };
        });

        // Add event listener for Try Again button
        const fruitTryAgain = document.getElementById("fruit-try-again");
        if (fruitTryAgain) {
            fruitTryAgain.onclick = resetFruitChallenge;
        }
    }
});