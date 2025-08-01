function rollDice() {
    const button = document.querySelector("button");
    button.disabled = false;

    const p1 = Math.floor(Math.random() * 20) + 1; // Range from real numbers 0-19, then add 1
    const p2 = Math.floor(Math.random() * 20) + 1;
    const c1 = Math.floor(Math.random() * 20) + 1;
    const c2 = Math.floor(Math.random() * 20) + 1;

    const playerTotal = p1 + p2;
    const cjTotal = c1 + c2;

    document.getElementById("playerRolls").textContent = `🟥 You: ${p1} + ${p2} = ${playerTotal}`;
    document.getElementById("jackRolls").textContent = `🟩 Creeper Jack: ${c1} + ${c2} = ${cjTotal}`;

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");

    const playerWins = playerTotal >= 21 || playerTotal > cjTotal && playerTotal !== cjTotal;

    if (playerWins) {
        button.disabled = true
        resultDiv.textContent = "✅ Congratulations, you won.";
        setTimeout(() => {
            window.location.href = "./../../Ending/Ladder/index.html";
        }, 3000);
    } else {
        resultDiv.textContent = "❌ You lose! Creeper Jack offers another chance since he's a good boss.";
    }
}