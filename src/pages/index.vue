<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
const { data: home } = useSinglePrismicDocument("home");
import TextSlice from "../components/slices/Text/Text.vue";
import RecentPostsSlice from "../components/slices/RecentPosts/RecentPosts.vue";
import { defineSliceZoneComponents } from "@prismicio/vue";
</script>

<template>
  <SliceZone
    :slices="home.data.body"
    :components="
      defineSliceZoneComponents({
        text: TextSlice,
        recent_posts: RecentPostsSlice,
      })
    "
  />
  <TextSlice />
  <RecentPostsSlice />
</template>
