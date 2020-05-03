import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import List from "@/components/List";
import CarList from "@/components/CarList";
import ProductList from "@/components/ProductList";
import Details from "@/components/Details";

Vue.use(Router);
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/cars",
      name: "cars",
      component: CarList
    },
    {
      path: "/products",
      name: "products",
      component: ProductList
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details
    }
  ]
});

export default router;