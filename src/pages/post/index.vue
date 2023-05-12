<script setup>
import { ref, onMounted } from "vue";
import { usePrismicDocumentsByType, usePrismic } from "@prismicio/vue";
const { client } = usePrismic();
// Limit recent post list to three posts
let { data: initialPosts } = usePrismicDocumentsByType("posts", {
  pageSize: 1,
});

const posts = ref(initialPosts);

import Date from "../../components/Date/Date.vue";
import styles from "../../components/slices/RecentPosts/RecentPosts.module.css";

function getPreviousPosts(prevPage) {
  console.info(prevPage);
}

async function getNextPosts(nextPage) {
  if (nextPage) {
  await client.getByType("posts", {
    pageSize: 1,
    page: 2,
  }).then((response) => {
    console.info(response);
    posts.value = response;
  }).catch((err) => {
    console.error(err);
  });
}
}
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
<div class="pagination">
      <button @click="getPreviousPosts(posts.prev_page)">Previous</button>
      <button @click="getNextPosts(posts.next_page)">Next</button>
    </div>
  </div>
</template>