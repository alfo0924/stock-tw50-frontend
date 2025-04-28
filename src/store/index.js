import { createStore } from 'vuex'
import api from '../services/api'

export default createStore({
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        async fetchStocks({ commit }) {
            const stocks = await api.getTW50Stocks()
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks: state => state.stocks
    }
})
