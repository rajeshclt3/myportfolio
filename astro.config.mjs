import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/myportfolio/',
  integrations: [tailwind(), mdx()],
  site: 'https://rajeshclt3.github.io/myportfolio'
});