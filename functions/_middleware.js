import { getHomeLocaleRedirect } from './locale-redirect.js';

const CANONICAL_ORIGIN = 'https://duneawakeningcheats.com';
const APEX_HOST = 'duneawakeningcheats.com';
const WWW_HOST = 'www.duneawakeningcheats.com';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'overwatchhacks.com',
	'www.overwatchhacks.com',
	'warthunderhacks.net',
	'www.warthunderhacks.net',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'projectzomboidcheats.com',
	'www.projectzomboidcheats.com',
	'warframecheats.net',
	'www.warframecheats.net',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/project-zomboid-radar/': '/dune-awakening-radar/',
	'/project-zomboid-radar': '/dune-awakening-radar/',
	'/project-zomboid-wallhack/': '/dune-awakening-wallhack/',
	'/project-zomboid-wallhack': '/dune-awakening-wallhack/',
	'/project-zomboid-aimbot/': '/dune-awakening-aimbot/',
	'/project-zomboid-aimbot': '/dune-awakening-aimbot/',
	'/project-zomboid-esp/': '/dune-awakening-esp/',
	'/project-zomboid-esp': '/dune-awakening-esp/',
	'/project-zomboid-cheats/': '/dune-awakening-cheats/',
	'/project-zomboid-cheats': '/dune-awakening-cheats/',
	'/warframe-radar/': '/dune-awakening-radar/',
	'/warframe-radar': '/dune-awakening-radar/',
	'/warframe-wallhack/': '/dune-awakening-wallhack/',
	'/warframe-wallhack': '/dune-awakening-wallhack/',
	'/warframe-aimbot/': '/dune-awakening-aimbot/',
	'/warframe-aimbot': '/dune-awakening-aimbot/',
	'/warframe-esp/': '/dune-awakening-esp/',
	'/warframe-esp': '/dune-awakening-esp/',
	'/warframe-cheats/': '/dune-awakening-cheats/',
	'/warframe-cheats': '/dune-awakening-cheats/',
	'/sitemap-0.xml': '/sitemap.xml',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/dune-awakening-cheats/',
	'/fortnite-hacks/': '/dune-awakening-cheats/',
	'/fortnite-aimbot': '/dune-awakening-aimbot/',
	'/fortnite-aimbot/': '/dune-awakening-aimbot/',
	'/fortnite-esp': '/dune-awakening-esp/',
	'/fortnite-esp/': '/dune-awakening-esp/',
	'/fortnite-wallhack': '/dune-awakening-wallhack/',
	'/fortnite-wallhack/': '/dune-awakening-wallhack/',
	'/undetected-fortnite-cheats': '/dune-awakening-cheats/',
	'/undetected-fortnite-cheats/': '/dune-awakening-cheats/',
	'/battleye-bypass-fortnite': '/dune-awakening-cheats/',
	'/battleye-bypass-fortnite/': '/dune-awakening-cheats/',
	'/battleye-bypass': '/dune-awakening-cheats/',
	'/battleye-bypass/': '/dune-awakening-cheats/',
	'/warzone-aimbot': '/dune-awakening-aimbot/',
	'/warzone-aimbot/': '/dune-awakening-aimbot/',
	'/warzone-esp': '/dune-awakening-esp/',
	'/warzone-esp/': '/dune-awakening-esp/',
	'/ricochet-bypass': '/dune-awakening-cheats/',
	'/ricochet-bypass/': '/dune-awakening-cheats/',
	'/arc-raiders-hacks': '/dune-awakening-cheats/',
	'/arc-raiders-hacks/': '/dune-awakening-cheats/',
	'/arc-raiders-esp': '/dune-awakening-esp/',
	'/arc-raiders-esp/': '/dune-awakening-esp/',
	'/arc-raiders-aimbot': '/dune-awakening-aimbot/',
	'/arc-raiders-aimbot/': '/dune-awakening-aimbot/',
	'/arc-raiders-wallhack': '/dune-awakening-wallhack/',
	'/arc-raiders-wallhack/': '/dune-awakening-wallhack/',
	'/arc-raiders-radar': '/dune-awakening-radar/',
	'/arc-raiders-radar/': '/dune-awakening-radar/',
	'/overwatch-hacks': '/dune-awakening-cheats/',
	'/overwatch-hacks/': '/dune-awakening-cheats/',
	'/overwatch-esp': '/dune-awakening-esp/',
	'/overwatch-esp/': '/dune-awakening-esp/',
	'/overwatch-aimbot': '/dune-awakening-aimbot/',
	'/overwatch-aimbot/': '/dune-awakening-aimbot/',
	'/overwatch-wallhack': '/dune-awakening-wallhack/',
	'/overwatch-wallhack/': '/dune-awakening-wallhack/',
	'/overwatch-radar': '/dune-awakening-radar/',
	'/overwatch-radar/': '/dune-awakening-radar/',
	'/war-thunder-hacks': '/dune-awakening-cheats/',
	'/war-thunder-hacks/': '/dune-awakening-cheats/',
	'/war-thunder-esp': '/dune-awakening-esp/',
	'/war-thunder-esp/': '/dune-awakening-esp/',
	'/war-thunder-aimbot': '/dune-awakening-aimbot/',
	'/war-thunder-aimbot/': '/dune-awakening-aimbot/',
	'/war-thunder-wallhack': '/dune-awakening-wallhack/',
	'/war-thunder-wallhack/': '/dune-awakening-wallhack/',
	'/war-thunder-radar': '/dune-awakening-radar/',
	'/war-thunder-radar/': '/dune-awakening-radar/',
	'/rust-hacks': '/dune-awakening-cheats/',
	'/rust-hacks/': '/dune-awakening-cheats/',
	'/rust-aimbot': '/dune-awakening-aimbot/',
	'/rust-aimbot/': '/dune-awakening-aimbot/',
	'/rust-esp': '/dune-awakening-esp/',
	'/rust-esp/': '/dune-awakening-esp/',
	'/dune-awakening-cheats': '/dune-awakening-cheats/',
	'/dune-awakening-esp': '/dune-awakening-esp/',
	'/dune-awakening-aimbot': '/dune-awakening-aimbot/',
	'/dune-awakening-wallhack': '/dune-awakening-wallhack/',
	'/dune-awakening-radar': '/dune-awakening-radar/',
	'/dune-awakening-radar-hack': '/dune-awakening-radar/',
	'/dune-awakening-radar-hack/': '/dune-awakening-radar/',
	'/undetected-dune-awakening-cheats': '/dune-awakening-cheats/',
	'/undetected-dune-awakening-cheats/': '/dune-awakening-cheats/',
	'/battleye-bypass-dune-awakening': '/dune-awakening-cheats/',
	'/battleye-bypass-dune-awakening/': '/dune-awakening-cheats/',
	'/dune-awakening-cheats-2026': '/dune-awakening-cheats/',
	'/dune-awakening-cheats-2026/': '/dune-awakening-cheats/',
	'/best-dune-awakening-cheats': '/dune-awakening-cheats/',
	'/best-dune-awakening-cheats/': '/dune-awakening-cheats/',
	'/dune-awakening-cheat-download': '/pricing/',
	'/dune-awakening-cheat-download/': '/pricing/',
	'/dune-awakening-mod-menu': '/features/',
	'/dune-awakening-mod-menu/': '/features/',
	'/dune-awakening-soft-aim': '/dune-awakening-aimbot/',
	'/dune-awakening-soft-aim/': '/dune-awakening-aimbot/',
	'/dune-awakening-aimbot-hack': '/dune-awakening-aimbot/',
	'/dune-awakening-aimbot-hack/': '/dune-awakening-aimbot/',
	'/dune-awakening-esp-hack': '/dune-awakening-esp/',
	'/dune-awakening-esp-hack/': '/dune-awakening-esp/',
	'/zomboid-unlock-all': '/features/',
	'/zomboid-unlock-all/': '/features/',
	'/blog/elitefn-vs-dune-awakening-cheats-two-week-test': '/blog/voidcheats-vs-dune-awakening-cheats-two-week-test/',
	'/blog/elitefn-vs-dune-awakening-cheats-two-week-test/': '/blog/voidcheats-vs-dune-awakening-cheats-two-week-test/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self'",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self' 'unsafe-inline'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function isSeoStaticPath(pathname) {
	return (
		pathname === '/robots.txt' ||
		pathname === '/sitemap-index.xml' ||
		pathname === '/sitemap.xml' ||
		pathname === '/sitemap-images.xml' ||
		pathname === '/sitemap-i18n.xml' ||
		/^\/sitemap-[a-z]{2}\.xml$/.test(pathname)
	);
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

function withSeoStaticHeaders(pathname, response) {
	const headers = new Headers(response.headers);
	if (pathname.endsWith('.xml')) {
		headers.set('Content-Type', 'application/xml; charset=utf-8');
	} else if (pathname === '/robots.txt') {
		headers.set('Content-Type', 'text/plain; charset=utf-8');
	}
	headers.set('Cache-Control', 'public, max-age=3600');
	headers.delete('CDN-Cache-Control');
	headers.delete('Cloudflare-CDN-Cache-Control');
	return new Response(response.body, { status: response.status, headers });
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const homeLocaleRedirect = getHomeLocaleRedirect(
		url.pathname,
		url.search,
		context.request.headers,
	);
	if (homeLocaleRedirect) {
		const headers = new Headers({
			Location: new URL(homeLocaleRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 302, headers });
	}

	const response = await context.next();

	if (isSeoStaticPath(url.pathname)) {
		return withSeoStaticHeaders(url.pathname, response);
	}

	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		headers,
	});
}
