import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";
import ShowsTestData from "../testdata/showData";
import ShowDetails from "../../../src/views/showsDetails.component.vue";

describe("In Shoe Details component", () => {
  let wrapper;
  let store;
  let state = {
    showDetails: ShowsTestData.showDetails,
  };
  let actions = {
    getShowDetailsbyId: jest.fn(),
    getCastDetails: jest.fn(),
  };
  let getters = {
    getCastDetaiils: () => ShowsTestData.castData,
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);
    localVue.use(Vuex);
    store = new Vuex.Store({
      state,
      actions,
      getters,
    });
    wrapper = shallowMount(ShowDetails, {
      localVue,
      mocks: {
        $route: {
          params: {
            push: jest.fn(),
          },
        },
      },
      stubs: ["v-card-text", "v-toolbar-title", "v-card", "v-img", "v-col"],
      store,
      data() {
        return {
          id: 123,
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
    expect(wrapper.html()).toContain('<div class="show-details-container">');
  });
  it("should check getShowDetailsbyId is defined", async () => {
    expect(wrapper.vm.getShowDetailsbyId).toBeDefined();
  });
});
