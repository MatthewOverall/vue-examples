import Vue from 'vue'

Vue.component('jcard', {
  props: {
    card: {}
  },
  render(h) { // <-- h must be in scope
    return (
      <div class={
          { 'card': true, 
            ['rank' + this.card.rank]: true,
            [this.card.suit]: true 
          }
      }>
        <div class="face"></div>
      </div>
    )
  }
})