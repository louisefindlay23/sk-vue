<script setup>
import * as prismicH from "@prismicio/helpers";
import { useSinglePrismicDocument } from "@prismicio/vue";
import styles from "./Header.module.css";
const { data: navigationMenu } = useSinglePrismicDocument("navigation");
</script>

<template>
  <nav>
    <ul v-if="navigationMenu" :class="styles.navList">
      <li v-for="link in navigationMenu.data.menu" :key="JSON.stringify(link)">
        <PrismicLink :field="link.link_url">
          {{ prismicH.asText(link.link_text) }}
        </PrismicLink>
      </li>
    </ul>
  </nav>
</template>
