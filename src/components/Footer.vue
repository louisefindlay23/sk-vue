<script setup>
defineProps(["siteTitle"]);
</script>

<template>
  <footer id="page-footer">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>

<style scoped>
#page-footer {
  font-weight: bold;
  text-align: center;
}
</style>
