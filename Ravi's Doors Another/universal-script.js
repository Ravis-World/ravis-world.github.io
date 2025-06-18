let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let door4 = document.getElementById("door4");
let door5 = document.getElementById("door5");
function reload() {
    window.location.reload();
}
function displayYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
}
displayYear();