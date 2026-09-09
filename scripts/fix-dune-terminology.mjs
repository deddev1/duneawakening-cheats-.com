#!/usr/bin/env node
/** Bulk-replace leftover Project Zomboid / zombie terminology for Dune Awakening. */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'rebrand-dune-awakening.mjs',
	'rebrand-project-zomboid.mjs',
	'fix-dune-terminology.mjs',
	'fix-pz-terminology.mjs',
]);

const REPLACEMENTS = [
	["from '../zomboid'", "from '../dune'"],
	["from './zomboid'", "from './dune'"],
	['official Project\n\t\t\t\t\t\tZomboid Wiki', 'official Dune Awakening Wiki'],
	['official Project Zomboid Wiki', 'official Dune Awakening Wiki'],
	['Zomboid Wiki and Funcom', 'Dune Awakening Wiki and Funcom'],
	['zombie types, and patch', 'factions, and patch'],
	['zombie types, game modes', 'factions, game modes'],
	['loot routes, zombie types', 'spice routes, factions'],
	['Zombie Types Explained', 'Factions Explained'],
	['Zombie Types: Walkers, Crawlers & Sprinters', 'Factions: Atreides, Harkonnen & Smugglers'],
	['zombie types guide', 'faction guide'],
	['zombie types', 'factions'],
	['Zombie Types', 'Factions'],
	['zombie type', 'enemy type'],
	['zombie behavior', 'faction behavior'],
	['zombie flanks', 'enemy flanks'],
	['zombie-only', 'enemy-only'],
	['zombie and loot markers', 'enemy and loot markers'],
	['zombie and player', 'enemy and player'],
	['zombie boxes', 'enemy boxes'],
	['zombie skeleton', 'enemy skeleton'],
	['zombie health', 'enemy health'],
	['zombie damage', 'enemy damage'],
	['zombie density', 'enemy density'],
	['zombie populations', 'enemy populations'],
	['zombie aggression', 'enemy aggression'],
	['zombie speed', 'enemy speed'],
	['zombie counts', 'enemy counts'],
	['zombie respawn', 'enemy respawn'],
	['zombie pressure', 'PvP pressure'],
	['zombie Wiki', 'Dune Awakening Wiki'],
	['wiki/Zombie', 'wiki/Enemies'],
	['horde of zombies', 'faction raid'],
	['wandering horde', 'wandering patrol'],
	['off-screen horde movement', 'off-screen enemy movement'],
	['noise pulled zombies', 'noise pulled enemies'],
	['hide zombies around corners', 'hide enemies around corners'],
	['zombies around corners', 'enemies around corners'],
	['zombies approach', 'enemies approach'],
	['zombies and survivors', 'players and NPCs'],
	['zombies and players', 'enemies and players'],
	['zombies, survivors', 'players, NPCs'],
	['fighting zombies', 'fighting enemies'],
	['spotting zombies', 'spotting enemies'],
	['repérer zombies', 'repérer les ennemis'],
	['tough zombies', 'tough enemies'],
	['Most zombies shamble', 'Most NPCs patrol slowly'],
	['zombie page', 'enemy page'],
	['zombie boxes, loot markers', 'enemy boxes, spice markers'],
	['survivor fighting zombies', 'player fighting enemies in the Deep Desert'],
	['survivor looting supplies while zombies approach', 'player harvesting spice while enemies approach'],
	['survivor near abandoned buildings', 'player near abandoned structures'],
	['survivor with a machete', 'player with a crysknife'],
	['survivor fighting zombies on Arrakis streets with melee and firearms', 'player fighting enemies on Arrakis dunes with lasguns and blades'],
	['survivor looting supplies while zombies approach in Arrakis', 'player harvesting spice while enemies approach in the Deep Desert'],
	['horde of zombies surrounding a survivor near abandoned buildings', 'faction raid surrounding a player near desert outposts'],
	['Muldraugh,', ''],
	['Muldraugh ', ''],
	['Muldraugh', 'Hagga Basin'],
	['Muldraugh block', 'Hagga Basin outpost'],
	['for Muldraugh Harko Village', 'for Harko Village and Hagga Basin'],
	['/wiki/Knox_Country', '/wiki/Arrakis'],
	['/wiki/Survivor_Mode', '/wiki/Survival'],
	['/wiki/Apocalypse', '/wiki/Hardcore_Mode'],
	['/wiki/Game_modes', '/wiki/Game_Modes'],
	['/wiki/Sandbox', '/wiki/Custom_Servers'],
	['/wiki/Multiplayer', '/wiki/Multiplayer'],
	['Builder or Survivor first', 'Solo or Co-op first'],
	['Builder disables zombie aggression for base construction', 'Creative mode disables enemy aggression for base construction'],
	['Apocalypse is the default survival experience — death is permanent and zombies respawn over time', 'Hardcore is the default survival experience — death has consequences and enemies respawn over time'],
	['Survivor eases early difficulty', 'Solo mode eases early difficulty'],
	['infection mortality', 'thirst mortality'],
	['injury and infection', 'injury and dehydration'],
	['free-to-play zombie survival sandbox', 'open-world survival MMO'],
	['survive zombie waves while watching for player raids', 'survive sandstorms while watching for faction raids'],
	['Unturned zombie survival sandbox world exploration', 'Dune Awakening open-world desert survival exploration'],
	['zomboid-wingman-source.jpg', 'dune-awakening-wingman-source.jpg'],
	['duneawakening.com/game-guide', 'duneawakening.com'],
	['duneawakening.com/blog/', 'duneawakening.com/news/'],
	// PZ / Rust / Fortnite leftovers → Dune Awakening
	['survivor looting supplies while enemies approach in Arrakis', 'player harvesting spice while enemies approach in the Deep Desert'],
	['survivor looting supplies while enemies approach', 'player harvesting spice while enemies approach'],
	['survivor fighting enemies on Arrakis streets', 'player fighting enemies on Arrakis dunes'],
	['walkers, runners, crawlers, and sprinters', 'players, NPCs, faction allies, and rivals'],
	['walkers, crawlers, sprinters', 'Atreides, Harkonnen, Smugglers'],
	['walker, crawler, sprinter', 'faction player'],
	['walkers', 'patrol NPCs'],
	['crawlers', 'sand ambushers'],
	['sprinters', 'fast PvP players'],
	['shamblers', 'slow NPC patrols'],
	['horde leaders', 'faction leaders'],
	['late-game hordes', 'late-game PvP'],
	['during hordes', 'during faction raids'],
	['hordes around corners', 'rivals around dunes'],
	['horde defense', 'base defense'],
	['horde and survival', 'PvP and survival'],
	['infected fights', 'PvP fights'],
	['tough infected', 'tough PvP targets'],
	['infection', 'dehydration'],
	['infection rules', 'survival rules'],
	['Apocalypse difficulty', 'hardcore survival'],
	['Apocalypse sandbox', 'hardcore official servers'],
	['Apocalypse', 'hardcore mode'],
	['Sandbox, Survivor', 'Solo, Co-op'],
	['Sandbox', 'Custom servers'],
	['Survivor mode', 'solo survival'],
	['Builder or Survivor', 'Solo or Co-op'],
	['Builder disables enemy aggression', 'Creative mode disables enemy aggression'],
	['Builder or Survivor', 'Solo or Co-op'],
	['barricaded room', 'reinforced base'],
	['barricade upgrade', 'base wall upgrade'],
	['barricades', 'base walls'],
	['carpentry', 'base building'],
	['foraging or farming', 'crafting and harvesting'],
	['canned food', 'stored water'],
	['gun stores or malls', 'faction outposts'],
	['gun store', 'weapon cache'],
	['police stations', 'faction outposts'],
	['convenience stores', 'supply caches'],
	['residential kitchens', 'outpost kitchens'],
	['M16 rifle', 'lasgun'],
	['M16', 'lasgun'],
	['Build 41', 'launch season'],
	['sandbox population settings', 'official server population'],
	['sandbox settings', 'server settings'],
	['sandbox setting', 'server setting'],
	['sandbox practice', 'private server practice'],
	['game modes, survival tips, zombie types', 'game modes, survival tips, factions'],
	['zombie types', 'factions'],
	['loot routes', 'spice routes'],
	['loot farming', 'spice farming'],
	['loot trip', 'harvest run'],
	['loot radius', 'harvest radius'],
	['loot exploration', 'spice harvesting'],
	['safe house', 'base'],
	['safe houses', 'bases'],
	['new survivors', 'new players'],
	['survivors', 'players'],
	['survivor', 'player'],
	['towns and roads', 'regions and routes'],
	['neighboring towns', 'neighboring regions'],
	['spawn town', 'starting region'],
	['town layout', 'region layout'],
	['each town', 'each region'],
	['familiar block', 'familiar Hagga Basin route'],
	['tree line', 'dune line'],
	['search a kitchen', 'harvest spice'],
	['the house', 'your base'],
	['zombies, survivors, and loot', 'players, NPCs, and spice'],
];

function walk(dir, files = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

let changed = 0;
for (const file of walk(ROOT)) {
	if (!TEXT_EXTENSIONS.has(extname(file))) continue;
	if (SKIP_FILES.has(file.split(/[/\\]/).pop())) continue;
	const original = readFileSync(file, 'utf8');
	let result = original;
	for (const [from, to] of REPLACEMENTS) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	if (result !== original) {
		writeFileSync(file, result);
		changed++;
	}
}

console.log(`Fixed terminology in ${changed} files`);
