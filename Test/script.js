console.log("js file loaded");

let videoPlayer = document.querySelector("#player");
let showControlBtn = document.querySelector("#showControls");
let playBtn = document.querySelector("#playBtn");

function videoPlay() {
  console.log("play");
}
function videoPause() {
  console.log("pause");
}
function showControl() {
  if (videoPlayer.getAttribute("controls")) {
    videoPlayer.removeAttribute("controls");
    showControlBtn.innerText = "Disable native control";
  } else {
    videoPlayer.setAttribute("controls", true);
    showControlBtn.innerText = "Show native control";
  }
}

function playVideo() {
  if (videoPlayer.paused) {
    playBtn.innerText = "Pause";
    videoPlayer.play();
  } else {
    playBtn.innerText = "Play";
    videoPlayer.pause();
  }
}

function pauseVideo() {
  videoPlayer.pause();
}
