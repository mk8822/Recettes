import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Page principale"
    }
  },
  {
    path: "/recette-du-jour",
    name: "RecetteDuJour",
    meta: {
      title: "Recette du Jour"
    },
    component: () =>
      import(
        /* webpackChunkName: "recette-du-jour" */ "../views/RecetteDuJour.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
