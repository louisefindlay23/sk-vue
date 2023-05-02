import { createApp } from "vue";

import App from "./App.vue";
import prismic from "./prismic";
import router from "./router";

const app = createApp(App);
app.use(prismic);
app.use(router);
app.mount("#app");
