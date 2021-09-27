import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from "../../../src/components/footer.component.vue";
import { BootstrapVue } from "bootstrap-vue";

describe("In Footer Component", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);

    wrapper = shallowMount(Footer, {
      localVue,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="footer-container">');
  });
});
