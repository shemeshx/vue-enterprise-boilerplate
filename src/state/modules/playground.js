import axios from 'axios'

export const state = {
  users: [],
}

export const mutations = {
  setData(state,data){
    if(typeof data ==='string')
      state.users = JSON.parse(data);
    else
    state.users = data;
  }
}

export const getters = {
  getData(state){
    return state.users
  }
}

const getData = async () => {
  return axios.get('https://reqres.in/api/users?page=2')
    .then(result => { return result; })
    .catch(error => { return Promise.reject(error); });
}

export const actions = {
    async loadData ({ commit }) {
      try{
        const res = await getData();
        commit('setData',JSON.stringify(res.data.data));
      }catch(e){
        commit('setData',JSON.stringify([]));
      }
  },
}
