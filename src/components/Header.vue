<script setup>
defineProps(["siteTitle"]);
</script>

<template>
  <header id="page-header">
    <a href="/">
      <h1>{{ siteTitle }}</h1>
    </a>
    <!-- TODO: Add Navigation component -->
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
