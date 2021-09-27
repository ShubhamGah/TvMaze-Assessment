export default {
  SET_ALL_SHOWS(state, payload) {
    state.allShows = payload;
  },
  SET_SEARCHED_RESULT(state, payload) {
    state.searchedResult = payload;
  },
  SET_SHOW_DETAILS(state, payload) {
    state.showDetails = payload;
  },
};
