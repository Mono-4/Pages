
//MAIN FUNTION-----------------------------------------------------------------------------------------------------------
function remove_player_class() {
  for (var i = 0; i < total_n; i++) {
    for (var j = 0; j < total_n; j++) {
      a[i][j].td.classList.remove("p1");
      a[i][j].td.classList.remove("p2");
      a[i][j].td.classList.remove("p3");
    }
  }
}
function add_player_class() {
  if (posi[0].i === posi[1].i && posi[0].j === posi[1].j) {
    a[posi[1].i][posi[1].j].td.classList.add("p3");
  } else {
    a[posi[0].i][posi[0].j].td.classList.add("p1");
    a[posi[1].i][posi[1].j].td.classList.add("p2");
  }
  update_text();
}

function update_text() {
  var s;
  var stage2;
  var color;
  if (stage === 100) {
    s = "";
  }
  switch (stage) {
    case 0:
      if (count_stage <= 2) {
        stage2 = stage + 1;
        s = `move ${count_stage}/3`;
      } else {
        stage2 = stage + 2;
        s = `make a wall`;
      }
      break;
    case 1:
      stage2 = stage + 1;
      s = `make a wall`;
      break;
    case 2:
      if (count_stage <= 2) {
        stage2 = stage + 1;
        s = `move ${count_stage}/3`;
      } else {
        stage2 = stage + 2;
        s = `make a wall`;
      }
      break;
    case 3:
      stage2 = stage + 1;
      s = `make a wall`;
      break;
  }
  li.forEach((element) => {
    element.style.boxShadow = "0px 0px 0px transparent";
  });
  if (stage <= 1)
    li[stage2 - 1].style.boxShadow = " inset 0px 0px 30px #e40067";
  else if (stage <= 3)
    li[stage2 - 1].style.boxShadow = " inset 0px 0px 30px skyblue";

  h2.textContent = s;
  if (stage <= 1) h2.style.color = "#e40067";
  else h2.style.color = "skyblue";
}

function click() {
  switch (stage) {
    case 0:
      if (move_check(0)) count_stage++; //池なければ何も起こらない
      if (count_stage == 3) {
        count_stage = 0;
        stage++;
      }
      add_player_class();
      break;

    case 1:
      if (make_wall()) {
        stage++;
        if (check_4move(1)) {
          console.log("check 4 move is 1");
          stage++;
        }
      }
      add_player_class();
      break;

    case 2: //Aが３会　Aが３会移動
      if (move_check(1)) count_stage++;
      if (count_stage == 3) {
        count_stage = 0;
        stage++;
      }
      add_player_class();
      break;

    case 3: //Aが　壁作る
      if (make_wall()) {
        stage = 0;
        judge(); //判定　何も無ければreturn 0 勝敗決まれば stage=100で離脱
      }
      add_player_class();
      break;
  }
}

function check_4move(p) {
  var i = posi[p].i;
  var j = posi[p].j;
  if (
    a[i - 1][j].td.classList.contains("wall") &&
    a[i][j + 1].td.classList.contains("wall") &&
    a[i + 1][j].td.classList.contains("wall") &&
    a[i][j - 1].td.classList.contains("wall")
  ) {
    return 1;
  } else return 0; //動けるかラナにもしない
}
function make_wall() {
  if (a[ci][cj].wm === 0 && a[ci][cj].state === 0) {
    a[ci][cj].td.classList.add("wall");
    a[ci][cj].state = 1;
    return 1;
  }
  return 0;
}
//配列を元に、wallとwasteクラスを更新
//これいらなくね？
function add_wallwaste_class() {
  //wm=0でstate=1の時、壁のcss
  for (var i = 0; i < total_n; i++) {
    for (var j = 0; j < total_n; j++) {
      if (a[i][j].wm === 0 && a[i][j].state === 1) {
        a[i][j].td.classList.add("wall");
      } else if (a[i][j].wm === 2) {
        a[i][j].td.classList.add("waste");
      }
    }
  }
}
//移動できるなら1を返す
//壁がなく、その方向に進みたい時。
function move_check(p) {
  var i = posi[p].i;
  var j = posi[p].j;
  var result = 0; //0なら移動できなかった
  //プレイヤーの周りの壁の状況
  //１ならすすめる

  if (a[i][j].wm !== 1) return 0;
  if (!!a[i - 1][j].td.classList.contains("wall")) {
    if (i - 2 === ci && j === cj) {
      move(p, i - 2, j);
      result = 1;
    }
  }
  if (!a[i][j + 1].td.classList.contains("wall")) {
    if (i === ci && j + 2 === cj) {
      move(p, i, j + 2);
      result = 1;
    }
  }
  if (!a[i + 1][j].td.classList.contains("wall")) {
    if (i + 2 === ci && j === cj) {
      move(p, i + 2, j);
      result = 1;
    }
  }
  if (!a[i][j - 1].td.classList.contains("wall")) {
    if (i === ci && j - 2 === cj) {
      move(p, i, j - 2);
      result = 1;
    }
  } //四方が囲まれてて無理⭐

  return result;
}
//移動とposiの更新
/*
流れは
移動可能
[クリック＝０をすべてに対して行う
[クリックされた場所を１にする
おける
判定moveが呼ばれる
黄色を消す
AとBを消す
指定された場所を黄色にする
AとBを再配置

移動不可
黄色を消す
選択場所を黄色にする
*/
function move(p, i, j) {
  console.log(i, j);
  posi[p].i = i;
  posi[p].j = j;
}
function judge() {
  var i1 = posi[0].i;
  var j1 = posi[0].j;
  var i2 = posi[1].i;
  var j2 = posi[1].j;
  var x = 0;
  var y = 0;
  var count = 0;
  var s_result;

  if (
    a[i1 - 1][j1].td.classList.contains("wall") &&
    a[i1][j1 + 1].td.classList.contains("wall") &&
    a[i1 + 1][j1].td.classList.contains("wall") &&
    a[i1][j1 - 1].td.classList.contains("wall")
  ) {
    x = 1;
  }
  if (
    a[i2 - 1][j2].td.classList.contains("wall") &&
    a[i2][j2 + 1].td.classList.contains("wall") &&
    a[i2 + 1][j2].td.classList.contains("wall") &&
    a[i2][j2 - 1].td.classList.contains("wall")
  ) {
    y = 1;
  }

  if (x === 0 && y === 0) {
    return 0; //続行
  }
  if (x === 1 && y === 1) s_result = "DRAW";
  else if (x === 1) s_result = "BLUE win";
  else s_result = "RED win";

  stage = 100; //STOP
  judge_result.textContent = s_result;
}
//-----------------------
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
