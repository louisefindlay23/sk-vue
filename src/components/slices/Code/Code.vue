<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
const codeSerializer = {
  preformatted: ({ children }) => `<pre class="code">${children}</pre>`,
};
</script>

<template>
  <PrismicRichText :field="slice.primary.code" :htmlSerializer="codeSerializer" />
</template>
