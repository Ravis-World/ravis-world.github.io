function translateToEnglish() {
    document.querySelector(".lang-change").innerHTML = `
        <div>
            <h2>Dear Sir,</h2>
            <p>How have you been?</p>
            <p id="word-wrap">I must inform you that this portal is currently broken. However, an emergency backup can be activated through the green portal. To do so, you must retrieve the citrine gemstone that, according to my research, was stolen by Creeper Jack. Without it, the portal remains non-functional.</p>
            <p>Take care of yourself.</p>
            <p>Sincerely,</p>
            <p>March 4, 2029</p>
            <p>Yōta Akamatsu</p>
            <p>Ravi [LAST_NAME]</p>
            <p>P.S.: DOVWWLY</p>
        </div>
    `;
    document.getElementById("after-click").style.visibility = "visible";  /* Make the after-click section visible */
}