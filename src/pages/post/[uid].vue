<script setup>
import { useRouter } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

const route = useRouter();
const uid = route.currentRoute.value.params.uid;
const { data: post } = usePrismicDocumentByUID("posts", uid,
/* , {
  graphQuery: `{
      post {
        author_relationship
      }
    }` 
  });*/
)

/* { fetchLinks: ["authors.author_profile", "authors.author_profile.author_image", "authors.author_profile.author_bio", "authors.author_profile.author_website_link", "authors.author_profile.author_website.text"] } */

console.info(post);

import { defineSliceZoneComponents } from "@prismicio/vue";
import HeadingSlice from "../../components/slices/Heading/Heading.vue";
import ImageSlice from "../../components/slices/Image/Image.vue";
import TextSlice from "../../components/slices/Text/Text.vue";
import CodeSlice from "../../components/slices/Code/Code.vue";

import styles from "./Post.module.css"
</script>

<template>
  <article v-if="post">
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
    <div v-if="post">
      <!-- <div :class="styles.boxContent" >
        <PrismicRichText :field="post.data.author_document.data.author_name" />
        <PrismicRichText :field="post.data.author_document.data.author_bio" />
        <a :href="post.data.author_document.data.author_website_link.url">
          {{ prismicH.asText(post.data.author_document.data.author_website_text) }}
        </a>
      </div>
      <div :class="styles.boxImage">
        <PrismicImage :field="post.data.author_document.data.author_image" />
      </div>-->
    </div>
  </footer>
</template>
