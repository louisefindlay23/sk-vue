<script setup>
import { usePrismicDocumentByUID } from "@prismicio/vue";
import * as prismicH from "@prismicio/helpers";

import { useRouter } from "vue-router";
import { format } from "date-fns";

const route = useRouter();
const uid = route.currentRoute.value.params.uid;

let post = null;

if (uid) {
const { data: postData } = usePrismicDocumentByUID("posts", uid);
post = postData;
}

defineProps(["postDate"]);
</script>
<template>
  <!-- If post page, use post's publication date. If recent posts slice, use postDate prop.  -->
  <time v-if="post" :dateTime="prismicH.asDate(post.first_publication_date).toISOString()">
    {{ format(prismicH.asDate(post.first_publication_date), "dd/MM/yyyy") }}
  </time>
  <time v-if="postDate" :dateTime="prismicH.asDate(postDate)">
    {{ format(prismicH.asDate(postDate), "dd/MM/yyyy") }}</time>
</template>
