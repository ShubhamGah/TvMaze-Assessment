export default {
  // top shows basis on their ratings
  getTopShows(state) {
    return state.allShows.slice(0, 5);
  },

  getComedyShows(state) {
    let sampleDramaShows;
    sampleDramaShows = state.allShows
      .filter((element) => element.genres.includes("Comedy"))
      .slice(0, 30);
    console.log("getters", sampleDramaShows);
    return sampleDramaShows;
  },
  // returns science friction shows
  getScienceFictionshows(state) {
    let sampleSportsShows;
    sampleSportsShows = state.allShows
      .filter((element) => element.genres.includes("Science-Fiction"))
      .slice(0, 30);
    return sampleSportsShows;
  },
  //return cast details
  getCastDetaiils(state) {
    return state.castDetails;
  },
};
