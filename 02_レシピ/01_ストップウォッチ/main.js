//1.必要な要素を取得
//ストップウォッチの数字を表示する h2 要素
//クリックしてスタート/ストップする button 要素
const display = document.getElementById("display")
const button = document.getElementById("button")

//2.ボタンをクリックしたときにスタートさせる
let count = 0

const countUp = function () {
  //count を更新
  count += 1
  //count を秒単位にして表示
  display.textContent = count / 100
  //countUp countを更新して表示
}

//button.onclick = function () {
//10ms ごとに countUp を実行するように登録する
//  setInterval(countUp, 10)
//stopの表示
//  button.textContent = "stop"
//}

//3.ボタンをクリックしたときにストップさせる
//実行中のタイマーのid
let id = null //値無しの意

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    //値有り=id有=ボタンのクリック?のとき
    // stop
    clearInterval(id)
    //タイマーを完全に消去
    id = null //nullに戻す
    button.textContent = "start" //startに戻す
  }
}
