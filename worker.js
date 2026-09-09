import { getEdgeRedirect } from './functions/_middleware.js';

/**
 * Minimal Cloudflare Worker — host/path redirects only, then static assets.
 * Security headers and caching come from public/_headers (no response re-wrap).
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

			const redirect = getEdgeRedirect(new URL(request.url), request);
			if (redirect) return redirect;

			return env.ASSETS.fetch(request);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			return new Response(`Worker error: ${message}`, {
				status: 500,
				headers: { 'Content-Type': 'text/plain; charset=utf-8' },
			});
		}
	},
};
