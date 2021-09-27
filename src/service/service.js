import axiosObj from "../service/axiosonfig";

function getAllShowsService() {
  return axiosObj.get("/shows");
}

function getSearchedShowService(SearchString) {
  return axiosObj.get("/search/shows?q=" + `${SearchString}`);
}

function getShowDetailsbyIdService(showId) {
  return axiosObj.get("/shows/" + `${showId}`);
}

export {
  getAllShowsService,
  getSearchedShowService,
  getShowDetailsbyIdService,
};
