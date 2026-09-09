/**
 * Site-wide SEO keyword cluster — optimized for duneawakeningcheats.com
 */
export const primaryKeyword = 'Dune Awakening Cheats';

export const siteBrand = 'Dune Awakening Cheats';
export const siteDomain = 'duneawakeningcheats.com';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Dune Awakening Cheats',
	'dune-awakening cheats',
	'dune-awakening hacks',
	'dune-awakening hack',
	'dune awakening esp',
	'dune awakening aimbot',
	'dune awakening wallhack',
	'dune-awakening radar hack',
	'undetected dune awakening cheats',
	'dune awakening cheats 2026',
	'dune-awakening cheats pc',
	'dune-awakening soft aim',
	'dune-awakening mod menu',
	'buy dune-awakening cheats',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Dune Awakening Cheats 2026 | ESP, Aimbot & Hacks for PC';
export const defaultDescription =
	'Dune Awakening cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Dune Awakening Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | duneawakeningcheats.com`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('dune-awakening')) return lead.slice(0, 160);
	return `Dune Awakening cheats — ${lead}`.slice(0, 160);
}
