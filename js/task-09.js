function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtm = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const textNameBgdColor = document.querySelector('.color');




colorChangeBtm.addEventListener('click', () => {
    textNameBgdColor.textContent = getRandomHexColor();
    bodyColor.setAttribute('style', `background-color : ${getRandomHexColor()}`);
})

