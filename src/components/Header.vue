<script setup>
defineProps(["siteTitle"]);
import Navigation from "./Navigation.vue";
</script>

<template>
  <header id="page-header">
    <a href="/">
      <h1>{{ siteTitle }}</h1>
    </a>
    <Navigation />
  </header>
</template>

<style scoped>
/* Page Header Styles */
#page-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 5px solid #000000;
}
</style>
