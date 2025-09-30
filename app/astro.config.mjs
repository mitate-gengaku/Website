// @ts-check
import path from "path";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import removeAttr from "remove-attr";

let isProduction = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    relativeLinks(),
    (await import("astro-compress")).default({
      HTML: {
        "html-minifier-terser": false,
      },
    }),
  ],

  server: {
    port: 3000,
    host: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
      isProduction &&
        removeAttr({
          extensions: ["tsx", "jsx", "astro"],
          attributes: ["data-testid"],
        }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(new URL(".", import.meta.url).pathname, "src"),
      },
    },
  },

  compressHTML: false,
});
