<script setup>
import { useRouter } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRouter();
const uid = route.currentRoute.value.params.uid;
const { data: page } = usePrismicDocumentByUID("pages", uid);
import * as prismicH from "@prismicio/helpers";
</script>

<template>
  <article v-if="page">
    <header id="post-meta">
      <PrismicRichText
        v-if="prismicH.isFilled.richText(page.data.page_title)"
        :field="page.data.page_title"
      />
      <PrismicImage :field="page.data.cover_image" />
    </header>
    <main id="page-content">
      <PrismicRichText :field="page.data.page_text" />
    </main>
  </article>
</template>
