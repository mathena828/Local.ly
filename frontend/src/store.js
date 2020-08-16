import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_authenticated: true,
  },
  mutations: {
    authenticate(state) {
      state.is_authenticated = !state.is_authenticated;
    },
  },
  actions: {
    authenticate: ({ commit }) => {
      commit("authenticate");
    },
  },
});
