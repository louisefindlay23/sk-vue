<script setup>
import { getSliceComponentProps } from "@prismicio/vue";
// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
import { usePrismicDocumentsByType } from "@prismicio/vue";
const { data: posts } = usePrismicDocumentsByType("posts", {
  pageSize: 3,
});
import Date from "../../../components/Date/Date.vue";
</script>

<template>
  <div id="box-container">
    <PrismicRichText :field="slice.primary.post_heading" wrapper="section" />
    <article v-for="post in posts.results" :key="JSON.stringify(post.data)">
      <div class="box-content">
        <a :href="`/post/${post.uid}`">
          <PrismicRichText :field="post.data.post_title" />
        </a>
        <Date :postDate="post.first_publication_date" />
        <PrismicRichText :field="post.data.post_content.slice(0, 1)" />
      </div>
      <div class="box-image">
        <PrismicImage :field="post.data.cover_image" />
      </div>
    </article>
  </div>
</template>
