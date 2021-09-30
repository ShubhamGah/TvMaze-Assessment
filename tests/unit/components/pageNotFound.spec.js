import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageNotFound from "../../../src/components/pageNotFound.component.vue";
import { BootstrapVue } from "bootstrap-vue";

describe("In PageNotFound", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(PageNotFound, {
      localVue,
      BootstrapVue,
      stubs: ["b-card"],
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="page-not-found-container">');
  });
});
