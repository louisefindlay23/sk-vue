import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
  endpoint: "onboarding-content-management",
  linkResolver,
});

export default prismic;
