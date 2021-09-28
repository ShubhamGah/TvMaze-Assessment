import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard.component.vue";
import SearchedShow from "../views/searchedShow.component.vue";
import ShowDetails from "../views/showsDetails.component.vue";
import PageNotFound from "../components/pageNotFound.component.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
  },
  {
    path: "/show/:showData",
    name: "SearchShow",
    component: SearchedShow,
  },
  {
    path: "/details/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
