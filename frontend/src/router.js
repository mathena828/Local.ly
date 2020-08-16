import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import Account from "./pages/Account.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
  ],
});
