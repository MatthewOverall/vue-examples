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
        <player v-for="player in players" v-bind:player="player"></player>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '../components/Player.vue'

export default {
  data(){
    return { }
  },
  components: { 
    player: Player
  },
  computed:{
    players(){
      return this.$store.state.players
    },
    totalCards(){
      return this.$store.getters.totalCards
    },
    sumCards(){
      return this.$store.getters.sumCards
    }
  },
  methods:{
    addPlayer(){
      this.$store.commit('ADD_PLAYER', {
        name: "New Player",
        cards: []
      })
    },
    deal(){
      this.$store.dispatch('DEAL_ALL')
    },
    clear(){
      this.$store.commit('CLEAR_ALL')
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
