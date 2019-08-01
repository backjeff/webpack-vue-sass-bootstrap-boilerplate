import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      if (user == null) {
        localStorage.removeItem('user');
      } else {
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    setAffiniboxToken(state, token) {
      state.user.affiniboxToken = token;
    },
  },
  actions: {

  },
  getters: {
    getUser: state => {
      return state.user;
    },
  }
});