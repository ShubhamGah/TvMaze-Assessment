import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard.vue";
import SearchedShow from "../views/searchedShow.vue";
import ShowDetails from "../views/showsDetails.vue";
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
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
