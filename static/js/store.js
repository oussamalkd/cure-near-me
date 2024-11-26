import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: process.client ? JSON.parse(localStorage.getItem('message')) || '' : '',
    message2: process.client ? JSON.parse(localStorage.getItem('message2')) || '' : '',
    message3: process.client ? JSON.parse(localStorage.getItem('message3')) || '' : '',
    compalaient_data: process.client ? JSON.parse(localStorage.getItem('compalaient_data')) || '' : '',
  },
  
  mutations: {
    updateMessage(state, payload) {
      state.message = payload;
    }, 
    updateComponentTwoData(state, newData) {
      state.componentTwoData = newData;
    },
    updateMessage2(state, payload) {
      state.message2 = payload;
    },
    providertype(state, payload) {
      state.message3 = payload;
    },
    compalaient_data(state, payload) {
      state.compalaient_data = payload;
    }
  },
  actions: {
    updateMessage({ commit }, payload) {
      commit('updateMessage', payload);
      if (process.client) {
        localStorage.setItem('message', JSON.stringify(payload));
      }
    },
    compalaient_data({ commit }, payload) {
      commit('compalaient_data', payload);
      if (process.client) {
        localStorage.setItem('compalaient_data', JSON.stringify(payload));
      }
    },
    updateComponentTwoData({ commit }, payload) {
      commit('updateComponentTwoData', payload);
      if (process.client) {
        localStorage.setItem('componentTwoData', JSON.stringify(payload));
      }
    },
    updateMessage2({ commit }, payload) {
      commit('updateMessage2', payload);
      if (process.client) {
        localStorage.setItem('message2', JSON.stringify(payload));
      }
    },
    providertype({ commit }, payload) {
      commit('providertype', payload);
      if (process.client) {
        localStorage.setItem('message3', JSON.stringify(payload));
      }
    }
  }
});
