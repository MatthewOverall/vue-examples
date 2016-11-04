var suits = ["spades", "hearts", "clubs", "diamonds"];
var deckUtils = {
  createDeck: function createDeck() {
    var deck = [];

    for (var i = 0; i < suits.length; i++) {
      for (var j = 1; j <= 13; j++) {
        deck.push({
          suit: suits[i],
          suitId: i,
          rank: j
        });
      }
    }
    return deck;
  },
  shuffle: function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue = void 0;
    var randomIndex = void 0;

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
};