function checkAnswer() {
    const answer = parseFloat(document.getElementById("answer").value.trim());
    const correctAnswer = Math.pow(8, 1 / 8); // Calculate 8^(1/8)

    // Compare the user's answer with the correct answer, allowing for small rounding errors
    if (Math.abs(answer - correctAnswer) < 0.0001) {
        window.location.href = "3/readme.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}