function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("div#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
let quantity;

btnCreate.addEventListener("click", function () { quantity = document.querySelector("div#controls>input").value });
btnCreate.addEventListener("click", function () { createBoxes(quantity) })
function createBoxes(amount) {
  console.log("amount:", amount)
  let width = 30;
  let height = 30;
  const boxesData = [];
  if (amount <= 0 || amount > 100) return;
  boxes.innerHTML = "";
  for (let i = 1; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    boxesData.push(`<div style="width:${width}px; height: ${height}px; background-color: ${randomColor}"></div>`)
    width += 10;
    height += 10;
  }
  document.querySelector("div#controls>input").value = "";
  return boxes.insertAdjacentHTML("beforeend", boxesData.join(""));
}
btnDestroy.addEventListener("click", () => {
  document.querySelector("div#controls>input").value = "";
  return boxes.innerHTML = "";
});

