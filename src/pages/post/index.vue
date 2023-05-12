<script setup>
import { ref, onMounted } from "vue";
import { usePrismicDocumentsByType, usePrismic } from "@prismicio/vue";
const { client } = usePrismic();
// Get recent two posts
let { data: initialPosts } = usePrismicDocumentsByType("posts", {
  pageSize: 2,
});

// Set posts value to recent posts
const posts = ref(initialPosts);

import Date from "../../components/Date/Date.vue";
import styles from "../../components/slices/RecentPosts/RecentPosts.module.css";

// Get the previous or next page of posts
async function getPosts(page) {
  await client.getByType("posts", {
    pageSize: 2,
    page: page,
  }).then((response) => {
    posts.value = response;
  }).catch((err) => {
    console.error(err);
  });
}
</script>

<template>
  <div v-if="posts" :class="styles.boxContainer" >
    <section>
      <h2>Posts</h2>
    </section>
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
<div class="pagination">
      <button @click="getPosts(posts.page - 1)" :disabled="posts.page === 1">Previous</button>
      <button @click="getPosts(posts.page + 1)" :disabled="posts.page === posts.total_pages">Next</button>
    </div>
  </div>
</template>