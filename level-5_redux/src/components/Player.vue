<template lang="jade">
  .player
    .player-box
      .name {{player.name}}
      .cards
        card(v-for="card in player.cards" v-bind:card="card")
      .score(v-bind:class="{busted: !canHit}") {{total}}
    button.hit.pure-button(@click="hit()" v-bind:disabled="!canHit") {{canHit ? 'Hit Me!' :'BUSTED'}}
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
      this.$store.dispatch('DEAL_ONE', this.player)
    }
  }
}
</script>

<style lang="stylus">

.player
  text-align: center
  color: rgba(244, 244, 244, 0.63)
  .hit
    margin-top: 10px
  .player-box
      border: 10px solid rgba(244, 244, 244, 0.63);
      height: 250px;
      width: 350px;
      border-radius: 25px;
      display: flex;
      flex-direction: column
    .name
      text-align: center
      font-size: 2rem
      font-weight: bold
   
    .score
      font-size: 2rem
      font-weight: bolder
      &.busted
        color: #d40000
    .cards
      display: flex
      flex: 1
      align-items: center
      justify-content: center
      .card
        margin: 2px
</style>
