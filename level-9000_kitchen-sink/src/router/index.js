import Vue from 'vue'
import Router from 'vue-router'
import Game from '../views/Game.vue'
import Scores from '../views/Scores.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Game },
    { path: '/scores', component: Scores },
    { path: '*', redirect: '/' }
  ]
})
