<script setup>
import { getSliceComponentProps, usePrismicDocumentsByType } from "@prismicio/vue";

import Date from "../../../components/Date/Date.vue";
import styles from "./RecentPosts.module.css"

// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

const { data: posts } = usePrismicDocumentsByType("posts", {
  pageSize: 3,
});
</script>

<template>
  <div v-if="slice" :class="styles.boxContainer" >
    <PrismicRichText :field="slice.primary.post_heading" wrapper="section" />
    <article
      v-if="posts"
      v-for="post in posts.results"
      :key="JSON.stringify(post.data)"
    >
      <div :class="styles.boxContent" >
        <a :href="`/post/${post.uid}`">
          <PrismicRichText :field="post.data.body[0].primary.heading" />
        </a>
        <Date :postDate="post.first_publication_date" />
        <PrismicRichText :field="post.data.body[2].primary.text.slice(0, 1)" />
      </div>
      <div :class="styles.boxImage" >
        <PrismicImage :field="post.data.body[1].primary.image" />
      </div>
    </article>
  </div>
</template>
