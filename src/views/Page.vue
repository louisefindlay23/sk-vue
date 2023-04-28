<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { usePrismicDocumentByUID } from "@prismicio/vue";
const route = useRouter();
const uid = route.currentRoute.value.params.uid;
const { data: page } = usePrismicDocumentByUID("pages", uid);
const siteTitle = "The Sock Kingdom";
</script>

<template>
  <Header :siteTitle="`${siteTitle}`" />
  <article v-if="page">
    <header id="post-meta">
      <PrismicRichText :field="page.data.page_title" />
      <PrismicImage :field="page.data.cover_image" />
    </header>
    <main id="page-content">
      <PrismicRichText :field="page.data.page_text" />
    </main>
  </article>
  <Footer :siteTitle="`${siteTitle}`" />
</template>
