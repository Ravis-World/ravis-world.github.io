const images = [
    { src: "dinosaur1.jpg", alt: "Slime on a winged dinosaur's foot." },
    { src: "lion.jpg", alt: "Lion's feet trapped in slime." },
    { src: "dinosaur2.jpg", alt: "Slime on a green dinosaur's tail." },
    { src: "toy.jpg", alt: "Model of a child stuck in slime." }
];

let current = 0;
const $imgEl = $('#carouselImage');
const $prevBtn = $('#prevBtn');
const $nextBtn = $('#nextBtn');
const $startButton = $('#startButton');

function showImage(idx) {
    $imgEl.attr('src', images[idx].src);
    $imgEl.attr('alt', images[idx].alt);
    // Reset object-position
    $imgEl.css('object-position', '');
    // If it's the last image, shift image content to the left
    if (idx === images.length - 1) {
        $imgEl.css('object-position', '50% center'); // Adjust as needed
    }
}

$prevBtn.on('click', function() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});
$nextBtn.on('click', function() {
    current = (current + 1) % images.length;
    showImage(current);
});
$startButton.on('click', function() {
    redirectToNextPage();
});
function redirectToNextPage() {
    window.location.href = "Alpha Door 77/index.html"; // Change this to your desired URL
}

// Initialize
showImage(current);