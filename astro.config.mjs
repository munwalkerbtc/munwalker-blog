import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://munwalkerbtc.github.io',
  base: '/munwalker-blog',
  integrations: [mdx(), sitemap(), react()]
});