import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
        },
      ],
    ],
  },
  image: {
    service: passthroughImageService(),
  },
  site: "https://fly.tawashi.jp",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  trailingSlash: "never",
});
// https://astro.build/config
// export default defineConfig({});
