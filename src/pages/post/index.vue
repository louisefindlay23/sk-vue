<script setup>
import { usePrismicDocumentsByType } from "@prismicio/vue";
// Limit recent post list to three posts
const { data: posts } = usePrismicDocumentsByType("posts", {
  pageSize: 2,
});
import Date from "../../components/Date/Date.vue";
import styles from "../../components/slices/RecentPosts/RecentPosts.module.css";
console.info(posts);
</script>

<template>
  <div v-if="posts" :class="styles.boxContainer" >
    <section>
      <h2>Posts</h2>
      </section>
    <!-- <PrismicRichText :field="post.data.post_heading" wrapper="section" /> -->
    <!-- Iterate over paginated posts -->
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
        <!-- Slice the post's first paragraph for the excerpt -->
        <PrismicRichText :field="post.data.body[2].primary.text.slice(0, 1)" />
      </div>
      <div :class="styles.boxImage" >
        <PrismicImage :field="post.data.body[1].primary.image" />
      </div>
    </article>
  </div>
</template>