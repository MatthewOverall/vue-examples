
Vue.component('card', {
  template: `
    <div class="card" v-bind:class="classObj">
      <div class="face"></div>
    </div>
  `,
  props: ['card'],
  computed: {
    classObj: function () {
      return {
        ["rank" + this.card.rank]: true,
        [this.card.suit]: true
      }
    }
  }
})