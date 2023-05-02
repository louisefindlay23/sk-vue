<script setup>
import Footer from "./Footer.css";
defineProps(["siteTitle"]);
</script>

<template>
  <footer id="page-footer">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>
