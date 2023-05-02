<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const siteTitle = "The Sock Kingdom";
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
