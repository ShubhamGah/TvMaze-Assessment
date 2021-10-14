export default {
  // top shows basis on their ratings
  getTopShows(state) {
    return state.allShows
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 5);
  },

  getComedyShows(state) {
    let sampleComedyShows;
    sampleComedyShows = state.allShows
      .filter((element) => element.genres.includes("Comedy"))
      .slice(0, 30);
    return sampleComedyShows;
  },
  // returns science friction shows
  getScienceFictionshows(state) {
    let sampleScienceFictionShows;
    sampleScienceFictionShows = state.allShows
      .filter((element) => element.genres.includes("Science-Fiction"))
      .slice(0, 30);
    return sampleScienceFictionShows;
  },
  //return cast details
  getCastDetaiils(state) {
    return state.castDetails;
  },
};
