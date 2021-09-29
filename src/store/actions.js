import {
  getAllShowsService,
  getSearchedShowService,
  getShowDetailsbyIdService,
  getShowCastDetailsService,
} from "../service/service.js";

export default {
  // fetching all shows
  async getAllShows(context) {
    try {
      const response = await getAllShowsService();
      context.commit("SET_ALL_SHOWS", response.data);
    } catch (error) {
      throw error.message;
    }
  },
  //fetching shows on the basis on searched string
  async getSearchedShows(context, SearchString) {
    try {
      const response = await getSearchedShowService(SearchString);
      context.commit("SET_SEARCHED_RESULT", response.data);
    } catch (error) {
      throw error.message;
    }
  },
  //fetching shows on the basis on ID
  async getShowDetailsbyId(context, showId) {
    try {
      const response = await getShowDetailsbyIdService(showId);
      context.commit("SET_SHOW_DETAILS", response.data);
    } catch (error) {
      throw error.message;
    }
  },

  //fetching cast details
  async getCastDetails(context, showId) {
    try {
      const response = await getShowCastDetailsService(showId);
      context.commit("SET_CAST_DETAILS", response.data);
    } catch (error) {
      throw error.message;
    }
  },
};
