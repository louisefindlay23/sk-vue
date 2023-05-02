<script setup>
import Navigation from "./Navigation.vue";
import "./Header.css";
defineProps(["siteTitle"]);
</script>

<template>
  <header id="page-header">
    <a href="/">
      <h1>{{ siteTitle }}</h1>
    </a>
    <Navigation />
  </header>
</template>
