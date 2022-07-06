import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './authentication/mutations'
import actions from './authentication/actions'
import getters from './authentication/getters'

Vue.use(Vuex)

const initialState = () => {
  return { user: null, error: null }
}

export default new Vuex.Store({
  state: initialState(),
  mutations: mutations,
  actions: actions,
  getters: getters
});