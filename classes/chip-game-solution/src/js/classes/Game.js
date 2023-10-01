import { Chip } from './Chip';

export class Game {
  constructor(width, height, interval = 1000, pointsLimit = 10) {
    this.score = 0;
    this.interval = interval;
    this.pointsLimit = pointsLimit;
    this.width = width;
    this.height = height;
    this.widthLimit = width - 60;
    this.heightLimit = height - 60;
    this.chips = [];
    this.board = this._createBoard();
    this.timeoutId = null;
  }
  _createBoard() {
    const div = document.createElement('div');
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.border = '1px solid lightseagreen';
    return div;
  }
  reset() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
    this.chips.forEach((chip) => {
      chip.destroy();
    });
    this.score = 0;
    this.updateScore();
  }
  run() {
    this.timeoutId = setTimeout(() => {
      console.log(123);
      const chip = new Chip(this);
      this.chips.push(chip);
      this.run();
    }, this.interval);
  }
  earnPoints(points) {
    this.score += points;
    this.updateScore();
  }
  updateScore() {
    document.querySelector('#score').textContent = `score: ${this.score}`;
  }
  renderTo(element) {
    element.appendChild(this.board);
  }
}
