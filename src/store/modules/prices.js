import axios from "axios";
const state = {
  prices: [],
};

const getters = {};

const mutations = {
  SET_PRICES: (state, prices) => {
    state.prices = prices;
  },
};

const actions = {
  getPrices: async ({ commit }) => {
    try {
      const res = await axios.get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,DASH&tsyms=USD"
      );
      commit("SET_PRICES", res.data.Data);
    } catch (ex) {
      console.log("Error fetching prices", ex);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
