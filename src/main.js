import { createApp } from "vue";
import App from "./App.vue";
import prismic from "./prismic";

import "./assets/main.css";

createApp(App).use(prismic).mount("#app");
