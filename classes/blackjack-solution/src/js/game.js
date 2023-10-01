class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.state = 'new-round';
    this.dealer = new Hand('dealer');
    this.player = new Hand('player');
  }

  setupControls() {
    this.btnHit = document.querySelector('#player-hit-btn');
    this.btnHit.addEventListener('click', () => this.playerHit());

    this.btnStand = document.querySelector('#player-stand-btn');
    this.btnStand.addEventListener('click', () => this.playerStand());

    this.btnNewRound = document.querySelector('#new-round-btn');
    this.btnNewRound.addEventListener('click', () => {  
      this.startNewRound();
    });

    this.updateControls();
  }

  startNewRound() {
    this.state = 'player-on-turn';
    this.displayMessage('');
    
    this.player.reset();
    this.dealer.reset();

    this.playerHit();
    this.playerHit();
    this.dealerHit();
    this.dealerHit('hidden');
    this.updateControls();
  }

  playerHit() {
    const card = this.deck.deal();
    this.player.hit(card);
    
    this.updateControls();
    
    if(this.player.state === 'BUSTED') {  
      this.playerLoses();  
    } else if(
      this.player.state === '21' || 
      this.player.state === 'BLACKJACK') {
      this.goDealer();
    }
  }

  playerStand() {
    this.goDealer();
  }

  roundEnds(msg) {
    this.displayMessage(msg)
    this.state = 'new-round';
    this.updateControls();
  }

  playerWins() {
    this.roundEnds('YOU WIN');
  }

  playerLoses() {
    this.roundEnds('YOU LOSE');
  }

  standOff() {
    this.roundEnds('STAND-OFF');
  }

  displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
  }

  goDealer() {
    this.state = 'dealer-on-turn';
    this.updateControls();

    this.dealer.flipLast();
    this.dealerTimer = setInterval(() => {
      this.dealerHit();
      
      if(this.dealer.score >= 17) {
        clearInterval(this.dealerTimer);
        if(this.dealer.state === 'BUSTED') {
          this.playerWins();
        } else if(this.dealer.score > this.player.score) {
          this.playerLoses();
        } else if(this.dealer.score < this.player.score) {
          this.playerWins();
        } else {
          this.standOff();
        }
      }
    }, 1000);
  }

  dealerHit(hidden) {
    const card = this.deck.deal();
    if(hidden) {
      card.flip();
    }
    this.dealer.hit(card);
  }

  updateControls() {
    if(this.state === 'new-round') {
      this.btnNewRound.disabled = false;
      this.enablePlayerControls(false);
      return;
    }
    
    if(this.state === 'dealer-on-turn') {
      this.btnNewRound.disabled = true;
      this.enablePlayerControls(false);
      return;
    }

    this.btnNewRound.disabled = true;
    if (
      this.player.state === '21' ||
      this.player.state === 'BLACKJACK' ||
      this.player.state === 'BUSTED'
    ) {
      this.enablePlayerControls(false);
    } else {
      this.enablePlayerControls(true);
    }
  }

  enablePlayerControls(enable) {
    this.btnHit.disabled = !enable;
    this.btnStand.disabled = !enable;
  }
}
