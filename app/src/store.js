import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: false,
    email: '',
    alias: '',
    firstTag: ''
  },
  mutations: {
    setEmail(state,payload) {
      state.email = payload.email
    },
    setAlias(state,payload) {
      state.alias = payload.alias
    },
    setFirstTag(state,payload) {
      state.firstTag = payload.myFirstTag
    }

  },
  actions: {

  }
})
