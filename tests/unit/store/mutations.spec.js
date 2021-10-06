import mutations from "../../../src/store/mutations";
import testShows from "../testdata/showData";
describe("In mutations", () => {
  it("should add all shows", () => {
    const state = {
      allShows: [],
    };
    const allShows = [testShows.showDetails];
    mutations.SET_ALL_SHOWS(state, allShows);
    expect(state).not.toBeNull();
  });
  it("should add searchedResult shows", () => {
    const state = {
      searchedResult: [],
    };
    const searchedResult = [testShows.searchedResult];
    mutations.SET_SEARCHED_RESULT(state, searchedResult);
    expect(state).not.toBeNull();
  });
  it("should add showDetails ", () => {
    const state = {
      showDetails: [],
    };
    const showDetails = [testShows.showDetails];
    mutations.SET_SHOW_DETAILS(state, showDetails);
    expect(state).not.toBeNull();
  });
  it("should add castDetails ", () => {
    const state = {
      castDetails: [],
    };
    const castDetails = [testShows.castData];
    mutations.SET_CAST_DETAILS(state, castDetails);
    expect(state).not.toBeNull();
  });
});
