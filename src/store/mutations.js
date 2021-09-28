export default {
  //setting data to allshows state
  SET_ALL_SHOWS(state, payload) {
    state.allShows = payload;
  },
  // setting data to searchedResult state
  SET_SEARCHED_RESULT(state, payload) {
    state.searchedResult = payload;
  },
  //setting data to showDetails state
  SET_SHOW_DETAILS(state, payload) {
    state.showDetails = payload;
  },
  //setting cast details
  SET_CAST_DETAILS(state, payload) {
    state.castDetails = payload;
  },
};
