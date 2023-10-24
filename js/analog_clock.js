var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  const h = Math.floor(Math.random() * (12 - 0 + 1) + 0);
  const m = Math.floor(Math.random() * (59 - 0 + 1) + 0);
  const hDeg = h * 30 + m * (360 / 720)
  const mDeg = m * 6
  const hEl = document.querySelector('.hour-hand');
  const mEl = document.querySelector('.minute-hand');
  const ampmEl = document.querySelector('.ampm');

  hEl.style.transform = "rotate(" + hDeg + "deg)";
  mEl.style.transform = "rotate(" + mDeg + "deg)";
  ampmEl.innerHTML = Math.floor(Math.random() * (2 - 1 + 1) + 1) === 1 ? "AM" : "PM";

}

clock();

document.querySelector("#random-button").addEventListener("click", function () {
  clock();

});

