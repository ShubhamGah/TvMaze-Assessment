import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { routes } from "@/router/index";
import Vuex from "vuex";
import { BootstrapVue } from "bootstrap-vue";
import ShowsTestData from "../testdata/showData";

import ShowDetails from "../../../src/views/showsDetails.component.vue";

describe("In Shoe Details component", () => {
  let wrapper;
  let store;
  let getters;
  let router = new VueRouter({ routes });
  // let data = {
  //     id: 1,
  //     url: "http://www.tvmaze.com/shows/1/under-the-dome",
  //     name: "Under the Dome",
  //     type: "Scripted",
  //     image: {
  //       medium:
  //         "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
  //       original:
  //         "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
  //     },
  //     language: "English",
  //     genres: ["Drama", "Science-Fiction", "Thriller"],
  //     status: "Ended",
  //     runtime: 60,
  //     premiered: "2013-06-24",
  //     officialSite: "http://www.cbs.com/shows/under-the-dome/",
  //     schedule: {
  //       time: "22:00",
  //       days: ["Thursday"],
  //     },
  //     rating: {
  //       average: 6.5,
  //     },
  //     weight: 97,
  //     network: {
  //       id: 2,
  //       name: "CBS",
  //       country: {
  //         name: "United States",
  //         code: "US",
  //         timezone: "America/New_York",
  //       },
  //     },
  //     webChannel: null,
  //     externals: {
  //       tvrage: 25988,
  //       thetvdb: 264492,
  //       imdb: "tt1553656",
  //     },

  //     summary:
  //       "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  //     updated: 1573667713,
  //     _links: {
  //       self: {
  //         href: "http://api.tvmaze.com/shows/1",
  //       },
  //       previousepisode: {
  //         href: "http://api.tvmaze.com/episodes/185054",
  //       },
  //     },
  //   },
  let state = {
    showDetails: [ShowsTestData],
  };
  const actions = {
    getShowDetailsbyId: jest.fn(),
  };
  getters = {
    getTopShows: () => [ShowsTestData],
    getComedyShows: () => [ShowsTestData],
    getCastDetaiils: () => [ShowsTestData],
    getScienceFictionshows: () => [ShowsTestData],
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);
    localVue.use(Vuex);
    localVue.use(BootstrapVue);

    store = new Vuex.Store({
      state,
      actions,
      getters,
    });

    wrapper = shallowMount(ShowDetails, {
      localVue,
      router,
      store,
      data() {
        return {
          id: Number,
          contentLoading: false,
          contentError: false,
        };
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
