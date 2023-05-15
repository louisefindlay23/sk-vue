<script setup>
import { onMounted } from "vue";

import { getSliceComponentProps } from "@prismicio/vue";

import styles from "./Image.module.css";

const props = defineProps(
  getSliceComponentProps(["slice", "index", "slices", "context"])
);

let imgixParams = null;

onMounted(() => {
  const { slice } = props;
  // Select field for Imgix transformations
  if (slice.primary.image_transformations === "blackWhite") {
    imgixParams = { duotone: ['black', 'white'] };
  }
});
</script>

<template>
  <PrismicImage
  :class="styles.featuredImage" :field="slice.primary.image"
    :imgix-params="imgixParams"
  />
</template>

<style module>
/* Empty style block required for CSS modules */
</style>