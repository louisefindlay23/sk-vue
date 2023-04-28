<!-- TODO: Add Vue Router -->
<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";
const { data: navigationMenu } = useSinglePrismicDocument("navigation");
import * as prismicH from "@prismicio/helpers";
</script>

<template>
  <nav>
    <ul v-if="navigationMenu">
      <li
        v-for="link in navigationMenu.data.menu"
        :key="JSON.stringify(link.link_text)"
      >
        <PrismicLink :field="link.link_url">
          {{ prismicH.asText(link.link_text) }}
        </PrismicLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Nav Styles */
nav ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
</style>
