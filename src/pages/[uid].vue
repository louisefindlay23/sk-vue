<script setup>
import { useRouter } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRouter();
const uid = route.currentRoute.value.params.uid;
const { data: page } = usePrismicDocumentByUID("pages", uid);
import { defineSliceZoneComponents } from "@prismicio/vue";
import HeadingSlice from "../components/slices/Heading/Heading.vue";
import ImageSlice from "../components/slices/Image/Image.vue";
import TextSlice from "../components/slices/Text/Text.vue";
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
