import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  site: "https://fly.tawashi.jp",
  integrations: [mdx(), solidJs()],
  trailingSlash: "never",
  build: {
    format: "file",
  },
});
// https://astro.build/config
// export default defineConfig({});
