class Hand {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
    this.state = '0';
  }

  reset() {
    this.cards = [];
    this.score = 0;
    this.state = '0';

    this.clearHTML();
    this.updateScore();
  }

  hit(card) {
    this.cards.push(card);
    this.score += card.value;
    
    if(this.score <= 21) {
      this.state = '' + this.score;
    } else {
      this.state = 'BUSTED';
    }

    if(card.face === 'revers') {
      this.state = 'HIDDEN';
    }

    this.mountCard(card);
    this.updateScore();
  }

  flipLast() {
    const lastCard = this.cards[this.cards.length-1];
    lastCard.flip();
    lastCard.update();
  }

  mountCard(card) {
    const cardsElm = document.querySelector(`#${this.name}-cards`);
    card.mount(cardsElm);
  }

  clearHTML() {
    const cardsElm = document.querySelector(`#${this.name}-cards`);
    cardsElm.innerHTML = '';
  }

  updateScore() {
    const scoreElm = document.querySelector(`#${this.name}-score`);

    if(parseInt(this.state)) {
      scoreElm.textContent = `Score: ${this.state}`;  
    } else {
      scoreElm.textContent = this.state;
    }
  }
}
