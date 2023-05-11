<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
const props = defineProps(getSliceComponentProps(), ["imgixParams"]);
</script>

<template>
  <PrismicImage :field="slice.primary.image" :imgix-params="imgixParams" />
</template>
