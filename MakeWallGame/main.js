"use strict";
//準備--------------------------------------------------------
let n = 4;
let total_n = n * 2 + 1;
let mass_long = 100;
let mass_short = 20;
let stage = 0;
let count_stage = 0;
// クリックされた場所
let ci = 0;
let cj = 0;

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const h2 = document.querySelector("h2");
// ステップの各要素
const li = [];
li[0] = document.querySelector("ul li:nth-child(1)");
li[1] = document.querySelector("ul li:nth-child(2)");
li[2] = document.querySelector("ul li:nth-child(3)");
li[3] = document.querySelector("ul li:nth-child(4)");
// プレイヤーの位置
let posi = [
  {
    i: 1,
    j: 1,
  },
  {
    i: total_n - 2,
    j: total_n - 2,
  },
];
//aの作成
var a = new Array(total_n);
for (var i = 0; i < total_n; i++) {
  a[i] = new Array(total_n).fill(0);
}
// tdを作成、配置。クラスを割り振る
//EventListenerを定義
for (let i = 0; i < total_n; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < total_n; j++) {
    const td = document.createElement("td");
    //waste mass wall(tate yoko)
    if (i % 2 === 0 && j % 2 === 0) {
      td.classList.add("waste");
    } else if (i % 2 === 1 && j % 2 === 1) {
      td.classList.add("mass");
    } else if (i % 2 === 1) {
      td.classList.add("wall1");
      if (j === 0 || j === total_n - 1) {
        td.classList.add("wall");
      } else {
        td.classList.add("nowall");
      }
    } else {
      td.classList.add("wall2");
      if (i === 0 || i === total_n - 1) {
        td.classList.add("wall");
      } else {
        td.classList.add("nowall");
      }
    }

    a[i][j] = td;
    td.addEventListener("click", () => {
      [ci, cj] = [td.parentNode.rowIndex, td.cellIndex];
      remove_player_class();
      click();
      add_player_class();
      update_text();
    });
    tr.appendChild(td);
  }
  document.querySelector(".field").appendChild(tr);
}
// ボタンをクリックしたらリロードでリスタート
document.querySelector(".input1").addEventListener("click", () => {
  window.location.reload();
});
//下準備
add_player_class();
update_text();
mark_mass(0);

//Click Functions------------------------------------------------
//クリックされたら、状態によって実行する関数を割り振る
function click() {
  switch (stage) {
    case 0:
      if (move_check(0)) {
        mark_remove();
        mark_mass(0);
        count_stage++;
      }
      if (count_stage === 3) {
        count_stage = 0;
        mark_remove();
        mark_wall();
        stage++;
      }
      break;

    case 1:
      if (make_wall()) {
        mark_remove();
        mark_mass(1);
        stage++;
        if (are_there_4wall(1)) {
          stage++;
        }
      }

      break;

    case 2:
      if (move_check(1)) {
        mark_remove();
        mark_mass(1);
        count_stage++;
      }
      if (count_stage === 3) {
        count_stage = 0;
        mark_remove();
        mark_wall();

        stage++;
      }
      break;

    case 3:
      if (make_wall()) {
        stage = 0;
        mark_remove();
        mark_mass(0);
        //勝敗が付いたら、離脱
        if (judge() >= 1) stage = 100;
      }
      break;
  }
}
//MARK FUNCTIONS------------------------------------------------------------------------
function mark_mass(p) {
  var i = posi[p].i;
  var j = posi[p].j;
  if (a[i - 1][j].classList.contains("nowall"))
    a[i - 2][j].classList.add("mark");
  if (a[i][j + 1].classList.contains("nowall"))
    a[i][j + 2].classList.add("mark");
  if (a[i + 1][j].classList.contains("nowall"))
    a[i + 2][j].classList.add("mark");
  if (a[i][j - 1].classList.contains("nowall"))
    a[i][j - 2].classList.add("mark");
}
function mark_wall() {
  for (var i = 0; i < total_n; i++) {
    for (var j = 0; j < total_n; j++) {
      if (a[i][j].classList.contains("nowall")) {
        a[i][j].classList.add("mark");
      }
    }
  }
}
function mark_remove() {
  for (var i = 0; i < total_n; i++) {
    for (var j = 0; j < total_n; j++) {
      a[i][j].classList.remove("mark");
    }
  }
}
function remove_player_class() {
  for (var i = 0; i < total_n; i++) {
    for (var j = 0; j < total_n; j++) {
      a[i][j].classList.remove("p1");
      a[i][j].classList.remove("p2");
      a[i][j].classList.remove("p3");
    }
  }
}
//FUNCTIONS------------------------------------------------------------------------
// プレイヤーの場所を表示
function add_player_class() {
  if (posi[0].i === posi[1].i && posi[0].j === posi[1].j) {
    a[posi[1].i][posi[1].j].classList.add("p3");
  } else {
    a[posi[0].i][posi[0].j].classList.add("p1");
    a[posi[1].i][posi[1].j].classList.add("p2");
  }
}
// 上のテキストを表示
function update_text() {
  var s;
  let s1 = `move ${count_stage}/3`;
  let s2 = `make a wall`;

  var stage2;
  var color;
  switch (stage) {
    case 0:
      if (count_stage <= 2) {
        stage2 = stage + 1;
        s = s1;
      } else {
        stage2 = stage + 2;
        s = s2;
      }
      break;
    case 1:
      stage2 = stage + 1;
      s = s2;
      break;
    case 2:
      if (count_stage <= 2) {
        stage2 = stage + 1;
        s = s1;
      } else {
        stage2 = stage + 2;
        s = s2;
      }
      break;
    case 3:
      stage2 = stage + 1;
      s = s2;
      break;
    case 100:
      switch (judge()) {
        case 1:
          s = "DRAW";
          break;
        case 2:
          s = "BLUE Win";
          break;
        case 3:
          s = "RED Win";
          break;
      }
      break;
  }
  li.forEach((element) => {
    element.classList.remove("number_red");
    element.classList.remove("number_blue");
  });
  if (stage <= 1) {
    li[stage2 - 1].classList.add("number_red");
  } else if (stage <= 3) {
    li[stage2 - 1].classList.add("number_blue");
  }
  h2.textContent = s;
  if (stage <= 1) {
    h2.classList.add("red");
    h2.classList.remove("blue");
  } else if (stage <= 3) {
    h2.classList.add("blue");
    h2.classList.remove("red");
  } else {
    h2.classList.remove("red");
    h2.classList.remove("blue");
    h2.classList.add("white");
  }
}

//プレイヤーの勝敗を調べる
function judge() {
  var x = 0;
  var y = 0;

  if (are_there_4wall(0)) x = 1;
  if (are_there_4wall(1)) y = 1;

  if (x === 0 && y === 0) return 0;
  else if (x === 1 && y === 1) return 1;
  else if (x === 1) return 2;
  else return 3;
}
//周りが全てwallなら1を返す
function are_there_4wall(p) {
  var i = posi[p].i;
  var j = posi[p].j;
  if (
    a[i - 1][j].classList.contains("wall") &&
    a[i][j + 1].classList.contains("wall") &&
    a[i + 1][j].classList.contains("wall") &&
    a[i][j - 1].classList.contains("wall")
  ) {
    return 1;
  } else return 0;
}
//壁を建てる
function make_wall() {
  if (a[ci][cj].classList.contains("nowall")) {
    a[ci][cj].classList.remove("nowall");
    a[ci][cj].classList.add("wall");
    return 1;
  }
  return 0;
}
// 移動できるかチェック＞関数を呼び出す
function move_check(p) {
  var i = posi[p].i;
  var j = posi[p].j;
  //選択がマスじゃない
  if (!a[ci][cj].classList.contains("mass")) return 0;
  if (i - 2 === ci && j === cj) {
    if (a[i - 1][j].classList.contains("nowall")) {
      move(p, i - 2, j);
      return 1;
    }
  }
  if (i === ci && j + 2 === cj) {
    if (a[i][j + 1].classList.contains("nowall")) {
      move(p, i, j + 2);
      return 1;
    }
  }
  if (i + 2 === ci && j === cj) {
    if (a[i + 1][j].classList.contains("nowall")) {
      move(p, i + 2, j);
      return 1;
    }
  }
  if (i === ci && j - 2 === cj) {
    if (a[i][j - 1].classList.contains("nowall")) {
      move(p, i, j - 2);
      return 1;
    }
  }
  return 0;
}
//プレイヤーを移動
function move(p, i, j) {
  posi[p].i = i;
  posi[p].j = j;
}
//Explain FUNCTIONS-----------------------
{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      clickedItem.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(clickedItem.dataset.id).classList.add("active");
    });
  });
}
