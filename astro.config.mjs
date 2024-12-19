// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      NODE_ENV: envField.string({ context: "server", access: "public" }),
      SMTP_USER: envField.string({ context: "server", access: "public" }),
      SMTP_PASSWORD: envField.string({ context: "server", access: "secret" }),
      MONGO_URI: envField.string({ context: "server", access: "secret" }),
      MONGO_DB_ID: envField.string({ context: "server", access: "public" }),
      APP_URL: envField.string({ context: "server", access: "public" }),
      NOTION_KEY: envField.string({ context: "server", access: "secret" }),
      NOTION_BLOG_ID: envField.string({ context: "server", access: "public" }),
      NOTION_TAG_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      NOTION_AUTHOR_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },
  integrations: [react(), tailwind()],
});
