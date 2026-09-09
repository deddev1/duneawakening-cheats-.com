#!/usr/bin/env node
/**
 * Normalize copy for Dune Awakening — removes Fortnite/Rust/Epic/EAC leftovers.
 * Run: node scripts/fix-dune-awakening-accuracy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type {[string | RegExp, string][]} */
const RULES = [
	[/Epic services/gi, 'Dune Awakening servers'],
	[/Epic platform/gi, 'Dune Awakening launcher'],
	[/Epic's rules/gi, "Funcom's Terms of Service"],
	[/Epic terms/gi, 'Funcom terms'],
	[/If Epic services/gi, 'If Dune Awakening servers'],
	[/Embark' anti-cheat/gi, 'Dune Awakening BattlEye anti-cheat'],
	[/Dune Awakening or EAC patch/gi, 'Dune Awakening or anti-cheat patch'],
	[/and EAC questions/gi, 'and anti-cheat questions'],
	[/EAC patch/gi, 'anti-cheat patch'],
	[/EAC history/gi, 'anti-cheat history'],
	[/EAC comparison/gi, 'anti-cheat comparison'],
	[/Battle royale fights happen in three dimensions — rooftops, windows, and flanks\./gi,
		'Multi-floor Arrakis regions stack vertical fights — catwalks, doorways, and side enemy spawns.'],
	[/extraction loop/gi, 'mission loop'],
	[/extraction phase rounds/gi, 'raid waves and raid modifiers'],
	[/extraction phase/gi, 'raid waves'],
	[/extraction route/gi, 'faction raid route'],
	[/endgame circles/gi, 'raid waves'],
	[/ranked combat encounter/gi, 'open-world run fight'],
	[/ranked objective fight/gi, 'spice runs objective fight'],
	[/ranked-critical/gi, 'session-critical'],
	[/ranked lobbies/gi, 'multiplayer squads'],
	[/ranked block/gi, 'game session'],
	[/before ranked/gi, 'before spice runs'],
	[/Built for ranked pressure/gi, 'Built for desert survival pressure'],
	[/before a third party/gi, 'before a flank wave'],
	[/third parties/gi, 'flank waves'],
	[/third-party flanks/gi, 'flank waves'],
	[/enemy squads/gi, 'players and NPCs'],
	[/enemy player/gi, 'player or NPC'],
	[/enemy players/gi, 'players and NPCs'],
	[/closest player/gi, 'closest enemy'],
	[/vehicles, loot, chests/gi, 'lockers, resource caches, and pickups'],
	[/vehicles and chests/gi, 'containers and resource caches'],
	[/loot and chest/gi, 'pickups and lockers'],
	[/loot chests/gi, 'resource caches'],
	[/supply-drop/gi, 'pickup'],
	[/mid-match/gi, 'mid-session'],
	[/map rotations/gi, 'Arrakis region rotations'],
	[/map rotation/gi, 'Arrakis region rotation'],
	[/POIs/g, 'Arrakis regions'],
	[/POI/g, 'Arrakis region area'],
	[/spice routes/gi, 'farm routes'],
	[/drop path/gi, 'farm route'],
	[/track players and containers/gi, 'track enemies and containers'],
	[/track players/gi, 'track enemies'],
	[/player threats/gi, 'enemy threats'],
	[/player or NPCs/gi, 'players and NPCs'],
	[/player or NPC/gi, 'player or NPC'],
	[/Dune Awakening' live seasons/gi, "Dune Awakening's live updates"],
	[/season updates from/gi, 'game updates from'],
	[/season calendars/gi, 'update calendars'],
	[/season notes from/gi, 'patch notes from'],
	[/season messaging/gi, 'official patch messaging'],
	[/season maps/gi, 'Arrakis region updates'],
	[/for ranked/gi, 'for spice runs'],
	[/in ranked/gi, 'in spice runs'],
	[/ranked loadout/gi, 'mission loadout'],
	[/ranked climb/gi, 'spice runs progression'],
	[/ranked grinders/gi, 'spice runs players'],
	[/ranked/gi, 'spice runs'],
	[/FNCS/gi, 'faction raid'],
	[/vbucks/gi, 'Platinum'],
	[/V-Bucks/gi, 'Platinum'],
	[/Bugha/gi, 'pro Tenno'],
	[/zero-build/gi, 'ability-only'],
	[/Battle Pass/gi, 'Prime Access'],
	[/Embark/gi, 'Funcom's],
	[/Epic patch/gi, 'Dune Awakening patch'],
	[/every Epic patch/gi, 'every Dune Awakening patch'],
	[/Epic health/gi, 'server status'],
	[/Cheats are flanking tools/gi, 'Cheats are third-party tools'],
	[/for Embark bans/gi, 'for game bans'],
	[/notice vehicles before/gi, 'spot elite enemies before'],
	[/mark chests worth/gi, 'mark resource nodes and caches worth'],
	[/players, loot, and vehicles/gi, 'enemies, pickups, and lockers'],
	[/loot, chests, and vehicles/gi, 'pickups, lockers, and caches'],
	[/see players, loot, vehicles/gi, 'see enemies, pickups, and lockers'],
	[/live matches/gi, 'live missions'],
	[/in BR —/gi, 'in co-op —'],
	[/\bBR loop\b/gi, 'mission loop'],
	[/\bBR players\b/gi, 'spice runs players'],
	[/\bBR stack\b/gi, 'full cheat stack'],
	[/\bin BR\b/gi, 'in missions'],
	[/in BR and/gi, 'in faction raids and'],
	[/ghostware rust/gi, 'ghostware dune-awakening'],
	[/rust wallhack/gi, 'dune awakening wallhack'],
	[/loot esp/gi, 'resource esp'],
	[/wipe-to-raid/gi, 'mission-to-rewards'],
	[/OW2/gi, 'Dune Awakening'],
	[/payload corners/gi, 'objective corners'],
	[/payload escorts/gi, 'raid waves'],
	[/per-hero/gi, 'per-weapon'],
	[/hitscan and projectile/gi, 'primaries and secondaries'],
	[/AK, SMG, and bolt/gi, 'lasguns, shotguns, and rifles'],
	[/AK, SMG ve bolt/gi, 'rifle, shotgun ve sniper'],
	[/Hammer AR/gi, 'Soma Prime'],
	[/hammer ar/gi, 'soma prime'],
	[/box fights/gi, 'close-quarters fights'],
	[/creative 1v1s/gi, 'Simulacrum testing'],
	[/Creative warmup/gi, 'Simulacrum warmup'],
	[/Creative Mode/gi, 'Simulacrum'],
	[/island codes/gi, 'training scenarios'],
	[/Reboot Van/gi, 'base defense objective'],
	[/control point/gi, 'base defense objective'],
	[/battle royale/gi, 'spice runs'],
	[/loot objectives/gi, 'multiplayer servers'],
	[/Player, vehicle, and ability/gi, 'Enemy, elite enemies, and ability'],
	[/vehicle threat cues/gi, 'elite enemies threat cues'],
	[/vehicle cues/gi, 'elite enemies cues'],
	[/vehicle pushes/gi, 'elite enemies pushes'],
	[/vehicle ESP/gi, 'elite enemies ESP'],
	[/vehicle and pickup/gi, 'elite enemies and pickup'],
	[/vehicle positions/gi, 'elite enemies positions'],
	[/base raids/gi, 'Arrakis region clears'],
	[/pub lobbies/gi, 'public servers'],
	[/pubs\b/gi, 'public servers'],
	[/playlists/gi, 'gameplay modes'],
	[/assault rifles/gi, 'rifles'],
	[/long-range AR /gi, 'long-range rifle '],
	[/AR beams/gi, 'rifle shots'],
	[/AR fights/gi, 'rifle fights'],
	[/AR and SMG/gi, 'lasgun and shotgun'],
	[/AR \//gi, 'rifle/'],
	[/ SMG /gi, ' shotgun '],
	[/SMGs/gi, 'shotguns'],
	[/SMG profile/gi, 'shotgun profile'],
	[/SMG profiles/gi, 'shotgun profiles'],
	[/SMG tracking/gi, 'shotgun tracking'],
	[/SMG pushes/gi, 'shotgun pushes'],
	[/SMG in/gi, 'shotgun in'],
	[/first AR/gi, 'first rifle'],
	[/Dune Awakening itself is published by/gi, 'Dune Awakening is developed and published by'],
	[/spice runs lobbies/gi, 'spice runs'],
	[/Arrakis exploration and spice runs play/gi, 'Arrakis and spice runs'],
	[/shows players, loot/gi, 'shows enemies, loot'],
	[/player ESP wallhack/gi, 'player ESP wallhack'],
	[/Player ESP/gi, 'Player ESP'],
	[/player ESP/gi, 'player ESP'],
	[/player outlines/gi, 'enemy outlines'],
	[/Player ESP boxes/gi, 'Player ESP boxes'],
	[/player boxes/gi, 'enemy boxes'],
	[/Player boxes/gi, 'Enemy boxes'],
	[/player ESP in/gi, 'player ESP in'],
	[/only need player ESP/gi, 'only need player ESP'],
	[/player ESP —/gi, 'player ESP —'],
	[/ability-only-meta-broken-aggressive-strategies/gi, 'dune-awakening-cheats-complete-guide-2026'],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'src/data/site.ts',
	'scripts/generate-blog-posts.mjs',
	'src/data/schema.ts',
	'src/components/HomeSeo.astro',
	'src/data/i18n/gallery-ui.ts',
	'src/data/dune-awakening.ts',
	'src/components/Gallery.astro',
	'src/data/page-sitemap.ts',
];

function applyRules(text) {
	let out = text;
	for (const [from, to] of RULES) {
		out = out.replace(from, to);
	}
	return out;
}

for (const rel of FILES) {
	const path = join(ROOT, rel);
	const next = applyRules(readFileSync(path, 'utf8'));
	writeFileSync(path, next);
	console.log('✓', rel);
}

// English UI image alts — canonical Dune Awakening terminology
const uiPath = join(ROOT, 'scripts/i18n-data/ui-strings-part1.mjs');
let ui = readFileSync(uiPath, 'utf8');
ui = ui.replace(
	/aimbotCombat: '[^']+'/,
	"aimbotCombat: 'Dune Awakening aimbot targeting a elite enemies during a open-world run'",
);
ui = ui.replace(
	/squadFight: '[^']+'/,
	"squadFight: 'Dune Awakening squad co-op fight with ESP and aimbot active in a faction raid'",
);
ui = ui.replace(
	/battleRoyale: '[^']+'/,
	"battleRoyale: 'Dune Awakening spice runs fight with undetected ESP overlays'",
);
ui = ui.replace(
	/battleRoyaleIsland: '[^']+'/,
	"battleRoyaleIsland: 'Dune Awakening cheats menu with per-weapon aimbot profiles'",
);
ui = ui.replace(
	/espWallhack: '[^']+'/,
	"espWallhack: 'Dune Awakening ESP overlay highlighting players and NPCs through walls'",
);
ui = ui.replace(
	/playerEsp: '[^']+'/,
	"playerEsp: 'Dune Awakening wallhack ESP boxes on players, NPCs, and elite enemies in spice runs'",
);
ui = ui.replace(
	/rebootFight: '[^']+'/,
	"rebootFight: 'Dune Awakening radar hack 2D minimap showing faction raid spawn routes in a faction raid'",
);
writeFileSync(uiPath, ui);
console.log('✓ scripts/i18n-data/ui-strings-part1.mjs (en image alts)');

// Normalize rebootFight alts across all locale UI files (remove BR leftovers)
for (const part of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	const partPath = join(ROOT, 'scripts/i18n-data', part);
	let partUi = readFileSync(partPath, 'utf8');
	partUi = partUi.replace(/rebootFight: '[^']*'/g, "rebootFight: 'Dune Awakening faction raid base defense fight with aimbot cheats active'");
	writeFileSync(partPath, partUi);
	console.log('✓ scripts/i18n-data/' + part);
}

console.log('Done. Run: npm run generate:i18n && node scripts/generate-blog-posts.mjs');
