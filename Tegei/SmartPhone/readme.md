# Daily UI 004

375\*667 の iphone 8 を対象に作りました。

### ページリンク

https://yusuihoshino.github.io/Pages/Tegei/SmartPhone

### ボタン解説

- AC=All Clear
- ChangeMode=Dard Mode と White Mode を入れ替え

### コード解説

- [この](https://techacademy.jp/magazine/21139)チュートリアルを参考にしました
- indet.html の関数 b1 は AC 処理、関数 b2 は ChangeMode を実行してます
- reset.css はブラウザによって異なるデフォルトの CSS を打ち消すものです。[ここ](http://html5doctor.com/html-5-reset-stylesheet/)からコピペで入手できます。
- ニューモーフィズムっぽ表現は

```
box-shadow: inset 3px 3px 4px 4px rgb(223, 94, 255);
```

でできます。inset を削除すると、内側でなく周りに影ができます。
