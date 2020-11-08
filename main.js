
var dol = 9433.34;
var ev = 1035.03;
var fund = prompt("Hisobingizdagi mablag'ni kiriting");
var name = prompt("Ismingizni kiriting");
var info = document.querySelector(".info");
var body = document.querySelector("body");
body.style.backgroundColor = "yellow";
info.style.textAlign = "center";
info.style.paddingTop = "60px";

var ticket = 500 * dol;
var spending = 250 * dol;
var entertain = 120 * ev;

var all = ticket + spending + entertain;

if (all <= fund) {

  info.textContent = "Oq yo'l" + name;
  body.style.backgroundColor = "lightseagreen";
} else {
  info.textContent = name + " ozgina sabr qilish kerak bo'lar ekan";
  body.style.backgroundColor = "lightgreen";
}