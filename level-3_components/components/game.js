//Looks a bit like angular right?
Vue.component('game', {
  // Example of inline templates
  template: '#game-template', // alternative to inline templates
  data: function () {
    return {
      players: [{
        name: "PLAYER 1",
        cards: []
      }],
      deck: []
    }
  },
  computed: {
    totalCards: function () {
      var t = 0
      this.players.forEach(function (player) {
        t += player.cards.length
      })
      return t
    },
    sumCards: function () {
      var t = 0
      this.players.forEach(function (player) {
        player.cards.forEach(function (c) {
          t += c.rank
        })
      })
      return t
    }
  },
  methods: {
    addPlayer: function () {
      this.players.push({
        name: "PLAYER " + (this.players.length + 1),
        cards: []
      })
    },
    deal: function () {
      this.players.forEach(function (player) {
        this.dealOne(player);
      }, this)
      //deal twice
      this.players.forEach(function (player) {
        this.dealOne(player);
      }, this)
    },
    dealOne: function (player) {
      if (!this.deck || this.deck.length == 0) {
        var newDeck = deckUtils.createDeck()
        this.deck = deckUtils.shuffle(newDeck);
      }
      var card = this.deck.splice(0, 1)[0]
      player.cards.push(card)
    },
    clear: function () {
      this.players.forEach(player => {
        player.cards = []
      })
    }
  }
});