import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLBx: false,
    isfanx: false,
    isactive: 0
  },
  mutations: {
    add (state) {
      state.isactive++
    },
    isLBC (state, actived) {
      state.isLBx = actived
    },
    isFan (state, actived) {
      state.isfanx = actived
    }
  },
  actions: {
  },
  modules: {
  }
})
