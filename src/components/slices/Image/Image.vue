<script setup>
import { onMounted } from "vue";

import { getSliceComponentProps, PrismicRichText } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

import styles from "./Image.module.css";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
const props = defineProps(
  getSliceComponentProps(["slice", "index", "slices", "context"])
);

let imgixParams = null;

onMounted(() => {
  const { slice } = props;
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