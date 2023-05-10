<script>
import styles from "./Footer.module.css";
export default {
  props: {
    siteTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      styles,
    };
  },
};
</script>

<template>
  <footer :class="styles.pageFooter">
    <p>© {{ new Date().getFullYear() }} {{ siteTitle }}</p>
  </footer>
</template>

<style module></style>
