function watchVideo() {
    // Show the video section
    var sections = document.getElementsByClassName('video-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'flex';
    }
    // Hide all video options initially
    document.getElementById('main-video').style.display = 'none';
    document.getElementById('yt-frame').style.display = 'none';
    document.getElementById('video-text').style.display = 'none';
    // Show video option buttons
    document.getElementById('video-buttons').style.display = 'block';
}

function showMp4() {
    document.getElementById('main-video').style.display = 'block';
    document.getElementById('yt-frame').style.display = 'none';
    document.getElementById('video-text').style.display = 'none';
}

function showYoutube() {
    document.getElementById('main-video').style.display = 'none';
    document.getElementById('yt-frame').style.display = 'block';
    document.getElementById('video-text').style.display = 'none';
}

function showText() {
    document.getElementById('main-video').style.display = 'none';
    document.getElementById('yt-frame').style.display = 'none';
    document.getElementById('video-text').style.display = 'block';
}

function startBetaLevels() {
    window.location.href = '../../../../../../../../Beta Door 84/index.html';
}