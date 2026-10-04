function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
const colorTextElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');
btnElem.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorTextElem.textContent = newColor;
});
