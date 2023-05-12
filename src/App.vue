<script>
import { ref } from "vue";

import { usePrismic } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const siteTitle = ref(null);
    const { client } = usePrismic();
    client.getSingle("navigation").then((response) => {
    siteTitle.value = prismicH.asText(response.data.site_title);
  }).catch((err) => {
    console.error(err);
  });
    return { siteTitle };
  },
};
import "./main.css";
</script>

<template>
  <div id="app">
    <Header :siteTitle="siteTitle" />
    <router-view />
    <Footer :siteTitle="siteTitle" />
  </div>
</template>
