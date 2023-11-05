const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoConainer = document.getElementById("memo-container")

addButton.onclick = function () {
  //console.log(memoInput.value)
  //console.dirでvalueかどうか確認
  //2-1
  const text = memoInput.value
  console.log(text)
  console.dir(memoInput)

  //2-2
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text

  //☆
  //const deleteButton = document.getElementById("div")
  //deleteButton.className = "delete"
  //deleteButton.onclick = function () {
  //  card.remove()
  //}
  //card.append(deleteButton)
  //できんかった！

  memoConainer.append(card)
  memoInput.value = ""
}
