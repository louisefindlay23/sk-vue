<script setup>
import * as prismicH from "@prismicio/helpers";
import { format } from "https://cdn.skypack.dev/date-fns@2.29.3";
defineProps(["postDate"]);
</script>
<template>
  <time :dateTime="prismicH.asDate(postDate).toISOString()">{{
    format(prismicH.asDate(postDate), "dd/MM/yyyy")
  }}</time>
</template>
