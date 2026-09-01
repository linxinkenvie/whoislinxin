// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://whoislinxin.com',
	build: {
		inlineStylesheets: 'never',
	},
	markdown: {
		syntaxHighlight: false,
	},
	integrations: [mdx(), sitemap()],
});
