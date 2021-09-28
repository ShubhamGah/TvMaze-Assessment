export default {
  // top shows basis on their ratings
  getTopShows(state) {
    let sampleShows;
    sampleShows = state.allShows
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 5);
    return sampleShows;
  },
  // top five shows
  // getTopFiveShows(state) {
  //   let sampleShows;
  //   sampleShows = state.allShows
  //     .sort((a, b) => b.rating.average - a.rating.average)
  //     .slice(0, 5);
  //   return sampleShows;
  // },
  // returns comedy shows
  getComedyShows(state) {
    let sampleDramaShows;
    sampleDramaShows = state.allShows
      .filter((element) => element.genres.includes("Comedy"))
      .slice(0, 30);
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
