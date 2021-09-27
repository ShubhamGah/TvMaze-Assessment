import {
  getAllShowsService,
  getSearchedShowService,
  getShowDetailsbyIdService,
} from "../../../src/service/service.js";
import axiosObj from "../../../src/service/axiosonfig.js";

jest.mock("../../../src/service/axiosonfig", () => ({
  baseURL: "https://api.tvmaze.com",
  get: jest.fn(),
}));

const response = {
  data: {
    allShows: [
      {
        id: 1,
        url: "http://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        status: "Ended",
        runtime: 60,
        premiered: "2013-06-24",
        officialSite: "http://www.cbs.com/shows/under-the-dome/",
        schedule: {
          time: "22:00",
          days: ["Thursday"],
        },
        rating: {
          average: 6.5,
        },
        weight: 97,
        network: {
          id: 2,
          name: "CBS",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
        },
        webChannel: null,
        externals: {
          tvrage: 25988,
          thetvdb: 264492,
          imdb: "tt1553656",
        },
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        },
        summary:
          "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        updated: 1573667713,
        _links: {
          self: {
            href: "http://api.tvmaze.com/shows/1",
          },
          previousepisode: {
            href: "http://api.tvmaze.com/episodes/185054",
          },
        },
      },
    ],
  },
};

describe("In Service", () => {
  it("should check getAllShowsService response", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const allShows = await getAllShowsService();
    expect(axiosObj.get).toHaveBeenCalledWith("/shows");
    expect(allShows).not.toBeNull;
  });

  it("should chcek getSearchedShowService response not null", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const searchedData = await getSearchedShowService("The Wire");
    expect(axiosObj.get).toHaveBeenCalledWith("/search/shows?q=The Wire");
    expect(searchedData).not.toBeNull;
  });

  it("should chcek getShowDetailsbyIdService response not null", async () => {
    axiosObj.get.mockImplementation(() => Promise.resolve(response));
    const detailsByID = await getShowDetailsbyIdService("169");
    expect(axiosObj.get).toHaveBeenCalledWith("/shows/169");
    expect(detailsByID).not.toBeNull;
  });
});
