/** Supabase-hosted Dune Awakening gameplay & cheat UI images. */
export const SUPABASE_GAMEPLAY_BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/dune';

export type GameplayImage = {
	src: string;
	alt: string;
	title: string;
};

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
} as const satisfies Record<string, GameplayImage>;

/** Homepage pricing showcase — main viewer + thumbnail strip. */
const showcaseBySrc = new Map<string, string>();

export const showcaseScreenshots: GameplayImage[] = [
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124432.png`,
		alt: 'Dune Awakening cheats client panel with ESP, aimbot, and radar feature toggles on Windows PC',
		title: 'Dune Awakening cheats client panel',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124508%20(1).png`,
		alt: 'Dune Awakening ESP overlay with player boxes, loot markers, and distance readouts on Arrakis',
		title: 'Dune Awakening ESP overlay screenshot',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124626%20(1).png`,
		alt: 'Dune Awakening cheats in-game HUD showing enemy ESP and combat overlays in the Deep Desert',
		title: 'Dune Awakening combat ESP screenshot',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124626.png`,
		alt: 'Dune Awakening wallhack ESP highlighting players and NPCs through terrain on Arrakis dunes',
		title: 'Dune Awakening wallhack ESP screenshot',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124638%20(1).png`,
		alt: 'Dune Awakening cheats mod menu with aimbot, ESP, and radar settings on Windows PC',
		title: 'Dune Awakening cheats mod menu',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124707%20(1).png`,
		alt: 'Dune Awakening radar hack minimap showing nearby players, spice nodes, and squad positions',
		title: 'Dune Awakening radar hack screenshot',
	},
	{
		src: `${SUPABASE_GAMEPLAY_BASE}/Screenshot%202026-09-09%20124717%20(1).png`,
		alt: 'Dune Awakening aimbot and combat assist overlay during a faction fight on Arrakis',
		title: 'Dune Awakening aimbot screenshot',
	},
];

for (const image of Object.values(gameplayImages)) {
	showcaseBySrc.set(image.src, image.alt);
}
for (const image of showcaseScreenshots) {
	showcaseBySrc.set(image.src, image.alt);
}

/** Resolve descriptive alt text for any known gameplay or showcase image URL. */
export function altForImageSrc(src: string, fallback = 'Dune Awakening Cheats screenshot'): string {
	return showcaseBySrc.get(src) ?? fallback;
}
