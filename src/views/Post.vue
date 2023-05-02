<script setup>
import { useRouter } from "vue-router";
import * as prismicH from "@prismicio/helpers";
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";
import pigLatin from "https://cdn.skypack.dev/piglatin";
import { usePrismicDocumentByUID } from "@prismicio/vue";
const route = useRouter();
const uid = route.currentRoute.value.params.uid;
const { data: post } = usePrismicDocumentByUID("posts", uid);
const htmlSerializer = {
  heading2: ({ children }) => `${pigLatin(children)}`,
  label: ({ node, children }) =>
    `<code label=${node.data.label}>${children}</code>`,
};
</script>

<template>
  <article v-if="post">
    <header id="post-meta">
      <h2>
        {{ prismicH.asHTML(post.data.post_title, null, htmlSerializer) }}
      </h2>
      <time
        :dateTime="prismicH.asDate(post.first_publication_date).toISOString()"
      >
        {{ format(prismicH.asDate(post.first_publication_date), "dd/MM/yyyy") }}
      </time>
      <PrismicImage
        :field="post.data.cover_image"
        :imgix-params="{ duotone: ['black', 'white'] }"
      />
    </header>
    <main id="post-content">
      <PrismicRichText :field="post.data.post_content" />
      <PrismicRichText
        :field="post.data.code_snippet"
        :components="htmlSerializer"
      />
    </main>
    <footer id="box-container" v-if="post.data.author_profile">
      <h3>Authors</h3>
      <div
        v-for="author in post.data.author_profile"
        :key="JSON.stringify(author.author_name)"
      >
        <div class="box-content">
          <PrismicRichText :field="author.author_name" />
          <PrismicRichText :field="author.author_bio" />
          <a :href="author.author_website_link.url">
            {{ prismicH.asText(author.author_website_text) }}
          </a>
        </div>
        <div class="box-image">
          <PrismicImage :field="author.author_image" />
        </div>
      </div>
      );
    </footer>
  </article>
</template>
