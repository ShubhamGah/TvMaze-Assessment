export default {
  getTopShows(state) {
    let sampleShows;
    sampleShows = state.allShows
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 30);
    return sampleShows;
  },
  getTopFiveShows(state) {
    let sampleShows;
    sampleShows = state.allShows
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 5);
    return sampleShows;
  },
  getComedyShows(state) {
    let sampleDramaShows;
    sampleDramaShows = state.allShows
      .filter((element) => element.genres.includes("Comedy"))
      .slice(0, 30);
    return sampleDramaShows;
  },
  getScienceFictionshows(state) {
    let sampleSportsShows;
    sampleSportsShows = state.allShows
      .filter((element) => element.genres.includes("Science-Fiction"))
      .slice(0, 30);
    return sampleSportsShows;
  },
};
