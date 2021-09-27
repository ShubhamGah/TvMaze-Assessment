import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "../../src/App";
import Header from "../../src/components/header.component.vue";
import Footer from "../../src/components/footer.component.vue";

describe("In App file", () => {
  let wrapper;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    wrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it(" is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
