<template>
  <div class="player">
    <div class="player-box">
      <div class="name">{{player.name}}</div>
      <div class="cards">
        <card v-for="card in player.cards" v-bind:card="card"></card>
      </div>
      <div v-bind:class="{busted: !canHit}" class="score">{{total}}</div>
    </div>
    <button @click="hit()" v-bind:disabled="!canHit" class="hit pure-button">{{canHit ? 'Hit Me!' :'BUSTED'}}</button>
  </div>
</template>

<script>

import Card from './Card.vue'

export default {
  props: ['player'],
  components: {
    card: Card
  },
  computed:{
    total(){
      let t = 0
      this.player.cards.map(a => t += a.rank)
      return t
    },
    canHit(){
      return this.total < 25
    }
  },
  methods: {
    hit() {
      this.$emit('hit')
    }
  }
}
</script>

<style>

.player {
  text-align: center;
  color: rgba(244,244,244,0.63);
}
.player .hit {
  margin-top: 10px;
}
.player .player-box {
  border: 10px solid rgba(244,244,244,0.63);
  height: 250px;
  width: 350px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
}
.player .name {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
.player .score {
  font-size: 2rem;
  font-weight: bolder;
}
.player .score.busted {
  color: #d40000;
}
.player .cards {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.player .cards .card {
  margin: 2px;
}

</style>
