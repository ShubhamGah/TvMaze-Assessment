import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { routes } from "@/router/index";
import Vuex from "vuex";
import SearchedShow from "../../../src/views/searchedShow.component.vue";

describe("Searched Show Component", () => {
  let wrapper;
  let store;
  let vuetify;
  let router = new VueRouter({ routes });
  const state = {
    searchedResult: SearchedShow,
  };
  const actions = {
    getSearchedShows: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuex);
    vuetify = new Vuetify();
    store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(SearchedShow, {
      localVue,
      store,
      router,
      stubs: ["v-toolbar-title"],
      vuetify,
      data() {
        return {
          searchedString: this.$route.params.showData,
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
  it("should render the correct html", () => {
    expect(wrapper.html()).toContain(
      '<div class="searched-show-container col-12">'
    );
  });
  it("should check getSearchedShows is defined", async () => {
    expect(wrapper.vm.getSearchedShows).toBeDefined;
  });
  it("should check getShowDetails is defined", async () => {
    expect(wrapper.vm.getShowDetails).toBeDefined;
  });
});
