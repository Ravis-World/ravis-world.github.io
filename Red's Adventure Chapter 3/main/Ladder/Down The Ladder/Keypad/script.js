let enteredCode = "";

function pressKey(num) {
    if (enteredCode.length < 6) {
        enteredCode += num;
        updateDisplay();
    }
}

function clearKeypad() {
    enteredCode = "";
    updateDisplay();
    document.getElementById("resultMessage").textContent = "";
}

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    pressKey(e.key);
  } else if (e.key === 'Enter') {
    submitCode();
  } else if (e.key.toLowerCase() === 'c') {
    clearKeypad();
  }
});


function updateDisplay() {
    let padded = enteredCode.padEnd(6, "_");
    document.getElementById("keypad-display").textContent = padded;
}

function submitCode() {
    const result = document.getElementById("resultMessage");

    if (enteredCode === "133002") {
        result.textContent = "✅ Correct! The vault unlocks.";
        result.style.color = "lime";
        setTimeout(() => {
            window.location.href = "./Past The Keypad/index.html"; // or your next step
        }, 2000);
    } else {
        result.textContent = "❌ Incorrect code.";
        result.style.color = "red";
        setTimeout(() => {
            clearKeypad();
        }, 2000)
    }
}