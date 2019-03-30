import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: 1
  },
  mutations: {
    changeCurTab: (store, status) => {
      store.currentTab = status
    }
  },
  actions: {
    // changeCurTab ({ commit }) {
    //   commit('changeCurTab')
    // }
  }
})
