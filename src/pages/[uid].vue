// Page route
<script setup>
import { useRouter } from "vue-router";

import { defineSliceZoneComponents, usePrismicDocumentByUID } from "@prismicio/vue";

import HeadingSlice from "../components/slices/Heading/Heading.vue";
import ImageSlice from "../components/slices/Image/Image.vue";
import TextSlice from "../components/slices/Text/Text.vue";

// Get uid parameter from url
const route = useRouter();
const uid = route.currentRoute.value.params.uid;

const { data: page } = usePrismicDocumentByUID("pages", uid);
</script>

<template>
  <main v-if="page" class="page">
    <SliceZone
      :slices="page.data.body"
      :components="
        defineSliceZoneComponents({
          heading: HeadingSlice,
          image: ImageSlice,
          text: TextSlice,
        })
      "
    />
  </main>
</template>
