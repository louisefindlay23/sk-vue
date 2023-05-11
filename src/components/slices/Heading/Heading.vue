<script setup>
import { getSliceComponentProps } from "@prismicio/vue";
import pigLatin from "https://cdn.skypack.dev/piglatin";
import Date from "../../Date/Date.vue";
import { ref, onMounted } from "vue";

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const htmlSerializer = {
  heading2: ({ children }) => `<h2>${pigLatin(children)}`,
};

const isPost = ref(false);

onMounted(() => {
  if (document.querySelector("article")) {
    isPost.value = true;
  }
});
</script>

<template>
  <PrismicRichText
    :field="slice.primary.heading"
    :htmlSerializer="htmlSerializer"
  />
  <Date v-if="isPost" />
</template>
