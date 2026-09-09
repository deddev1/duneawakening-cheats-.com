#!/usr/bin/env node
/**
 * Writes dist/_routes.json so Cloudflare serves sitemaps and robots.txt
 * directly from static assets (bypassing the worker). Required for Google
 * Search Console sitemap fetching when edge middleware is active.
 */
import { existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

if (!existsSync(join(distDir, 'sitemap-index.xml'))) {
	console.warn('[write-worker-routes] dist/sitemap-index.xml missing — run astro build first.');
	process.exit(0);
}

const I18N_LOCALE_CODES = [
	'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

const exclude = [
	'/robots.txt',
	'/sitemap-index.xml',
	'/sitemap.xml',
	'/sitemap-images.xml',
	'/sitemap-i18n.xml',
	...I18N_LOCALE_CODES.map((locale) => `/sitemap-${locale}.xml`),
];

writeFileSync(
	join(distDir, '_routes.json'),
	JSON.stringify({ version: 1, include: ['/*'], exclude }, null, 2) + '\n',
);

console.log(`[write-worker-routes] Wrote dist/_routes.json (${exclude.length} worker bypass paths)`);
