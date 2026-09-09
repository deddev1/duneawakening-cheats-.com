#!/usr/bin/env node
/**
 * Writes dist/_routes.json for Cloudflare Workers static routing.
 *
 * All requests go through the user worker (redirects + ASSETS.fetch).
 * Do NOT exclude sitemap XML paths — routing them to the asset worker alone
 * caused HTTP 500 in production while robots.txt and HTML still worked.
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

writeFileSync(
	join(distDir, '_routes.json'),
	`${JSON.stringify({ version: 1, include: ['/*'], exclude: [] }, null, 2)}\n`,
);

console.log('[write-worker-routes] Wrote dist/_routes.json (all routes via worker)');
