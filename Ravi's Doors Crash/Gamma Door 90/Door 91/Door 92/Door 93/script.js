$(function () {
    const correctSequence = ["⚗️", "🧪", "💡"];
    let inputSequence = [];

    $(".symbol").on("click", function () {
        const symbol = $(this).data("symbol");
        inputSequence.push(symbol);

        // Show current input sequence
        $("#statusMsg").html("Your input: " + inputSequence.join(" "));

        if (inputSequence.length === correctSequence.length) {
            if (inputSequence.join("") === correctSequence.join("")) {
                $("#statusMsg").html("Your input: " + inputSequence.join(" ") + "<br>✅ Code accepted! Ready to proceed.");
                $("#nextBtn").show();
                // Disable further clicks on symbols
                $(".symbol").prop("disabled", true);
            } else {
                $("#statusMsg").html("Your input: " + inputSequence.join(" ") + "<br>❌ Incorrect code. Try again.");
                inputSequence = [];
            }
        }
    });

    $("#nextBtn").on("click", function () {
        window.location.href = "Door 94/index.html";
    });
});