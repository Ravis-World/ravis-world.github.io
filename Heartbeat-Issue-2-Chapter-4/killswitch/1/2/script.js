function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer === "8^(1/8)") {
        window.location.href = "./3/readme.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}