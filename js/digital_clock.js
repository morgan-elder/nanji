function showTime() {
  let h = get_random_hours()
  let m = get_random_minutes()
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

}

function get_random_hours() {
  return random_number(0, 23)
}

function get_random_minutes() {
  return random_number(0, 59)
}

function random_number(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

showTime();

document.querySelector("#random-button").addEventListener("click", function () {
  showTime();
  changeJapaneseTimeText();
});