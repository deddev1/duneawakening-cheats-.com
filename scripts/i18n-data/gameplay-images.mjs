/** Supabase-hosted Dune Awakening gameplay & cheat UI images — shared with src/data/gameplay-images.ts */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dune';

export const gameplayImages = {
	hero: {
		src: '/images/dune-awakening-cheats-hero.webp',
		alt: 'Dune Awakening heroes on Arrakis with a sandworm erupting from the desert beneath a crimson sky',
		title: 'Dune Awakening Cheats hero — Arrakis sandworm and survival fighters',
	},
	gameplayStreetCombat: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124626.png`,
		alt: 'Dune Awakening gameplay — player fighting enemies on Arrakis dunes with melee and firearms',
		title: 'Dune Awakening street combat gameplay',
	},
	gameplayHordeDefense: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124717%20(1).png`,
		alt: 'Dune Awakening gameplay — faction raid surrounding a player near abandoned structures',
		title: 'Dune Awakening base defense gameplay',
	},
	gameplayLootRun: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124707%20(1).png`,
		alt: 'Dune Awakening gameplay — player harvesting spice while enemies approach in the Deep Desert',
		title: 'Dune Awakening loot run gameplay',
	},
	cheatMenuUi: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124638%20(1).png`,
		alt: 'Dune Awakening cheats in-game menu with ESP, aimbot, and radar toggle controls on Windows PC',
		title: 'Dune Awakening Cheats menu UI',
	},
	cheatClientPanel: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124432.png`,
		alt: 'Dune Awakening cheats client panel showing feature toggles for ESP wallhack, aimbot, and radar',
		title: 'Dune Awakening cheats client panel',
	},
	cheatEspOverlay: {
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124508%20(1).png`,
		alt: 'Dune Awakening ESP overlay screenshot with enemy boxes, loot markers, and distance readouts',
		title: 'Dune Awakening ESP overlay screenshot',
	},
};

const g = gameplayImages;

export const HERO_IMAGES = {
	home: g.hero.src,
	'dune-awakening-esp': g.gameplayStreetCombat.src,
	'dune-awakening-aimbot': g.gameplayHordeDefense.src,
	features: g.cheatMenuUi.src,
	pricing: g.cheatClientPanel.src,
	setup: g.cheatEspOverlay.src,
	updates: g.gameplayLootRun.src,
	faq: g.cheatMenuUi.src,
	support: g.cheatClientPanel.src,
	undetected: g.gameplayHordeDefense.src,
	wallhack: g.gameplayStreetCombat.src,
	radar: g.gameplayLootRun.src,
	'battleye-bypass': g.gameplayHordeDefense.src,
	'cheats-2026': g.hero.src,
	hacks: g.gameplayStreetCombat.src,
	'cheat-download': g.cheatClientPanel.src,
	'mod-menu': g.cheatMenuUi.src,
	'soft-aim': g.gameplayHordeDefense.src,
	'best-cheats': g.hero.src,
	'aimbot-hack': g.gameplayHordeDefense.src,
	'esp-hack': g.gameplayStreetCombat.src,
	'unlock-all': g.gameplayLootRun.src,
	privacy: g.gameplayLootRun.src,
	refund: g.gameplayLootRun.src,
	terms: g.gameplayLootRun.src,
};

export const PAGE_IMAGE_ALTS = {
	home: g.hero.alt,
	'dune-awakening-esp': g.gameplayStreetCombat.alt,
	'dune-awakening-aimbot': g.gameplayHordeDefense.alt,
	features: g.cheatMenuUi.alt,
	pricing: g.cheatClientPanel.alt,
	setup: g.cheatEspOverlay.alt,
	updates: g.gameplayLootRun.alt,
	faq: g.cheatMenuUi.alt,
	support: g.cheatClientPanel.alt,
	undetected: g.gameplayHordeDefense.alt,
	wallhack: g.gameplayStreetCombat.alt,
	radar: g.gameplayLootRun.alt,
	'battleye-bypass': g.gameplayHordeDefense.alt,
	'cheats-2026': g.hero.alt,
	hacks: g.gameplayStreetCombat.alt,
	'cheat-download': g.cheatClientPanel.alt,
	'mod-menu': g.cheatMenuUi.alt,
	'soft-aim': g.gameplayHordeDefense.alt,
	'best-cheats': g.hero.alt,
	'aimbot-hack': g.gameplayHordeDefense.alt,
	'esp-hack': g.gameplayStreetCombat.alt,
	'unlock-all': g.gameplayLootRun.alt,
	privacy: g.gameplayLootRun.alt,
	refund: g.gameplayLootRun.alt,
	terms: g.gameplayLootRun.alt,
};
