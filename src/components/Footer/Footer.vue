<script setup>
defineProps(["siteTitle"]);
import Footer from "./Footer.css";
</script>

<template>
  <footer id="page-footer">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>
