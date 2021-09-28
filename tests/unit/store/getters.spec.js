import getters from "../../../src/store/getters";
import ShowsTestData from "../testdata/showData";
describe("In Getters", () => {
  const state = {
    allShows: ShowsTestData.testShows,
    searchedResult: ShowsTestData.searchData,
    castDetails: { data: ShowsTestData.castData },
    showDetails: ShowsTestData.searchData,
  };

  it("should call top-shows", () => {
    const result = getters.getTopShows(state);
    expect(result).toEqual(state.allShows);
  });
  it("should call getCastDetaiils", () => {
    const result = getters.getCastDetaiils(state);
    expect(result).toEqual(state.castDetails);
  });
  it("should call getScienceFictionshows", () => {
    const result = getters.getScienceFictionshows(state);
    expect(result).toBeTruthy();
  });
  it("should call getScienceFictionshows", () => {
    const result = getters.getComedyShows(state);
    expect(result).toBeTruthy();
  });
});
