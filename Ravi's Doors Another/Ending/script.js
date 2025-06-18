document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        { text: "Congratulations!", font: "inherit" },
        { text: "¡Felicidades!", font: "inherit" },
        { text: "Félicitations!", font: "inherit" },
        { text: "Glückwunsch!", font: "inherit" },
        { text: "Congratulazioni!", font: "inherit" },
        { text: "おめでとう！", font: "inherit" },
        { text: "축하해요!", font: "inherit" },
        { text: "恭喜！", font: "inherit" },
        { text: "बधाई हो!", font: "inherit" },
        { text: "Tebrikler!", font: "inherit" },
        { text: "Поздравляю!", font: "inherit" },
        { text: "ЧеŁстiтам!", font: "Avian" }
    ];

    let index = 0;
    const box = document.getElementById('language-text');

    function rotateLanguage() {
        // Slide left (fade out)
        box.style.transform = 'translateX(-100%)';
        box.style.opacity = '0';

        setTimeout(() => {
            // Update text
            const current = phrases[index];
            box.textContent = current.text;
            box.style.fontFamily = current.font;

            // Reset slide
            box.style.transform = 'translateX(100%)';

            // Animate in (slide to center)
            requestAnimationFrame(() => {
                box.style.transition = 'none';
                requestAnimationFrame(() => {
                    box.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                    box.style.transform = 'translateX(0)';
                    box.style.opacity = '1';
                });
            });

            index = (index + 1) % phrases.length;
        }, 500); // Match this to the transition duration
    }

    rotateLanguage(); // Start immediately
    setInterval(rotateLanguage, 5000);
});