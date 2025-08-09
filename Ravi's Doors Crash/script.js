const images = [
    { src: "Index Images/cactus.jpg", alt: "A red cactus man, fully covered in a dark, glossy, and iridescent blue-black substance." },
    { src: "Index Images/dinosaur1.jpg", alt: "The legs of a bright green dinosaur, with its feet covered in a glossy, dark blue and green substance." },
    { src: "Index Images/dinosaur2.jpg", alt: "The tail of a green and black dinosaur figure, with a glob of a shiny, metallic gold-green substance stuck to it" },
    { src: "Index Images/dinosaur3.jpg", alt: "A blue and white pterodactyl lying on its back with its feet stuck in a shimmering, dark blue and green substance." },
    { src: "Index Images/dinosaur4.jpg", alt: "The leg of a brown and green dinosaur, with its foot stuck in a puddle of a metallic blue and gray substance." },
    { src: "Index Images/lion.jpg", alt: "A lion with its paws covered in a thick, glossy, iridescent blue and purple substance." },
    { src: "Index Images/toy1.jpg", alt: "A doll's lower half with its legs and feet covered in a thick, shiny, dark red slime." },
    { src: "Index Images/toy2.jpg", alt: "A close-up of a doll's feet, wearing red boots, with a shimmering, dark blue and green slime-like substance clinging onto the boots." }
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
    if (idx === images.length - 2) {
        $imgEl.css('object-position', '50% center'); // Adjust as needed
    }
}

$prevBtn.on('click', function () {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});
$nextBtn.on('click', function () {
    current = (current + 1) % images.length;
    showImage(current);
});
$startButton.on('click', function () {
    redirectToNextPage();
});
function redirectToNextPage() {
    window.location.href = "Alpha Door 77/index.html"; // Change this to your desired URL
}

// Initialize
showImage(current);