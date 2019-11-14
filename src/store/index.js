import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: localStorage.getItem('cityId'),
    cityName:localStorage.getItem('cityName'),
    username:sessionStorage.getItem('username'),
  },
  mutations: {
    setCityName(state, id) {
      state.cityName = id
      localStorage.setItem('cityName', id)
    },
    setCityId(state,id){
      state.cityId =id
      localStorage.setItem('cityId', id)
    },
    login(state,username){
      sessionStorage.setItem('username',username)
    },
  },
 
  actions: {},
  modules: {}
})
