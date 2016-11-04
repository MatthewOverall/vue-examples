let suits = ["spades", "hearts", "clubs", "diamonds"];

interface IPokerCard {
  suit: string
  suitId: number
  rank: number
}

export const deckUtils = {
  createDeck() {
    let deck: IPokerCard[] = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 1; j <= 13; j++) {
        deck.push({
          suit: suits[i],
          suitId: i,
          rank: j
        })
      }
    }
    return deck;
  },
  shuffle(deck: IPokerCard[]) {

    let currentIndex = deck.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck;
  }
}


