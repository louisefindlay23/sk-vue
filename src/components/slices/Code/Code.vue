<script setup>
import { getSliceComponentProps } from "@prismicio/vue";
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const codeSerializer = {
  preformatted: ({ children }) => `<pre class="code">${children}</pre>`,
};
</script>

<template>
  <PrismicRichText :field="slice.primary.code" :htmlSerializer="codeSerializer" />
</template>
