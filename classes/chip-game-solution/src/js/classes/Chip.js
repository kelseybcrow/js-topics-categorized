export class Chip {
  constructor(game) {
    this.game = game;
    this.points = Math.floor(Math.random() * game.pointsLimit);
    this.chip = this._createChip(game.widthLimit, game.heightLimit);

    this.game.board.appendChild(this.chip);
  }
  _createChip(widthLimit, heightLimit) {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.style.left = Math.floor(Math.random() * widthLimit) + 'px';
    chip.style.top = Math.floor(Math.random() * heightLimit) + 'px';
    chip.textContent = this.points;
    chip.addEventListener('click', () => {
      this.destroy();
    });
    return chip;
  }
  destroy() {
    this.chip.remove();
    this.game.earnPoints(this.points);
  }
}
