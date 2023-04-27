<script setup>
defineProps(["siteTitle"]);
</script>

<template>
  <footer id="page-footer">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>

<style scoped>
/* TODO: Move to CSS files */
#page-footer {
  font-weight: bold;
  text-align: center;
}
</style>
