# Daily UI 004

375\*667 の iphone 8 を対象に作りました。

### ページリンク

https://yusuihoshino.github.io/Pages/Tegei/SmartPhone

### ボタン解説

- AC=All Clear
- ChangeMode=Dard Mode と White Mode を入れ替え

### コード解説

- このチュートリアルを参考にしました
- indet.html の関数 b1 は AC 処理、関数 b2 は ChangeMode を実行してます
- reset.css はブラウザによって異なるデフォルトの CSS を打ち消すものです。[ここ](http://html5doctor.com/html-5-reset-stylesheet/)からコピペで入手できます。
- ニューモーフィズムっぽ表現は

```
box-shadow: inset 3px 3px 4px 4px rgb(223, 94, 255);
```

でできます。inset を削除すると、内側でなく周りに影ができます。

### メディアクエリ：狙ったサイズだけ CSS を適用する

```
body {
background-color: aquamarine;
}
@media screen and (max-width: 375px) {
  body {background-color: white;}
  ....
}
```

css はこの様な構造になっています。サイズがデスクトップの場合は背景が background-color: aquamarine;で水色になります。横幅が 375 以下の 375\*667 の iphone 8 サイズになると、背景が白になり、その後の...も実行されるます。

今回はデスクトップのコードは作りませんでしたが、このようにして、サイズに合わせて CSS を記述することができます。
