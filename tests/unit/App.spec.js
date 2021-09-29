import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "../../src/App";
import Vuetify from "vuetify";

describe("In App file", () => {
  let wrapper;
  let vuetify;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    vuetify = new Vuetify();
    wrapper = shallowMount(app, {
      localVue,
      router,
      vuetify,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it(" is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
