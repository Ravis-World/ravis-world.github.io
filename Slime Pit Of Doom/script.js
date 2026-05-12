document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) { // Check if the element exists
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});