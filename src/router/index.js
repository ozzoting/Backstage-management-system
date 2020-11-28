import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/Home.vue";
import "../assets/css/global.css";
import "../assets/fonts/iconfont.css";
import Welcome from "../components/Welcome.vue";
import Users from "../components/user/Users.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect: "/Welcome",
    children: [
      {
        path: "/Welcome",
        component: Welcome,
      },
      {
        path: "/Users",
        component: Users,
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, form, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
