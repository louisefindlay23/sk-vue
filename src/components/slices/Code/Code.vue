<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
const htmlSerializer = {
  label: ({ node, children }) =>
    `<code label=${node.data.label}>${children}</code>`,
};
</script>

<template>
  <PrismicRichText :field="slice.primary.code" :components="htmlSerializer" />
</template>
