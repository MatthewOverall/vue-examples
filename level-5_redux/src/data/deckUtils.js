let suits = ["spades", "hearts", "clubs", "diamonds"]
let deckUtils = {
  createDeck() {
    let deck = [];

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
  shuffle(array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export default deckUtils;