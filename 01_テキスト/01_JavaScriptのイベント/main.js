// button要素とclickイベント
//const alertMessage = function () {
//alert("クリックしたね")
//}
//alertMessage() //アラートが表示される

// イベントが発生する要素を取得する
//const button = document.getElementById("button")
//const alertMessage = function () {
//alert("クリックしたね")
//}
// 関数を登録
//button.onclick = alertMessage

//1→機能する
//const button = document.getElementById("button")
//button.onclick = function () {
//alert("クリックしたね")
//}

//2→ボタンではアラートは出てこない
//alertmessageは関数ではないから。fuctionは関数
//const button = document.getElementById("button")
//const alertMessage = function () {
//alert("クリックしたね")
//}
//button.onclick = alertMessage()

// input要素とinputイベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}
//e：イベントオブジェクト
//input 要素への入力は、引数で e を受け取って e.target.value で使える。
inputText.oninput = logValue
inputDate.oninput = logValue
//関数logValueは入力された値をコンソールに表示する関数
