let play = document.querySelector(".play");
let close = document.querySelector(".close");
let trailer = document.querySelector(".trailer");
let video = document.querySelector("video");

play.onclick = function () {
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.play();
};
close.onclick = function () {
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
};








