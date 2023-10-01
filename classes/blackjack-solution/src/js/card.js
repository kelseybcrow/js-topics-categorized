class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.face = 'avers';

    if(rank === 'ace') {
      this.value = 11;
    } else {
      this.value = parseInt(rank) || 10;
    }
  }

  faceUp() {
    this.face = 'avers';
    return this;
  }

  faceDown() {
    this.face = 'revers';
    return this;
  }

  flip() {
    if(this.face === 'avers') {
      this.face = 'revers';
    } else {
      this.face = 'avers';
    }

    return this;
  }

  render() {
    this.element = document.createElement('div');
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    let className = 'card face-revers';
    if(this.face === 'avers') {
      className = `card face-${this.rank}-of-${this.suit}`;
    }

    this.element.className = className;
  }
}
