import Vue from 'vue'
import Vuex from 'vuex'
import deckUtils from '../data/deckUtils'

Vue.use(Vuex)

const inBrowser = typeof window !== 'undefined'

const store = new Vuex.Store({
  state: {
    deck: [],
    players: [
      {
        name: "PLAYER 1",
        cards: []
      }
    ]
  },
  mutations: {
    ADD_PLAYER(state, player) {
      player.name = "PLAYER " + (state.players.length + 1)
      state.players.push(player)
    },
    DEAL_CARD(state, player) {
      let card = state.deck.splice(0, 1)[0]
      player.cards.push(card)
    },
    SET_DECK(state, deck) {
      state.deck = deck
    },
    CLEAR_ALL(state) {
      state.players.forEach(p => {
        p.cards = []
      })
    }
  },

  actions: {
    NEW_DECK({state, commit}) {
      let deck = deckUtils.createDeck();
      deck = deckUtils.shuffle(deck);
      commit("SET_DECK", deck)
    },
    DEAL_ALL({state, commit, dispatch}) {
      state.players.forEach(player => {
        dispatch("DEAL_ONE", player)
      })
      state.players.forEach(player => {
        dispatch("DEAL_ONE", player)
      })
    },
    DEAL_ONE({state, commit, dispatch}, player) {
      if (!state.deck || state.deck.length == 0) {
        dispatch("NEW_DECK")
      }
      commit("DEAL_CARD", player)
    }
  },
  getters: {
    totalCards(state) {
      let t = 0
      state.players.map(x => t += x.cards.length)
      return t
    },
    sumCards(state) {
      let t = 0
      state.players.forEach(p => {
        p.cards.forEach(c => {
          t += c.rank
        })
      })
      return t
    }
  }
})
store.dispatch("DEAL_ALL")
export default store
