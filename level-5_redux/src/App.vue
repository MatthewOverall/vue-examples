<template>
	<div id="app">
		<h1>Not 21</h1>
		<game></game>
	</div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    game: Game
  }
}

</script>

<style>
  html{
    font-size: 125%;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    color: #333;
    overflow: hidden;
  }
</style>
