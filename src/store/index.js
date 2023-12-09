import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { SET_COUNT } from './mutations.type'
import axios from "axios";
// import { data } from 'autoprefixer';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        count: 123,
        auth: {},
        checked:false,
        dataOne:'',
        dataTwo:'',
        SingList:'',
    },
    getters: {},
    mutations: {
        [SET_COUNT](state, payload = 10) {
            state.count += payload;
        },
        updateAuth(state, res) {
            console.log(res);
            state.auth = res.data;
        },
        changeDarkMode(state,payload){
            state.checked = payload
        },
        dataOne(state,payload){
            state.dataOne = payload
        },
        dataTwo(state,id){
            state.dataTwo = id
        },
        SingList(state,payload){
            state.SingList = payload
        }
    },
    actions: {
        delaySetCount(store) {
            setTimeout(() => {
                store.commit('SET_COUNT', 20)
            }, 3000)
        },
        async requestLoginCellphone(store, data) {
            const rest = await axios
                .post("/login/cellphone", data)
                .catch((res) => {
                    console.log(res);
                });
            store.commit("updateAuth", rest)

        }
    },
})

export default store;