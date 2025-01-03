// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import preload from "astro-preload";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      NODE_ENV: envField.string({ context: "server", access: "public" }),
      SMTP_USER: envField.string({ context: "server", access: "public" }),
      SMTP_PASSWORD: envField.string({ context: "server", access: "secret" }),
      MONGO_URI: envField.string({ context: "server", access: "secret" }),
      MONGO_DB_ID: envField.string({ context: "server", access: "public" }),
      // NOTION_KEY: envField.string({
      //   context: "server",
      //   access: "secret",
      //   optional: true,
      // }),
      // NOTION_BLOG_ID: envField.string({
      //   context: "server",
      //   access: "public",
      //   optional: true,
      // }),
      // NOTION_TAG_ID: envField.string({
      //   context: "server",
      //   access: "public",
      //   optional: true,
      // }),
      // NOTION_AUTHOR_ID: envField.string({
      //   context: "server",
      //   access: "public",
      //   optional: true,
      // }),
    },
  },
  integrations: [
    preload(),
    react(),
    tailwind(),
    sitemap(),
    prefetch({
      selector: "a[href^='/']",
    }),
    compress(),
  ],
});
