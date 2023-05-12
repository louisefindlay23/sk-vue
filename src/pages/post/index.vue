<script setup>
import { defineSliceZoneComponents, usePrismicDocumentByUID } from "@prismicio/vue";
import PostList from "../../components/PostList/PostList.vue";
import HeadingSlice from "../../components/slices/Heading/Heading.vue";
const { data: prismicPage } = usePrismicDocumentByUID("pages", "post");
import styles from "../../components/PostList/PostList.module.css";
</script>

<template>
  <div v-if="prismicPage" :class="[styles.boxContainer, styles.page]" >
    <SliceZone
      :slices="prismicPage.data.body"
      :components="
        defineSliceZoneComponents({
          heading: HeadingSlice,
        })
      "
    />
  <PostList />
  </div>
</template>