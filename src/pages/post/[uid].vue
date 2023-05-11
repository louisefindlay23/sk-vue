<script setup>
import { useRouter } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

const route = useRouter();
const uid = route.currentRoute.value.params.uid;

const { data: post } = usePrismicDocumentByUID("posts", uid);

const htmlSerializer = {
  heading2: ({ children }) => `${pigLatin(children)}`,
  label: ({ node, children }) =>
    `<code label=${node.data.label}>${children}</code>`,
};
import { defineSliceZoneComponents } from "@prismicio/vue";
import HeadingSlice from "../../components/slices/Heading/Heading.vue";
import ImageSlice from "../../components/slices/Image/Image.vue";
import TextSlice from "../../components/slices/Text/Text.vue";
import CodeSlice from "../../components/slices/Code/Code.vue";
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
  <footer id="box-container" v-if="post.data.author_profile">
    <h3>Authors</h3>
    <div
      v-for="author in post.data.author_profile"
      :key="JSON.stringify(author)"
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
  </footer>
</template>
