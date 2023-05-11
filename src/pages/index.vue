<script setup>
import { defineSliceZoneComponents, useSinglePrismicDocument } from "@prismicio/vue";

import TextSlice from "../components/slices/Text/Text.vue";
import RecentPostsSlice from "../components/slices/RecentPosts/RecentPosts.vue";

const { data: home } = useSinglePrismicDocument("home");
</script>

<template>
  <main v-if="home">
    <SliceZone
      :slices="home.data.body"
      :components="
        defineSliceZoneComponents({
          text: TextSlice,
          recent_posts: RecentPostsSlice,
        })
      "
    />
  </main>
</template>
