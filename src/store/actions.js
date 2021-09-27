import {
  getAllShowsService,
  getSearchedShowService,
  getShowDetailsbyIdService,
} from "../service/service.js";

export default {
  async getAllShows(context) {
    try {
      const response = await getAllShowsService();
      console.log(response);
      context.commit("SET_ALL_SHOWS", response.data);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
  async getSearchedShows(context, SearchString) {
    try {
      const response = await getSearchedShowService(SearchString);
      context.commit("SET_SEARCHED_RESULT", response.data);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
  async getShowDetailsbyId(context, showId) {
    try {
      const response = await getShowDetailsbyIdService(showId);
      context.commit("SET_SHOW_DETAILS", response.data);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
};
