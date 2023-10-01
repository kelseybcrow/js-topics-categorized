import { Game } from './classes/Game';

const game = new Game(300, 300, 1000);
game.renderTo(document.body);

document.querySelector('#start-button').addEventListener('click', () => {
  game.run();
});

document.querySelector('#reset-button').addEventListener('click', () => {
  game.reset();
});
