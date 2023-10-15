const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
//const 定数名 = doc.gEBI("要素")

let count = 0

//ボタン要素をクリックしたとき(onclickハンドラ)に関数を代入
plusButton.onclick = function () {
  //ここにクリック後の処理を書く
  //onclickのように、イベント発生時にブラウザによって実行されることが決まっている関数を
  //イベントハンドラ、または単にハンドラといいます。
  //on イベント名
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}
//textContentに入っている情報：要素の中に表示する文字
