import { onRequest } from './functions/_middleware.js';

/**
 * Cloudflare Workers entry — runs edge middleware (HTTPS/www/legacy redirects,
 * path redirects, locale detection, security headers) before static assets.
 */
export default {
	async fetch(request, env) {
		try {
			if (!env?.ASSETS?.fetch) {
				return new Response(
					'Static assets are not bound. Redeploy with wrangler.toml [assets] binding = "ASSETS".',
					{ status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
				);
			}

			return await onRequest({
				request,
				next: () => env.ASSETS.fetch(request),
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			return new Response(`Worker error: ${message}`, {
				status: 500,
				headers: { 'Content-Type': 'text/plain; charset=utf-8' },
			});
		}
	},
};
