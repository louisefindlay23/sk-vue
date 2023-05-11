<script setup>
import { getSliceComponentProps } from "@prismicio/vue";
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>

<template>
  <PrismicRichText :field="slice.primary.text" />
</template>
