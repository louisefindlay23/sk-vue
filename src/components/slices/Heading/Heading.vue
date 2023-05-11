<script setup>
import { ref, onMounted } from "vue";
import { getSliceComponentProps } from "@prismicio/vue";
import pigLatin from "https://cdn.skypack.dev/piglatin";
import Date from "../../Date/Date.vue";

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

// Convert h2s into Pig Latin
const htmlSerializer = {
  heading2: ({ children }) => `<h2>${pigLatin(children)}`,
};

const isPost = ref(false);

onMounted(() => {
  // Check if current page is a post
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
