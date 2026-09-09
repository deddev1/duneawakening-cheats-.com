import { siteConfig } from './site';
import { duneImages } from './dune';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(duneImages.hero, 'Dune Awakening Cheats', 'Dune Awakening Cheats homepage hero'),
		img(duneImages.espWallhack, 'Dune Awakening ESP', 'Dune Awakening ESP wallhack overlay'),
		img(duneImages.aimbotCombat, 'Dune Awakening Aimbot', 'Dune Awakening Aimbot combat preview'),
	],
	hacks: [
		img(duneImages.battleRoyaleCombat, 'Dune Awakening Cheats', 'Dune Awakening cheats open-world run fight preview'),
		img(duneImages.espWallhack, 'Dune Awakening Cheats ESP', 'Dune Awakening wallhack ESP on players, NPCs, and elite enemies'),
	],
	'dune-awakening-esp': [
		img(duneImages.espWallhack, 'Dune Awakening ESP', 'Dune Awakening ESP wallhack overlay'),
		img(duneImages.playerEsp, 'Dune Awakening Player ESP', 'Dune Awakening Player ESP markers'),
	],
	'dune-awakening-aimbot': [
		img(duneImages.aimbotCombat, 'Dune Awakening Aimbot', 'Dune Awakening Aimbot combat preview'),
		img(duneImages.squadFight, 'Dune Awakening Aimbot group fight', 'Dune Awakening Aimbot in squad combat'),
	],
	wallhack: [
		img(duneImages.espWallhack, 'Dune Awakening Wallhack', 'Dune Awakening wallhack ESP view'),
		img(duneImages.cover, 'Dune Awakening Wallhack overlay', 'Dune Awakening ESP boxes through terrain'),
	],
	radar: [
		img(duneImages.radarHack, 'Dune Awakening Radar Hack', 'Dune Awakening radar hack minimap overlay'),
		img(duneImages.rebootFight, 'Dune Awakening Radar Hack overlay', 'Dune Awakening 2D radar for flank detection'),
	],
	features: [
		img(duneImages.loadoutBuilder, 'Dune Awakening Cheats Features', 'Dune Awakening Cheats feature overview'),
		img(duneImages.cheatsPackage, 'Dune Awakening Cheats menu', 'Dune Awakening Cheats in-client controls'),
	],
	pricing: [
		img(duneImages.cover, 'Dune Awakening Cheats Pricing', 'Dune Awakening Cheats license plans'),
		img(duneImages.cheatsPackage, 'Dune Awakening Cheats package', 'Dune Awakening Cheats product package'),
	],
	setup: [
		img(duneImages.squadFight, 'Dune Awakening Cheats Setup', 'Dune Awakening Cheats installation guide'),
	],
	updates: [
		img(duneImages.headerArt, 'Dune Awakening Cheats Updates', 'Dune Awakening Cheats patch status'),
	],
	faq: [
		img(duneImages.loadoutBuilder, 'Dune Awakening Cheats FAQ', 'Dune Awakening Cheats frequently asked questions'),
	],
	support: [
		img(duneImages.headerArt, 'Dune Awakening Cheats Support', 'Dune Awakening Cheats help center'),
	],
	privacy: [
		img(duneImages.cover, 'Dune Awakening Cheats Privacy Policy', 'Dune Awakening Cheats privacy policy'),
	],
	refund: [
		img(duneImages.cover, 'Dune Awakening Cheats Refund Policy', 'Dune Awakening Cheats refund policy'),
	],
	terms: [
		img(duneImages.squadFight, 'Dune Awakening Cheats Terms', 'Dune Awakening Cheats terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core dune-awakening-cheats URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = duneImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
