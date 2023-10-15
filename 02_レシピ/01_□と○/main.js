//1.必要な要素をJavaScriptで取得する
//①図形を表示するdiv要素、②クリックして変形させるbutton要素×2
//const figure = document.getElementById("figure")
//const squareButton = document.getElementById("square-button")
//const circleButton = document.getElementById("circle-button")

//2.ボタンをクリックしたときに変形する
//circleButton.onclick = function () {
// figure に rounded クラスを追加する
//  figre.classList.add("rounded")
//}
// figure の rounded クラスを削除する
//squareButton.onclick = function () {
//  figre.classList.remove("rounded")
//}

//3.図形をクリックしたときに変形する
const figure = document.getElementById("figure")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}
