"use strict";
//単語帳
const s1 = document.querySelector(".screen1");
const s2 = document.querySelector(".screen2");
const Dcards = document.querySelector(".cards");
const input = document.querySelector(".in");
const bu = document.querySelector(".bu");
var s;
var ids = new Array(4);
const interval = 2000;

//ランダムボタンを押した時
bu.addEventListener("click", () => {
  ids.forEach((id) => {
    clearTimeout(id);
  });
  ids.forEach(() => {
    ids.shift();
  });
  const_array();
  remove();
  randomise();
  construct();
  display();
});
//入力文字列を配列に格納
function const_array() {
  var pres = input.value.split(" ");
  if (pres.length % 2 == 1) pres.push("none");
  s = new Array(pres.length / 2);
  for (var i = 0; i < pres.length / 2; i++) {
    s[i] = new Array(2).fill(0);
  }
  for (var i = 0; i < pres.length / 2; i++) {
    s[i][0] = pres[2 * i];
    s[i][1] = pres[2 * i + 1];
  }
}
//カードを全て削除
function remove() {
  var a = document.querySelectorAll(".card");
  a.forEach((a) => a.remove());
  var a = document.querySelectorAll(".text1");
  a.forEach((a) => a.remove());
  var a = document.querySelectorAll(".text2");
  a.forEach((a) => a.remove());
}
//ランダムに並べ替え
function randomise() {
  for (var i = s.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = s[i];
    s[i] = s[r];
    s[r] = tmp;
  }
}
//カードを構築
function construct() {
  for (var i = 0; i < s.length; i++) {
    var Dcard = document.createElement("div");
    Dcard.classList.add("card");
    var Dtext1 = document.createElement("div");
    Dtext1.classList.add("text1");
    var Dtext2 = document.createElement("div");
    Dtext2.classList.add("text2");

    Dtext1.textContent = s[i][0];
    Dtext2.textContent = s[i][1];

    Dcards.appendChild(Dcard);
    Dcard.appendChild(Dtext1);
    Dcard.appendChild(Dtext2);
  }
}
//ディスプレイを表示
function display() {
  var i = 0;
  var id = setInterval(() => {
    if (s.length <= i) {
      s1.textContent = "fin";
      s2.textContent = "fin";
      clearInterval(id);
    } else {
      s1.textContent = s[i][0];
      s2.textContent = s[i][1];
      i++;
    }
  }, interval);
  ids.push(id);
}

//メイン
{
  const_array();
  randomise();
  construct();
  display();
}
