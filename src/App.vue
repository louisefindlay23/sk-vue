<script setup>
// TODO: Try to use Levi's folder structure to import multiple components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import * as prismicH from "@prismicio/helpers";
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";
import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/vue";
const { data: home } = useSinglePrismicDocument("home");
const { data: posts } = useAllPrismicDocumentsByType("posts");
const siteTitle = "The Sock Kingdom";
</script>

<template>
  <!-- TODO: Try to add Layout component -->
  <!-- TODO: Add pages -->
  <Header :siteTitle="`${siteTitle}`" />
  <main id="page-content" v-if="home">
    <PrismicRichText :field="home.data.overview_text" />
  </main>
  <div id="box-container">
    <article v-for="post in posts" :key="JSON.stringify(post.data)">
      <div class="box-content">
        <a :href="`/post/${post.uid}`">
          <PrismicRichText :field="post.data.post_title" />
        </a>
        <time
          :dateTime="prismicH.asDate(post.first_publication_date).toISOString()"
        ></time>
        {{ format(prismicH.asDate(post.first_publication_date), "dd/MM/yyyy") }}
        <PrismicRichText :field="post.data.post_content.slice(0, 1)" />
      </div>
      <div class="box-image">
        <PrismicImage :field="post.data.cover_image" />
      </div>
    </article>
  </div>
  <Footer :siteTitle="`${siteTitle}`" />
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
