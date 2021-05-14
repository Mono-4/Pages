"use-strict";
var timer1; //タイマーを格納する変数（タイマーID）の宣言
var min, sec;
var premin, presec;
var goal_min, goal_sec;
var goal;
//カウントダウン関数を1000ミリ秒毎に呼び出す関数
{
  premin = 0;
  presec = 0;
  document.querySelector("h3").innerHTML = premin + " 分 ";
  min = 0;
  sec = 0;
}
function cntStart() {
  timer1 = setInterval("tmWrite()", 1000);
  goal_min = min = premin;
  goal_sec = sec = presec;
  goal = min * 60 + sec;

  const d = new Date();
  d.setMinutes(d.getMinutes() + min);
  d.setSeconds(d.getSeconds() + sec);

  const date =
    d.getHours() +
    " 時 " +
    d.getMinutes() +
    " 分 " +
    d.getSeconds() +
    " 秒 まで";
  document.querySelector("h2").innerHTML = date;
  document.querySelector("h4").innerHTML = goal_min + "分" + "を計測中";
}
//残り時間を書き出す関数
function tmWrite() {
  document.querySelector("h1").innerHTML = "残り " + min + " 分 " + sec + " 秒";
  var total = min * 60 + sec;

  document.querySelector(".progress-bar").style.width =
    ((goal - total) / goal) * 100 + "%";

  console.log((goal - total) / goal);
  if (total == 0) {
    reSet();
    document.querySelector("#btnsound").play();
    setTimeout("alertfunc()", 1000);
  }

  total--;
  min = Math.floor(total / 60);
  sec = total % 60;
}
function alertfunc() {
  alert("時間だぜ！");
}
// //フォームを初期状態に戻す（リセット）関数

//タイマー停止関数
function plusMin() {
  premin++;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}
function plus10Min() {
  premin += 10;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}
function plus5Min() {
  premin += 5;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}
// 呼び出す関数
function minusMin() {
  if (premin > 0) premin--;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}

function minus10Min() {
  if (premin > 9) premin -= 10;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}

function minus5Min() {
  if (premin > 4) min -= 5;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}
function ResetTime() {
  premin = 0;
  presec = 0;
  document.querySelector("h3").innerHTML = premin + " 分 ";
}

//タイマー停止関数
function cntStop() {
  clearInterval(timer1);
}
