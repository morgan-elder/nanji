// hours and minutes to Japanese tim in romaji 
const numbers_romaji = ["rei", "ichi", "ni", "san", "yon", "go", "roku", "shichi", "hachi", "ku", "juu", "juuichi", "juuni"];
const tens_romaji = ["", "juu", "nijuu", "sanjuu", "yonjuu", "gojuu"];
const hours_romaji = ["", "ichi", "ni", "san", "yon", "go", "roku", "shichi", "hachi", "ku", "juu", "juuichi", "juuni"];
const minutes_romaji = ["", "ip-pun", "ni-fun", "san-pun", "yon-pun", "go-fun", "rop-pun", "nana-fun", "hap-pun", "kyuu-fun"];

function toJapaneseTimeRomaji(hour, minute, session) {
  let minute_ones = minute % 10;
  let minute_tens = Math.floor(minute / 10);
  let japaneseHour = (hour % 12 === 0) ? hours_romaji[12] : hours_romaji[hour % 12];
  let japaneseMinute = minutes_romaji[minute_ones];
  let japaneseSession = (session === "AM") ? "gozen" : "gogo";

  if (minute_ones === 0 && minute_tens > 0) {
    japaneseMinute = tens_romaji[minutes_tens] + "jup-pun"
  } else {
    japaneseMinute = tens_romaji[minute_tens] + " " + minutes_romaji[minute_ones];
  }


  return japaneseSession + " " + japaneseHour + "-ji " + japaneseMinute;
}


function toJapaneseTimeHiragana(hour, minute) {
  let japaneseHour = hours_hiragana[hour % 12];
  let japaneseMinute = "";

  if (minute === 0) {
    japaneseMinute = "ふん";
  } else if (minute < 5) {
    japaneseMinute = "ごふん";
  } else if (minute === 5) {
    japaneseMinute = "ごぷん";
  } else if (minute < 10) {
    japaneseMinute = minutes_hiragana[1] + minutes_hiragana[minute % 5];
  } else if (minute % 10 === 0) {
    japaneseMinute = tens_hiragana[minute / 10] + "ぷん";
  } else {
    japaneseMinute = tens_hiragana[Math.floor(minute / 10)] + minutes_hiragana[minute % 10];
  }

  return japaneseHour + "じ" + japaneseMinute;
}

function changeJapaneseTimeText() {
  let clock_display_text = document.querySelector("#MyClockDisplay").textContent;
  let hours = clock_display_text.split(":")[0];
  let minutes = clock_display_text.split(":")[1].split(" ")[0];
  let session = clock_display_text.split(" ")[1];
  // let hiragana_time = toJapaneseTimeHiragana(hours, minutes);
  let romaji_time = toJapaneseTimeRomaji(hours, minutes, session);
  document.querySelector("#japanese-time").textContent = romaji_time;
}

changeJapaneseTimeText();

document.querySelector("#japanese-toggle").addEventListener("click", function () {
  let japanese_time = document.querySelector("#japanese-time");
  let hidden = japanese_time.hasAttribute("hidden");
  if (hidden) {
    japanese_time.removeAttribute("hidden");
  } else {
    japanese_time.setAttribute("hidden", true);
  }
});