import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allShows: [],
    searchedResult: [],
    showDetails: {},
  },
  mutations,
  actions,
  getters,
});
