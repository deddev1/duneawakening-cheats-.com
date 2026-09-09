import { getEdgeRedirect, isSeoStaticPath } from './functions/_middleware.js';

/**
 * Cloudflare Worker — edge redirects, then static assets via ASSETS binding.
 * Sitemap/robots responses get explicit XML/text Content-Type for crawlers.
 */
async function serveAsset(request, env) {
	const response = await env.ASSETS.fetch(request);
	const pathname = new URL(request.url).pathname;

	if (!isSeoStaticPath(pathname) || !response.ok) {
		return response;
	}

	const headers = new Headers(response.headers);
	headers.set('Cache-Control', 'public, max-age=3600');

	if (pathname.endsWith('.xml')) {
		headers.set('Content-Type', 'application/xml; charset=utf-8');
	} else if (pathname === '/robots.txt') {
		headers.set('Content-Type', 'text/plain; charset=utf-8');
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

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

			return serveAsset(request, env);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			return new Response(`Worker error: ${message}`, {
				status: 500,
				headers: { 'Content-Type': 'text/plain; charset=utf-8' },
			});
		}
	},
};
