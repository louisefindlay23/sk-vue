<script setup>
import * as prismicH from "@prismicio/helpers";
import { useSinglePrismicDocument } from "@prismicio/vue";
const { data: navigationMenu } = useSinglePrismicDocument("navigation");
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
