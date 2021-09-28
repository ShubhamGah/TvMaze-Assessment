import axiosObj from "../service/axiosonfig";

//service returns All-shows
function getAllShowsService() {
  return axiosObj.get("/shows");
}

// service returns searched shows
function getSearchedShowService(SearchString) {
  return axiosObj.get(`/search/shows?q=${SearchString}`);
}

//service returns shows by ID
function getShowDetailsbyIdService(showId) {
  return axiosObj.get(`/shows/${showId}`);
}

//return cast of show
function getShowCastDetailsService(showid) {
  return axiosObj.get(`/shows/${showid}/cast`);
}

export {
  getAllShowsService,
  getSearchedShowService,
  getShowDetailsbyIdService,
  getShowCastDetailsService,
};
