// console.log("Haaii");
const music = document.getElementById("better");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

playBtn.addEventListener("click", function () {
  music.play();
});

pauseBtn.addEventListener("click", function () {
  music.pause();
});

stopBtn.addEventListener("click", function () {
  music.pause();
  music.currentTime = 0;
});

skipBack.addEventListener("click", function () {
  music.currentTime = music.currentTime - 10;
});

skipFor.addEventListener("click", function () {
  music.currentTime = music.currentTime + 10;
});
