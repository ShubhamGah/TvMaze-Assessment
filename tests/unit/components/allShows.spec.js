import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "../../../src/router/index";
import AllShows from "../../../src/components/allshows.component.vue";
import testdata from "../testdata/showData";
describe("all shows", () => {
  let wrapper;
  let store;
  const state = {
    allShowsDetails: [testdata.showDetails],
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    const getters = {
      getScienceFictionshows: () => [],
      getComedyShows: () => [],
      getTopShows: () => testdata.showDetails,
    };
    store = new Vuex.Store({
      state,
      getters,
    });
    wrapper = shallowMount(AllShows, {
      localVue,
      Vuetify,
      store,
      stubs: [
        "v-card-text",
        "v-img",
        "v-card",
        "v-slide-item",
        "v-slide-group",
        "v-toolbar-title",
        "v-sheet",
      ],
      router,
      propsData: {
        allShowsDetails: {
          id: "1",
          name: "the wire",
        },
      },
      data() {
        return {
          contentLoading: false,
          contentError: false,
          rating: null,
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
  it("should render the correct html", () => {
    expect(wrapper.html()).toContain('<div class="shows-container pb-9">');
  });

  it("should check getShowDetails is defined", async () => {
    expect(wrapper.vm.getShowDetails).toBeDefined();
  });
});
