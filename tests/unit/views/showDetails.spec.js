import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { router } from "../../../src/router/index";
import Vuex from "vuex";
import ShowsTestData from "../testdata/showData";
import ShowDetails from "../../../src/views/showsDetails.component.vue";

describe("In Shoe Details component", () => {
  let wrapper;
  let store;

  //let router = new VueRouter({ routes });

  let state = {
    showDetails: { ShowsTestData },
  };
  let actions = {
    getShowDetailsbyId: jest.fn(),
    getCastDetails: jest.fn(),
  };
  let getters = {
    getCastDetaiils: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);
    localVue.use(Vuex);

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
          id: this.$route.params.id,
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
