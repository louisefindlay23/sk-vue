<script setup>
import styles from "./Footer.module.css";
defineProps(["siteTitle"]);
</script>

<template>
  <footer :class="styles.pageFooter">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>

<style module>
/* Empty style block required for CSS modules */
</style>
