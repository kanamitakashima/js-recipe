const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

//1.選択肢の内容onclick と 正解判定の処理chooseをそれぞれ行うようにする
//2.選択肢の内容"文字列" が 選択の処理に影響しないようにする
//→「何番目の選択」として認識させる
//3.フィードバックと正解判定を分ける→配列を用いる
//4.クイズの内容と表示の処理を分ける

//★クイズの内容quiz：各プロパティを用いてテキストや画像表示
//配列を用いる
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

// 正解を判定する
//choose()内に入れた引数を、f関数でchoise○○として受け取る
//chooseは正解判定の処理

//★quiz を画面に表示する関数reloadOuiz
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

//onclickは選択肢の内容に対して行う処理
//choiceNumber番目の選択肢を選択→関数choose
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}
//quiz→choices[choiceNumber番目]→feedbackの内容

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
