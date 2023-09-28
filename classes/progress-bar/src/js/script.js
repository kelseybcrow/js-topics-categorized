import { ProgressBar } from './ProgressBar';

const redProgressBar = new ProgressBar(8, 17);
document.body.appendChild(redProgressBar.element);

const greenProgressBar = new ProgressBar(8, 17);
document.body.appendChild(greenProgressBar.element);

const blueProgressBar = new ProgressBar(8, 17);
document.body.appendChild(blueProgressBar.element);

const btn = document.getElementById('btn', () => {
  let color = `rgb(${redProgressBar.value * 15}, ${
    greenProgressBar.value * 15
  }, ${blueProgressBar.value * 15})`;
  btn.style.backgroundColor = color;
});
