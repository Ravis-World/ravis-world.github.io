const img = document.getElementById('lady-image');

img.onerror = function() {
    img.style.display = 'none';
};