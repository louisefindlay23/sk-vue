import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
console.info(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
