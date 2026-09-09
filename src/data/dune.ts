import { siteConfig } from './site';
import { gameplayImages, showcaseScreenshots } from './gameplay-images';

const g = gameplayImages;

export const duneHeroImage = g.hero.src;

export type DuneScreenshot = {
	src: string;
	alt: string;
	title: string;
};

/** Dune Awakening cheat & gameplay screenshots — hosted on Supabase CDN. */
export const duneScreenshots = {
	mainMenu: g.cheatClientPanel,
	espOverlay: g.cheatEspOverlay,
	espBoxes: g.gameplayStreetCombat,
	aimbotMenu: g.cheatMenuUi,
	radarMinimap: g.gameplayLootRun,
	combatEsp: g.gameplayHordeDefense,
	survivalEsp: g.gameplayStreetCombat,
	aimbotCombat: g.gameplayHordeDefense,
	openWorldRadar: g.gameplayLootRun,
	lootEsp: g.gameplayStreetCombat,
	settingsPanel: g.cheatMenuUi,
} as const satisfies Record<string, DuneScreenshot>;

/** Pricing gallery — main viewer + thumbnail strip (no video). */
export const pricingGallery: DuneScreenshot[] = [...showcaseScreenshots];

/** Feature page section screenshots keyed to productFeatureDetails ids. */
export const featureSectionImages: Record<'aimbot' | 'visual' | 'misc', DuneScreenshot> = {
	aimbot: duneScreenshots.aimbotCombat,
	visual: duneScreenshots.espOverlay,
	misc: duneScreenshots.radarMinimap,
};

/** Extra visuals shown below the feature breakdown grid. */
export const featureGallery: DuneScreenshot[] = [...showcaseScreenshots];

const s = duneScreenshots;

export const duneImages = {
	hero: duneHeroImage,
	cover: s.espOverlay.src,
	logo: siteConfig.logo,
	loadoutBuilder: s.aimbotMenu.src,
	aimbotCombat: s.aimbotCombat.src,
	squadFight: s.combatEsp.src,
	espWallhack: s.espBoxes.src,
	cheatsPackage: s.mainMenu.src,
	headerArt: s.settingsPanel.src,
	battleRoyaleCombat: s.combatEsp.src,
	rebootFight: s.radarMinimap.src,
	playerEsp: s.espOverlay.src,
	radarHack: s.radarMinimap.src,
	zeroBuildCombat: s.combatEsp.src,
	zeroBuildMode: s.espBoxes.src,
	openWorldTileset: s.openWorldRadar.src,
	product: showcaseScreenshots.slice(0, 5).map(({ src, alt }) => ({ src, alt })),
	gallery: [
		{ src: showcaseScreenshots[0].src, alt: showcaseScreenshots[0].alt, href: '/dune-awakening-cheats/' },
		{ src: showcaseScreenshots[1].src, alt: showcaseScreenshots[1].alt, href: '/dune-awakening-esp/' },
		{ src: showcaseScreenshots[2].src, alt: showcaseScreenshots[2].alt, href: '/dune-awakening-wallhack/' },
		{ src: showcaseScreenshots[3].src, alt: showcaseScreenshots[3].alt, href: '/dune-awakening-aimbot/' },
		{ src: showcaseScreenshots[4].src, alt: showcaseScreenshots[4].alt, href: '/dune-awakening-radar/' },
		{ src: showcaseScreenshots[5].src, alt: showcaseScreenshots[5].alt, href: '/features/' },
	],
	sitemap: [
		{ src: s.mainMenu.src, title: 'Dune Awakening Cheats | Undetected ESP & Aimbot', caption: s.mainMenu.alt },
		{ src: s.espOverlay.src, title: 'Dune Awakening ESP overlay', caption: s.espOverlay.alt },
		{ src: s.espBoxes.src, title: 'Dune Awakening wallhack ESP', caption: s.espBoxes.alt },
		{ src: s.aimbotCombat.src, title: 'Dune Awakening aimbot targeting', caption: s.aimbotCombat.alt },
		{ src: s.aimbotMenu.src, title: 'Dune Awakening aimbot menu', caption: s.aimbotMenu.alt },
		{ src: s.radarMinimap.src, title: 'Dune Awakening radar hack', caption: s.radarMinimap.alt },
		{ src: s.combatEsp.src, title: 'Dune Awakening survival cheats', caption: s.combatEsp.alt },
		{ src: s.survivalEsp.src, title: 'Dune Awakening PvP ESP', caption: s.survivalEsp.alt },
		{ src: s.openWorldRadar.src, title: 'Dune Awakening Arrakis radar', caption: s.openWorldRadar.alt },
		{ src: s.lootEsp.src, title: 'Dune Awakening loot pickup ESP', caption: s.lootEsp.alt },
		{ src: s.settingsPanel.src, title: 'Dune Awakening cheats settings panel', caption: s.settingsPanel.alt },
	],
} as const;
