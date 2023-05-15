import { createPrismic } from "@prismicio/vue";

const routes = [
  { type: "home", path: "/" },
  { type: "pages", path: "/:uid" },
  { type: "posts", path: "/posts/:uid" },
];

const prismic = createPrismic({
  endpoint: "onboarding-content-management",
  clientConfig: {
    routes,
  },
});

export default prismic;
