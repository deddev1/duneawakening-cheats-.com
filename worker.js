import { getEdgeRedirect, isSeoStaticPath, onRequest } from './functions/_middleware.js';

/**
 * Cloudflare Workers entry — edge redirects and security headers.
 * Sitemaps/robots are served directly from static assets (no middleware re-wrap).
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

			const url = new URL(request.url);
			const redirect = getEdgeRedirect(url, request);
			if (redirect) return redirect;

			// Crawler files: return the static asset unchanged (see dist/_routes.json).
			if (isSeoStaticPath(url.pathname)) {
				return env.ASSETS.fetch(request);
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
