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
  <div v-if="slice" id="box-container">
    <PrismicRichText :field="slice.primary.post_heading" wrapper="section" />
    <article
      v-if="posts"
      v-for="post in posts.results"
      :key="JSON.stringify(post.data)"
    >
      <div class="box-content">
        <a :href="`/post/${post.uid}`">
          <PrismicRichText :field="post.data.body[0].primary.heading" />
        </a>
        <Date :postDate="post.first_publication_date" />
        <PrismicRichText :field="post.data.body[2].primary.text.slice(0, 1)" />
      </div>
      <div class="box-image">
        <PrismicImage :field="post.data.body[1].primary.image" />
      </div>
    </article>
  </div>
</template>
