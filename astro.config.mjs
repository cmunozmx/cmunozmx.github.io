// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  site: 'https://cmunozmx.github.io',
  base: 'cmunozmx.github.io',

  vite: {
    plugins: [tailwindcss()]
  }
});