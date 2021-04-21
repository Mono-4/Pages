"use strict";

function getTime() {
  var b1p = 10;
  var b2p = 10;

  let now = new Date();
  let next_b = new Date("2022/4/5 0:0:0");
  let next_4 = new Date("2040/4/5 0:0:0");
  let next_birth = next_b.getTime() - now.getTime();
  let next_40 = next_4.getTime() - now.getTime();
  // now
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var h = now.getHours();
  var min = now.getMinutes();
  var s = now.getSeconds();
  var ms = now.getMilliseconds();
  // birthday
  var next_birth_ms = Math.floor(next_birth % 1000);
  var next_birth_s = Math.floor((next_birth / 1000) % 60);
  var next_birth_min = Math.floor((next_birth / 1000 / 60) % 60);
  var next_birth_h = Math.floor((next_birth / 1000 / 60 / 60) % 24);
  var next_birth_d = Math.floor((next_birth / 1000 / 60 / 60 / 24) % 30);
  var next_birth_m = Math.floor((next_birth / 1000 / 60 / 60 / 24 / 30) % 12);
  var next_birth_y = Math.floor(next_birth / 1000 / 60 / 60 / 24 / 365);
  var next_birth_d;
  // birthday total
  var next_birthday_total_s = Math.floor(next_birth / 1000);
  var next_birthday_total_min = Math.floor(next_birth / 1000 / 60);
  var next_birthday_total_h = Math.floor(next_birth / 1000 / 60 / 60);
  var next_birthday_total_d = Math.floor(next_birth / 1000 / 60 / 60 / 24);
  // 40
  var next_40_ms = Math.floor(next_40 % 1000);
  var next_40_s = Math.floor((next_40 / 1000) % 60);
  var next_40_min = Math.floor((next_40 / 1000 / 60) % 60);
  var next_40_h = Math.floor((next_40 / 1000 / 60 / 60) % 24);
  var next_40_d = Math.floor((next_40 / 1000 / 60 / 60 / 24) % 30);
  var next_40_m = Math.floor((next_40 / 1000 / 60 / 60 / 24 / 30) % 12);
  var next_40_y = Math.floor(next_40 / 1000 / 60 / 60 / 24 / 365);
  var next_40_d;
  // 40 total
  var next_40_total_s = Math.floor(next_40 / 1000);
  var next_40_total_min = Math.floor(next_40 / 1000 / 60);
  var next_40_total_h = Math.floor(next_40 / 1000 / 60 / 60);
  var next_40_total_d = Math.floor(next_40 / 1000 / 60 / 60 / 24);
  // add 0 now
  if (h < 10) {
    h = "0" + h;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (ms < 10) {
    ms = "00" + ms;
  } else if (ms < 100) {
    ms = "0" + ms;
  }
  // add 0 birth
  if (next_birth_h < 10) {
    next_birth_h = "0" + next_birth_h;
  }
  if (next_birth_min < 10) {
    next_birth_min = "0" + next_birth_min;
  }
  if (next_birth_s < 10) {
    next_birth_s = "0" + next_birth_s;
  }
  if (next_birth_ms < 10) {
    next_birth_ms = "00" + next_birth_ms;
  } else if (next_birth_ms < 100) {
    next_birth_ms = "0" + next_birth_ms;
  }
  // add 0 40
  if (next_40_h < 10) {
    next_40_h = "0" + next_40_h;
  }
  if (next_40_min < 10) {
    next_40_min = "0" + next_40_min;
  }
  if (next_40_s < 10) {
    next_40_s = "0" + next_40_s;
  }
  if (next_40_ms < 10) {
    next_40_ms = "00" + next_40_ms;
  } else if (next_40_ms < 100) {
    next_40_ms = "0" + next_40_ms;
  }
  // write
  $(".c1").text(y + "年 " + m + "月 " + d + "日 ");
  $(".c2").text(h + "時 " + min + "分 " + s + "秒 " + ms);
  $(".c5").text(
    next_birth_y + "年 " + next_birth_m + "ヶ月 " + next_birth_d + "日 "
  );
  $(".c6").text(
    next_birth_h +
      "時間 " +
      next_birth_min +
      "分 " +
      next_birth_s +
      "秒 " +
      next_birth_ms
  );
  $(".c7").text(next_birthday_total_d + "日");
  $(".c8").text(next_birthday_total_h + "時間");
  $(".c9").text(next_birthday_total_min + "分");
  $(".c10").text(next_birthday_total_s + "秒");
  $(".c11").text(next_40_y + "年 " + next_40_m + "ヶ月 " + next_40_d + "日 ");
  $(".c12").text(
    next_40_h + "時間 " + next_40_min + "分 " + next_40_s + "秒 " + next_40_ms
  );
  $(".c13").text(next_40_total_d + "日");
  $(".c14").text(next_40_total_h + "時間");
  $(".c15").text(next_40_total_min + "分");
  $(".c16").text(next_40_total_s + "秒");

  // parameter
  b1p = 100 * (1 - next_birthday_total_s / (365 * 24 * 60 * 60));
  b2p = 100 * (1 - next_40_total_s / (40 * 365 * 24 * 60 * 60));
  $(".box1").css(
    "background",
    "linear-gradient(to right, skyblue, yellow  " +
      b1p +
      "%, black " +
      String(b1p + 0.1) +
      "%)"
  );
  $(".box2").css(
    "background",
    "linear-gradient(to right, skyblue, yellow " +
      b2p +
      "%, black " +
      String(b2p + 0.1) +
      "%)"
  );
}
setInterval(getTime, 100);
