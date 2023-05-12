<script setup>
import { inject } from "vue";
import styles from "./Footer.module.css";
const siteTitle = inject("siteTitle");
</script>

<template>
  <footer :class="styles.pageFooter">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>

<style module>
/* Empty style block required for CSS modules */
</style>
