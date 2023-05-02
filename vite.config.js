import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  plugins: [vue(), Pages(), webfontDownload()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
