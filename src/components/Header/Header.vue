<script setup>
import Navigation from "./Navigation.vue";
defineProps(["siteTitle"]);
import "./Header.css";
</script>

<template>
  <header id="page-header">
    <a href="/">
      <h1>{{ siteTitle }}</h1>
    </a>
    <Navigation />
  </header>
</template>
