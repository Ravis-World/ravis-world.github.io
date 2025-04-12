function checkAnswer() {
    const answer = document.getElementById("answer").value.trim();
    const correctAnswer = "8^(1/8)"; // The correct answer as a string

    // Compare the user's answer with the correct answer as text
    if (answer === correctAnswer) {
        window.location.href = "3/readme.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}