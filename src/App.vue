<script setup>
import Footer from "./components/Footer.vue";
import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/vue";
const { data: home } = useSinglePrismicDocument("home");
const { data: posts } = useAllPrismicDocumentsByType("posts");
</script>

<template>
  <header>
    <h1>Site</h1>
  </header>
  <main id="page-content" v-if="home">
    <PrismicRichText :field="home.data.overview_text" />
  </main>
  <div id="box-container">
    <article v-for="post in posts" :key="JSON.stringify(post.data)">
      <div class="box-content">
        <a :href="`/post/${post.uid}`">
          <PrismicRichText :field="post.data.post_title" />
        </a>
        <time dateTime=""></time>
        <PrismicRichText :field="post.data.post_content.slice(0, 1)" />
      </div>
      <div class="box-image">
        <PrismicImage :field="post.data.cover_image" />
      </div>
    </article>
  </div>
  <Footer siteTitle="The Sock Kingdom" />
</template>

<style scoped>
/* Page Header Styles */
#page-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 5px solid #000000;
}

/* Nav Styles */
nav ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
</style>
