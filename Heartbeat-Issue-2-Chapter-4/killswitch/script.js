function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer === "6,11,13") {
        window.location.href = "./1/readmepls.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}