// Post route
<script setup>
import { useRouter } from "vue-router";

import { defineSliceZoneComponents, usePrismicDocumentByUID } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

import HeadingSlice from "../../components/slices/Heading/Heading.vue";
import ImageSlice from "../../components/slices/Image/Image.vue";
import TextSlice from "../../components/slices/Text/Text.vue";
import CodeSlice from "../../components/slices/Code/Code.vue";

import styles from "./Post.module.css"

const route = useRouter();
const uid = route.currentRoute.value.params.uid;

// Fetch author documents
const { data: post } = usePrismicDocumentByUID("posts", uid,
{ fetchLinks: ["authors.author_profile", "authors.author_image", "authors.author_bio", "authors.author_website_link", "authors.author_website_text"] });
</script>

<template>
  <div>
  <article v-if="post">
    <h2>Post</h2>
    <SliceZone
      :slices="post.data.body"
      :components="
        defineSliceZoneComponents({
          heading: HeadingSlice,
          image: ImageSlice,
          text: TextSlice,
          code: CodeSlice,
        })
      "
    />
  </article>
  <footer :class="styles.boxContainer">
    <h3>Authors</h3>
    <!-- Render linked authors from grouped content relationship -->
    <div v-if="post" v-for="author in post.data.authors">
      <div :class="styles.boxContent" >
        <PrismicRichText :field="author.author_relationship.data.author_name" />
        <PrismicRichText :field="author.author_relationship.data.author_bio" />
        <a :href="author.author_relationship.data.author_website_link.url">
          {{ prismicH.asText(author.author_relationship.data.author_website_text) }}
        </a>
      </div>
      <div :class="styles.boxImage">
        <PrismicImage :field="author.author_relationship.data.author_image" />
      </div>
    </div>
  </footer>
</div>
</template>
