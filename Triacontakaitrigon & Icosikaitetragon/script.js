function displayYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
}
displayYear(); // Call the function to display the year when the page loads