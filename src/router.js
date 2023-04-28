import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Page from "./views/Page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/:uid", component: Page },
    {
      path: "/post",
      redirect: "/",
    },
  ],
});

export default router;
