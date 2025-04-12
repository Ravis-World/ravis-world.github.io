function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer === "13,7") {
        window.location.href = "./2/important.html";
    } else {
        alert("Incorrect answer. Try again!");
    }
}