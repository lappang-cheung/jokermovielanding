function menuToggle() {
    var sideNav = document.querySelector('.sidebar');
    var closeBtn = document.querySelector('.sidebar_close');
    sideNav.classList.toggle('activeBtn');
    closeBtn.classList.toggle('activeClose');
}

function toggle() {
    var trailer = document.querySelector('.trailer');
    var videos = document.querySelectorAll('iframe, video');
    trailer.classList.toggle('active');
    
    Array.prototype.forEach.call(videos, function (video) {
        if (video.tagName.toLowerCase() === 'video') {
            video.pause();
        } else {
            var src = video.src;
            video.src = src;
        }
    });
}