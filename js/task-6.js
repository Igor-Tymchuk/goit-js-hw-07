function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("div#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
const quantity = document.querySelector("div#controls>input").value;
let width = 30;
let height = 30;
const boxesData = [];
if(quantity <= 0 || quantity > 100) return;
for (let i = 0; i <= quantity; i++) {
  const randomColor = getRandomHexColor();
  boxesData.push(`<div style="width:${width}px; height: ${height}px; background-color: ${randomColor}"></div>`)
  width +=10;
  height +=10;
}
return boxes.insertAdjacentHTML("beforeend", boxesData.join(""));
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  return boxes.innerHTML = "";
}