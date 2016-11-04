<template>
  <div class="game-wrapper">
    <span>Cards Delt: {{totalCards}}</span>
    <span> | </span>
    <span>Sum of Visible Cards: {{sumCards}}</span>

    <div class="card-table">
      <div class="dealer">
        <button class="pure-button" @click="addPlayer">Add Player</button>
        <button class="pure-button" @click="deal">Deal</button>
        <button class="pure-button" @click="clear">Clear</button>
      </div>
      <div class="players">
        <player v-for="player in players" v-bind:player="player" v-on:hit="dealOne(player)"></player>
      </div>
    </div>
  </div>
</template>

<script>
import Player from './Player.vue'
import deckUtils from '../data/deckUtils'

export default {
  components:{
    player: Player
  },
  data() {
    return {
      players: [{
        name: "PLAYER 1",
        cards: []
      }],
      deck: []
    }
  },
  computed: {
    totalCards() {
      let t = 0
      this.players.forEach(player => t += player.cards.length)
      return t
    },
    sumCards() {
      let t = 0
      this.players.forEach(player => {
        player.cards.forEach(c => t += c.rank)
      })
      return t
    }
  },
  methods: {
    addPlayer() {
      this.players.push({
        name: "PLAYER " + (this.players.length + 1),
        cards: []
      })
    },
    deal() {
      this.players.forEach(player => this.dealOne(player))
      this.players.forEach(player => this.dealOne(player))
    },
    dealOne(player) {
      if (!this.deck || this.deck.length == 0) {
        let newDeck = deckUtils.createDeck()
        this.deck = deckUtils.shuffle(newDeck);
      }
      let card = this.deck.splice(0, 1)[0]
      player.cards.push(card)
    },
    clear() {
      this.players.forEach(player => {
        player.cards = []
      })
    }
  }
}

</script>

<style>

.card-table {
  background-color: #45a173;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid black;
  height: 500px; 
}

.card-table .players{
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}

.card-table .dealer{
  text-align: center;
  margin: 10px;
}

</style>
