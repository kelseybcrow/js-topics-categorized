'use strict';

const colorSelectElm = document.querySelector('#color-select');

const redBar = new ProgressBar(8, 17, 'red');
redBar.mount(colorSelectElm);

const greenBar = new ProgressBar(8, 17, 'green');
greenBar.mount(colorSelectElm);

const blueBar = new ProgressBar(8, 17, 'blue');
blueBar.mount(colorSelectElm);

const btnShow = document.querySelector('.btn-show');
btnShow.addEventListener('click', () => {
  const color = `rgb(${redBar.value * 15},${greenBar.value * 15},${blueBar.value * 15})`;
  btnShow.style.backgroundColor = color;
})