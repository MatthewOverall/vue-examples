
Vue.component('player', {
  template: '#player-template', // alternative to inline templates
  props: ['player'],
  computed: {
    total: function () {
      var t = 0
      this.player.cards.forEach(function (c) {
        t += c.rank
      })
      return t
    },
    canHit: function () {
      return this.total < 25
    }
  },
  methods: {
    hit: function () {
      this.$emit('hit') // emit an event to parent
    }
  }
})