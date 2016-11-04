<template>
  <div>
    <h3>HIGH SCORES</h3>
    <table class="pure-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players">
          <td>{{player.name}}</td>
          <td>{{player.highscore}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data(){
    return {
      players: generatePlayerScores()
    }
  },
  methods:{
    setPlayerScores(){
      this.players = generatePlayerScores()
    }
  }
}

let playerNames = ["Sam", "Joe", "Sara", "Pete", "Tom", "Kari", "Bob", "Jim", "Katie", "Sunny"]

function generatePlayerScores(){
  return playerNames.map(x => {
    return{
      name: x,
      highscore: ~~(Math.random() * (99999 - 10000) + 10000)
    }
  })
}

</script>

<style>

</style>
