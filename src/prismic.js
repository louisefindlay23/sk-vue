import { createPrismic } from "@prismicio/vue";

const routes = [
  { type: "posts", path: "/posts/:uid" },
  { type: "home", path: "/" },
  { type: "pages", path: "/:uid" },
];

const prismic = createPrismic({
  endpoint: "onboarding-content-management",
  clientConfig: {
    routes,
  },
});

console.info(prismic.client.routes);

export default prismic;
