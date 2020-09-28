var btnsVideo = document.querySelectorAll('.btn-video');
var videoEl = document.querySelector('.video-wrap');
var videoClose = videoEl.querySelector('.video-close');

for (let btnVideo of btnsVideo) {
    btnVideo.addEventListener('click', function(event) {
        videoEl.classList.add('open');
    });

    videoClose.addEventListener('click', function(event) {
        videoEl.classList.remove('open');
    });
};