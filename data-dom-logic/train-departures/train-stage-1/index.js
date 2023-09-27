const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

const listElm = document.querySelector('ul');
departures.forEach((time) => {
  const hours = Math.floor(time / 60);
  const minutes = String(time % 60).padStart(2, '0');

  listElm.innerHTML += `<li>${hours}:${minutes}</li>`;
});