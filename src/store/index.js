import Vue from "vue";
import Vuex from "vuex";
import prices from "./modules/prices";
Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: { prices },
});
