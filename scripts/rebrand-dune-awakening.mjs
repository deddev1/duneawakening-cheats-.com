#!/usr/bin/env node
/**
 * Bulk rebrand Project Zomboid Cheats → Dune Awakening Cheats (duneawakeningcheats.com)
 */
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'rebrand-dune-awakening.mjs',
	'rebrand-project-zomboid.mjs',
	'rebrand-warframe.mjs',
	'rebrand-war-thunder.mjs',
	'rebrand-overwatch.mjs',
	'rebrand-arc-raiders.mjs',
	'fix-pz-terminology.mjs',
	'fix-zomboid-rebrand.mjs',
]);

/** Longest / most specific replacements first. */
const REPLACEMENTS = [
	// Domain & email
	['https://www.projectzomboidcheats.com', 'https://duneawakeningcheats.com'],
	['https://projectzomboidcheats.com', 'https://duneawakeningcheats.com'],
	['http://www.projectzomboidcheats.com', 'https://duneawakeningcheats.com'],
	['http://projectzomboidcheats.com', 'https://duneawakeningcheats.com'],
	['www.projectzomboidcheats.com', 'www.duneawakeningcheats.com'],
	['projectzomboidcheats.com', 'duneawakeningcheats.com'],
	['support@projectzomboidcheats.com', 'support@duneawakeningcheats.com'],
	// Canonical URL paths
	['/project-zomboid-wallhack/', '/dune-awakening-wallhack/'],
	['/project-zomboid-aimbot/', '/dune-awakening-aimbot/'],
	['/project-zomboid-radar/', '/dune-awakening-radar/'],
	['/project-zomboid-esp/', '/dune-awakening-esp/'],
	['/project-zomboid-cheats/', '/dune-awakening-cheats/'],
	['/project-zomboid-wallhack', '/dune-awakening-wallhack'],
	['/project-zomboid-aimbot', '/dune-awakening-aimbot'],
	['/project-zomboid-radar', '/dune-awakening-radar'],
	['/project-zomboid-esp', '/dune-awakening-esp'],
	['/project-zomboid-cheats', '/dune-awakening-cheats'],
	// Assets & scripts
	['data-zomboid-cheats-video', 'data-dune-awakening-cheats-video'],
	['zomboid-cheats-bg-video.js', 'dune-awakening-cheats-bg-video.js'],
	['zomboid-survival.webp', 'dune-awakening-survival.webp'],
	['zomboid-esp-modules.webp', 'dune-awakening-esp-modules.webp'],
	['zomboid-esp-zombies.webp', 'dune-awakening-esp-enemies.webp'],
	['zomboid-esp-zombie-boxes.webp', 'dune-awakening-esp-enemy-boxes.webp'],
	['zomboid-esp-overlay.webp', 'dune-awakening-esp-overlay.webp'],
	['zomboid-aimbot-menu.webp', 'dune-awakening-aimbot-menu.webp'],
	['zomboid-aimbot-targeting-menu.webp', 'dune-awakening-aimbot-targeting-menu.webp'],
	['zomboid-radar-hack.webp', 'dune-awakening-radar-hack.webp'],
	['zomboid-radar-hack-minimap.webp', 'dune-awakening-radar-hack-minimap.webp'],
	['zomboid-cheats-hero.webp', 'dune-awakening-cheats-hero.webp'],
	['zomboid-cheats-video-poster.webp', 'dune-awakening-cheats-video-poster.webp'],
	['zomboid-cheats-preview.mp4', 'dune-awakening-cheats-preview.mp4'],
	['zomboid-esp-wallhack-overlay.webp', 'dune-awakening-esp-wallhack-overlay.webp'],
	['zomboid-aimbot-combat.webp', 'dune-awakening-aimbot-combat.webp'],
	['zomboid-horde-esp.webp', 'dune-awakening-pvp-esp.webp'],
	['zomboid-open-world-radar.webp', 'dune-awakening-open-world-radar.webp'],
	['zomboid-loot-pickup-esp.webp', 'dune-awakening-loot-pickup-esp.webp'],
	['zomboid-cheats-settings-panel.webp', 'dune-awakening-cheats-settings-panel.webp'],
	['zomboid-cheats-main-menu.webp', 'dune-awakening-cheats-main-menu.webp'],
	['zomboid-cheats-combat-esp.webp', 'dune-awakening-cheats-combat-esp.webp'],
	['zomboid-wingman.webp', 'dune-awakening-wingman.webp'],
	['/images/zomboid', '/images/dune-awakening'],
	['/videos/zomboid', '/videos/dune-awakening'],
	['/zomby', '/dune'],
	// Page IDs & slugs
	['project-zomboid-unlock-all', 'dune-awakening-unlock-all'],
	['project-zomboid-wallhack', 'dune-awakening-wallhack'],
	['project-zomboid-aimbot-hack', 'dune-awakening-aimbot-hack'],
	['project-zomboid-esp-hack', 'dune-awakening-esp-hack'],
	['zomboid-cheat-download', 'dune-awakening-cheat-download'],
	['project-zomboid-cheats-2026', 'dune-awakening-cheats-2026'],
	['zomboid-mod-menu', 'dune-awakening-mod-menu'],
	['project-zomboid-soft-aim', 'dune-awakening-soft-aim'],
	['best-project-zomboid-cheats', 'best-dune-awakening-cheats'],
	['undetected-project-zomboid-cheats-eac', 'undetected-dune-awakening-cheats-battleye'],
	['undetected-project-zomboid-cheats', 'undetected-dune-awakening-cheats'],
	['eac-bypass-project-zomboid', 'battleye-bypass-dune-awakening'],
	['project-zomboid-aimbot', 'dune-awakening-aimbot'],
	['project-zomboid-radar-hack', 'dune-awakening-radar-hack'],
	['project-zomboid-radar', 'dune-awakening-radar'],
	['project-zomboid-esp', 'dune-awakening-esp'],
	['project-zomboid-cheats', 'dune-awakening-cheats'],
	// Localized slug patterns
	['eac-bypass-zomboid-trucos-zomboid', 'battleye-bypass-dune-trucos-dune'],
	['eac-bypass-zomboid-triche-zomboid', 'battleye-bypass-dune-triche-dune'],
	['eac-bypass-zomboid-cheats-zomboid', 'battleye-bypass-dune-cheats-dune'],
	['eac-bypass-zomboid-chity-zomboid', 'battleye-bypass-dune-chity-dune'],
	['nedecektiruemye-chity-zomboid', 'nedecektiruemye-chity-dune'],
	['nedecektovani-chity-zomboid', 'nedecektovani-chity-dune'],
	['tespit-edilemeyen-zomboid-hileleri', 'tespit-edilemeyen-dune-hileleri'],
	['niewykrywalne-cheats-zomboid', 'niewykrywalne-cheats-dune'],
	['unentdeckte-project-zomboid-cheats', 'unentdeckte-dune-awakening-cheats'],
	['cheats-zomboid-indetectaveis', 'cheats-dune-indetectaveis'],
	['trucchi-zomboid-indetectabili', 'trucchi-dune-indetectabili'],
	['cheats-zomboid-nedetectabile', 'cheats-dune-nedetectabile'],
	['trucos-zomboid', 'trucos-dune'],
	['triche-zomboid', 'triche-dune'],
	['cheats-zomboid', 'cheats-dune'],
	['trucchi-zomboid', 'trucchi-dune'],
	['cheaty-zomboid', 'cheaty-dune'],
	['chity-zomboid', 'chity-dune'],
	['chitov-zomboid', 'chitov-dune'],
	['cheatow-zomboid', 'cheatow-dune'],
	['hile-zomboid', 'hile-dune'],
	['zomboid-hile', 'dune-hile'],
	['hacks-trucos-zomboid', 'hacks-trucos-dune'],
	['hacks-triche-zomboid', 'hacks-triche-dune'],
	['hacks-cheats-zomboid', 'hacks-cheats-dune'],
	['hacks-trucchi-zomboid', 'hacks-trucchi-dune'],
	['hacks-cheatow-zomboid', 'hacks-cheatow-dune'],
	['haksy-chity-zomboid', 'haksy-chity-dune'],
	['zomboid-hile-hacks', 'dune-hile-hacks'],
	// Review slugs
	['project-zomboid-soft-aim-review', 'dune-awakening-soft-aim-review'],
	['project-zomboid-esp-realistic-review', 'dune-awakening-esp-realistic-review'],
	['project-zomboid-esp-survival-review', 'dune-awakening-esp-survival-review'],
	['zomboid-cloud-dma-review', 'dune-cloud-dma-review'],
	['zomboid-controller-aimbot-review', 'dune-controller-aimbot-review'],
	['zomboid-cheat-setup-review', 'dune-cheat-setup-review'],
	['zomboid-loot-esp-review', 'dune-loot-esp-review'],
	['zomboid-aimbot-survival-review', 'dune-aimbot-survival-review'],
	['project-zomboid-aimbot-realistic-review', 'dune-awakening-aimbot-realistic-review'],
	['zomboid-radar-hack-review', 'dune-radar-hack-review'],
	['project-zomboid-radar-hack-review', 'dune-awakening-radar-hack-review'],
	['zomboid-anti-cheat-update-review', 'dune-anti-cheat-update-review'],
	['zomboid-sniper-aimbot-review', 'dune-sniper-aimbot-review'],
	['zomboid-monthly-sub-review', 'dune-monthly-sub-review'],
	['zomboid-lifetime-key-review', 'dune-lifetime-key-review'],
	['zomboid-squad-play-review', 'dune-squad-play-review'],
	// Blog slugs
	['project-zomboid-cheats-complete-guide-2026', 'dune-awakening-cheats-complete-guide-2026'],
	['project-zomboid-cheats-buyers-guide', 'dune-awakening-cheats-buyers-guide'],
	['project-zomboid-cheats-2026-whats-new', 'dune-awakening-cheats-2026-whats-new'],
	['project-zomboid-aimbot-settings-guide', 'dune-awakening-aimbot-settings-guide'],
	['project-zomboid-esp-wallhack-explained', 'dune-awakening-esp-wallhack-explained'],
	['project-zomboid-cheats-vs-cheatvault-comparison', 'dune-awakening-cheats-vs-cheatvault-comparison'],
	['voidcheats-vs-project-zomboid-cheats-two-week-test', 'voidcheats-vs-dune-awakening-cheats-two-week-test'],
	['project-zomboid-cheats-vs-ghostware-features-pricing', 'dune-awakening-cheats-vs-ghostware-features-pricing'],
	['project-zomboid-survival-beginners-guide', 'dune-awakening-survival-beginners-guide'],
	['project-zomboid-loot-farming-guide', 'dune-awakening-spice-farming-guide'],
	['project-zomboid-zombie-types-guide', 'dune-awakening-faction-guide'],
	['project-zomboid-gameplay-modes-explained', 'dune-awakening-gameplay-modes-explained'],
	['project-zomboid-patch-notes-guide', 'dune-awakening-patch-notes-guide'],
	['project-zomboid-new-player-guide', 'dune-awakening-new-player-guide'],
	['project-zomboid-radar-cheats-guide', 'dune-awakening-radar-cheats-guide'],
	['project-zomboid-cheats-setup-windows', 'dune-awakening-cheats-setup-windows'],
	['project-zomboid-cheats-monthly-vs-lifetime', 'dune-awakening-cheats-monthly-vs-lifetime'],
	// Native guide order
	['project-zomboid-new-player-guide', 'dune-awakening-new-player-guide'],
	['project-zomboid-gameplay-modes-explained', 'dune-awakening-gameplay-modes-explained'],
	['project-zomboid-zombie-types-guide', 'dune-awakening-faction-guide'],
	['project-zomboid-loot-farming-guide', 'dune-awakening-spice-farming-guide'],
	['project-zomboid-survival-beginners-guide', 'dune-awakening-survival-beginners-guide'],
	// Checkout & external
	['/products/project-zomboid-cheats', '/products/dune-awakening-cheats'],
	['/products/project-zomboid', '/products/dune-awakening'],
	['https://www.projectzomboid.com/', 'https://duneawakening.com/'],
	['https://projectzomboid.com/', 'https://duneawakening.com/'],
	['https://projectzomboid.com/blog/', 'https://duneawakening.com/news/'],
	['https://projectzomboid.com/game-guide', 'https://duneawakening.com/'],
	['https://store.steampowered.com/app/108600/Project_Zomboid/', 'https://store.steampowered.com/app/1172710/Dune_Awakening/'],
	['https://steamcommunity.com/app/108600', 'https://steamcommunity.com/app/1172710'],
	['https://pzwiki.net/wiki/Main_Page', 'https://duneawakening.fandom.com/wiki/Dune:_Awakening_Wiki'],
	['https://pzwiki.net/wiki/', 'https://duneawakening.fandom.com/wiki/'],
	['projectzomboid.com', 'duneawakening.com'],
	['pzwiki.net', 'duneawakening.fandom.com'],
	// Game lore → Dune Awakening
	['Knox County, Riverside, and West Point', 'Arrakis, the Deep Desert, and Harko Village'],
	['Knox County and Riverside', 'Arrakis and the Deep Desert'],
	['Knox County and West Point', 'Arrakis and Harko Village'],
	['Knox County, Riverside', 'Arrakis, the Deep Desert'],
	['Knox County', 'Arrakis'],
	['Muldraugh, West Point, and Riverside', 'Harko Village, Hagga Basin, and the Deep Desert'],
	['Muldraugh, West Point', 'Harko Village and Hagga Basin'],
	['West Point', 'Harko Village'],
	['Riverside', 'Hagga Basin'],
	['Rosewood', 'the Shield Wall'],
	['Survival & horde presets', 'PvP & spice-harvest presets'],
	['survival runs and horde events', 'open-world runs and faction raids'],
	['survival and horde presets', 'open-world and PvP presets'],
	['survival runs, horde events, and Knox County exploration', 'open-world runs, faction raids, and Arrakis exploration'],
	['survival runs, horde events, and Arrakis exploration', 'open-world runs, faction raids, and Arrakis exploration'],
	['survival runs, horde events, and Arrakis', 'open-world runs, faction raids, and Arrakis'],
	['survival runs and horde events', 'open-world runs and faction raids'],
	['survival runs and Arrakis exploration', 'open-world runs and Arrakis exploration'],
	['survival runs and open world', 'open-world runs and PvP'],
	['survival runs', 'open-world runs'],
	['survival run', 'open-world run'],
	['horde density', 'PvP encounter density'],
	['horde events and hardcore modifiers', 'faction raids and hardcore modifiers'],
	['survival and loot runs', 'survival and spice runs'],
	['Arrakis loot runs', 'Arrakis spice runs'],
	['survival pressure', 'desert survival pressure'],
	['horde modifiers', 'raid modifiers'],
	['horde modifier stacks', 'raid modifier stacks'],
	['horde combat', 'PvP combat'],
	['horde events and Arrakis exploration', 'faction raids and Arrakis exploration'],
	['horde events and', 'faction raids and'],
	['horde events', 'faction raids'],
	['horde event', 'faction raid'],
	['The Indie Stone Project Zomboid status', 'Funcom Dune Awakening status'],
	['The Indie Stone Project Zomboid', 'Funcom Dune Awakening'],
	['The Indie Stone and Project Zomboid patches', 'Funcom and Dune Awakening patches'],
	['The Indie Stone and', 'Funcom and'],
	['The Indie Stone', 'Funcom'],
	['Project Zomboid patch notes', 'Dune Awakening patch notes'],
	['Project Zomboid anti-cheat', 'Dune Awakening BattlEye anti-cheat'],
	['Project Zomboid update log', 'Dune Awakening update log'],
	['Project Zomboid patches', 'Dune Awakening patches'],
	['Project Zomboid patch', 'Dune Awakening patch'],
	['Project Zomboid live updates', 'Dune Awakening live updates'],
	['PZ Wiki', 'Dune Awakening Wiki'],
	['Project Zomboid Game Guides', 'Dune Awakening Game Guides'],
	['Zombie, survivor & loot ESP', 'Player, NPC & spice ESP'],
	['zombies, survivors, and special infected', 'players, NPCs, and elite enemies'],
	['zombie walkers, runners, and crawlers', 'enemy players, NPCs, and sandworm threats'],
	['zombies and survivors', 'players and NPCs'],
	['special infected', 'elite enemies'],
	['Boss zombie & special infected ESP', 'Boss NPC & elite enemy ESP'],
	['special infected, boss zombies, and horde leaders', 'elite enemies, boss NPCs, and faction leaders'],
	['special infected and boss zombies', 'elite enemies and boss NPCs'],
	['boss zombie fights', 'boss NPC encounters'],
	['boss zombies', 'boss NPCs'],
	['Boss zombie', 'Boss NPC'],
	['zombie or survivor', 'player or NPC'],
	['zombie aggro timers', 'enemy aggro timers'],
	['zombies and survivors', 'players and NPCs'],
	['zombie or survivor', 'player or NPC'],
	['Player & zombie ESP', 'Player & NPC ESP'],
	['Zombie ESP', 'Player ESP'],
	['zombie ESP', 'player ESP'],
	['Zombie, survivor, and loot ESP', 'Player, NPC, and loot ESP'],
	['Zombie, survivor, and', 'Player, NPC, and'],
	['Zombie bounding boxes', 'Player bounding boxes'],
	['Zombie facing indicator', 'Enemy facing indicator'],
	['Zombie ESP boxes', 'Player ESP boxes'],
	['zombie hordes', 'faction raids'],
	['zombie horde', 'faction raid'],
	['horde pushes', 'faction pushes'],
	['horde push', 'faction push'],
	['horde waves', 'raid waves'],
	['horde wave', 'raid wave'],
	['horde defense', 'base defense'],
	['horde and survival', 'PvP and survival'],
	['horde events', 'faction raids'],
	['loot runs', 'spice runs'],
	['loot containers', 'resource caches'],
	['Loot & container markers', 'Spice & resource markers'],
	['loot and container markers', 'spice and resource markers'],
	['containers and crates', 'resource nodes and caches'],
	['melee weapons, firearms, and shotguns', 'lasguns, melee blades, and heavy weapons'],
	['pistols, shotguns, and rifles', 'lasguns, shotguns, and rifles'],
	['pistol, shotgun, and rifle profiles', 'lasgun, shotgun, and rifle profiles'],
	['pistol and shotgun', 'lasgun and shotgun'],
	['medical supplies', 'stillsuit repair kits'],
	['medical supply', 'stillsuit repair kit'],
	['medical supply markers', 'health kit markers'],
	['Health orb & pickup ESP', 'Health & spice pickup ESP'],
	['health and loot markers', 'health and spice markers'],
	['building walls', 'base walls'],
	['building cover', 'sand cover'],
	['building clears', 'base raids'],
	['safehouse perimeters', 'base perimeters'],
	['safehouse perimeter', 'base perimeter'],
	['safehouse and survival objective', 'base and survival objective'],
	['safehouse zones', 'base zones'],
	['hold a safehouse perimeter', 'hold a base perimeter'],
	['horde clusters', 'enemy clusters'],
	['zombie spawn routes', 'enemy patrol routes'],
	['horde spawn', 'enemy spawn'],
	['map zones', 'Arrakis regions'],
	['map zone', 'Arrakis region'],
	['live Project Zomboid sessions', 'live Dune Awakening sessions'],
	['Project Zomboid Intel', 'Dune Awakening Intel'],
	['project zomboid intel', 'dune awakening intel'],
	['Project Zomboid mixes', 'Dune Awakening mixes'],
	['Project Zomboid punishes', 'Dune Awakening punishes'],
	['Project Zomboid sessions punish', 'Dune Awakening sessions punish'],
	['Project Zomboid firefights', 'Dune Awakening combat'],
	['Project Zomboid combat pace', 'Dune Awakening combat pace'],
	['Project Zomboid combat', 'Dune Awakening combat'],
	['Project Zomboid sessions', 'Dune Awakening sessions'],
	['Project Zomboid on Windows PC', 'Dune Awakening on Windows PC'],
	['Project Zomboid on Steam', 'Dune Awakening on Steam'],
	['Project Zomboid Steam community hub', 'Dune Awakening Steam community hub'],
	['Official Project Zomboid website', 'Official Dune Awakening website'],
	['Project Zomboid patch notes & news', 'Dune Awakening patch notes & news'],
	['Project Zomboid wallhack', 'Dune Awakening wallhack'],
	['Project Zomboid Wallhack', 'Dune Awakening Wallhack'],
	['Project Zomboid radar', 'Dune Awakening radar'],
	['Project Zomboid Radar', 'Dune Awakening Radar'],
	['Project Zomboid aimbot', 'Dune Awakening aimbot'],
	['Project Zomboid Aimbot', 'Dune Awakening Aimbot'],
	['Project Zomboid esp', 'Dune Awakening esp'],
	['Project Zomboid ESP', 'Dune Awakening ESP'],
	['Project Zomboid cheats', 'Dune Awakening cheats'],
	['Project Zomboid Cheats', 'Dune Awakening Cheats'],
	['Project Zomboid cheat', 'Dune Awakening cheat'],
	['Project Zomboid hack', 'Dune Awakening cheat'],
	['Project Zomboid hacks', 'Dune Awakening cheats'],
	['Project Zomboid Hacks', 'Dune Awakening Cheats'],
	['Project Zomboid game guides', 'Dune Awakening game guides'],
	['Project Zomboid game guide', 'Dune Awakening game guide'],
	['Project Zomboid zombie types', 'Dune Awakening factions'],
	['Project Zomboid gameplay modes', 'Dune Awakening gameplay modes'],
	['undetected project zomboid cheats', 'undetected dune awakening cheats'],
	['project zomboid wallhack', 'dune awakening wallhack'],
	['project zomboid aimbot', 'dune awakening aimbot'],
	['project zomboid esp', 'dune awakening esp'],
	['project zomboid cheats 2026', 'dune awakening cheats 2026'],
	['best project zomboid cheats', 'best dune awakening cheats'],
	['Project Zomboid', 'Dune Awakening'],
	['project-zomboid', 'dune-awakening'],
	// Anti-cheat: EAC → BattlEye for Dune Awakening
	['eac-bypass', 'battleye-bypass'],
	['EAC bypass', 'BattlEye bypass'],
	['EAC Bypass', 'BattlEye Bypass'],
	['Easy Anti-Cheat', 'BattlEye'],
	['anti-cheat explainer', 'BattlEye explainer'],
	// Project identifiers
	['project-name=projectzomboidcheats', 'project-name=duneawakeningcheats'],
	['name = "projectzomboidcheats"', 'name = "duneawakeningcheats"'],
	['"project-zomboid-cheats"', '"dune-awakening-cheats"'],
	['Buy Project Zomboid Cheats', 'Buy Dune Awakening Cheats'],
	// Middleware hosts
	["const APEX_HOST = 'projectzomboidcheats.com'", "const APEX_HOST = 'duneawakeningcheats.com'"],
	["const WWW_HOST = 'www.projectzomboidcheats.com'", "const WWW_HOST = 'www.duneawakeningcheats.com'"],
	["const CANONICAL_ORIGIN = 'https://projectzomboidcheats.com'", "const CANONICAL_ORIGIN = 'https://duneawakeningcheats.com'"],
	// seo.ts helper
	["if (lead.toLowerCase().includes('project zomboid'))", "if (lead.toLowerCase().includes('dune awakening'))"],
	['return `Project Zomboid cheats — ${lead}`', 'return `Dune Awakening cheats — ${lead}`'],
	['optimized for projectzomboidcheats.com', 'optimized for duneawakeningcheats.com'],
	['| projectzomboidcheats.com', '| duneawakeningcheats.com'],
	['| Project Zomboid Cheats', '| Dune Awakening Cheats'],
	["shortName: 'PZ'", "shortName: 'DA'"],
	["game: 'Project Zomboid'", "game: 'Dune Awakening'"],
	['Project Zomboid Cheats logo', 'Dune Awakening Cheats logo'],
	['zomboidImages', 'duneImages'],
	['zomboidHeroVideo', 'duneHeroVideo'],
	['zomboidVideo', 'duneVideo'],
	['zomboidHeroImage', 'duneHeroImage'],
	['zomboidScreenshots', 'duneScreenshots'],
	['ZomboidScreenshot', 'DuneScreenshot'],
	['zomboidAuthorityLinks', 'duneAuthorityLinks'],
	['ZomboidAuthorityLinks', 'DuneAuthorityLinks'],
	['getNativeZomboidGuides', 'getNativeDuneGuides'],
	["from './zomboid'", "from './dune'"],
	["from '../data/zomboid'", "from '../data/dune'"],
	['name = "project-zomboid-cheats-com"', 'name = "dune-awakening-cheats-com"'],
	['name = "project-zomboid-cheats-net"', 'name = "dune-awakening-cheats-net"'],
	['name = "project-zomboid-cheats"', 'name = "dune-awakening-cheats"'],
	// Remaining zomboid asset paths
	['zomboid-cheats-hero', 'dune-awakening-cheats-hero'],
	['/images/guides/project-zomboid.webp', '/images/guides/dune-awakening.webp'],
	["'project-zomboid'", "'dune-awakening'"],
	// Survival palette comment
	['Project Zomboid survival palette', 'Dune Awakening desert palette'],
];

const PAGE_DIR_RENAMES = [
	['project-zomboid-cheats', 'dune-awakening-cheats'],
	['project-zomboid-esp', 'dune-awakening-esp'],
	['project-zomboid-aimbot', 'dune-awakening-aimbot'],
	['project-zomboid-wallhack', 'dune-awakening-wallhack'],
	['project-zomboid-radar', 'dune-awakening-radar'],
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

function apply(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (result.includes(from)) result = result.split(from).join(to);
	}
	return result;
}

function renamePageDirs() {
	for (const [from, to] of PAGE_DIR_RENAMES) {
		const src = join(root, 'src', 'pages', from);
		const dest = join(root, 'src', 'pages', to);
		if (existsSync(src)) {
			renameSync(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		}
	}
}

function renameDataFile() {
	const src = join(root, 'src', 'data', 'zomboid.ts');
	const dest = join(root, 'src', 'data', 'dune.ts');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed src/data/zomboid.ts → dune.ts');
	} else if (existsSync(dest)) {
		let content = readFileSync(dest, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
	}
}

function renameComponent() {
	const src = join(root, 'src', 'components', 'ZomboidAuthorityLinks.astro');
	const dest = join(root, 'src', 'components', 'DuneAuthorityLinks.astro');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed ZomboidAuthorityLinks.astro → DuneAuthorityLinks.astro');
	}
}

function renameBgVideoScript() {
	const src = join(root, 'public', 'scripts', 'zomboid-cheats-bg-video.js');
	const dest = join(root, 'public', 'scripts', 'dune-awakening-cheats-bg-video.js');
	if (existsSync(src)) {
		let content = readFileSync(src, 'utf8');
		content = apply(content);
		writeFileSync(dest, content);
		unlinkSync(src);
		console.log('Renamed zomboid-cheats-bg-video.js → dune-awakening-cheats-bg-video.js');
	}
}

function transformFiles() {
	const files = walk(root);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXTENSIONS.has(extname(file))) continue;
		if (SKIP_FILES.has(file.split(/[/\\]/).pop())) continue;
		const original = readFileSync(file, 'utf8');
		const updated = apply(original);
		if (updated !== original) {
			writeFileSync(file, updated);
			changed++;
		}
	}
	console.log(`\nTransformed ${changed} files`);
}

function patchMiddlewareRedirects() {
	const file = join(root, 'functions', '_middleware.js');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);

	if (!content.includes("'projectzomboidcheats.com'")) {
		content = content.replace(
			"'www.fortnitecheats.com',",
			"'www.fortnitecheats.com',\n\t'projectzomboidcheats.com',\n\t'www.projectzomboidcheats.com',",
		);
	}

	const extraRedirects = {
		'/project-zomboid-cheats': '/dune-awakening-cheats/',
		'/project-zomboid-cheats/': '/dune-awakening-cheats/',
		'/project-zomboid-esp': '/dune-awakening-esp/',
		'/project-zomboid-esp/': '/dune-awakening-esp/',
		'/project-zomboid-aimbot': '/dune-awakening-aimbot/',
		'/project-zomboid-aimbot/': '/dune-awakening-aimbot/',
		'/project-zomboid-wallhack': '/dune-awakening-wallhack/',
		'/project-zomboid-wallhack/': '/dune-awakening-wallhack/',
		'/project-zomboid-radar': '/dune-awakening-radar/',
		'/project-zomboid-radar/': '/dune-awakening-radar/',
	};
	for (const [from, to] of Object.entries(extraRedirects)) {
		const key = `'${from}': '${to}'`;
		if (!content.includes(key)) {
			content = content.replace(
				'const PATH_REDIRECTS = {',
				`const PATH_REDIRECTS = {\n\t'${from}': '${to}',`,
			);
		}
	}
	writeFileSync(file, content);
	console.log('Patched functions/_middleware.js redirects');
}

function patchPublicRedirects() {
	const file = join(root, 'public', '_redirects');
	if (!existsSync(file)) return;
	let content = readFileSync(file, 'utf8');
	content = apply(content);
	const lines = [
		'/project-zomboid-cheats /dune-awakening-cheats/ 301',
		'/project-zomboid-cheats/ /dune-awakening-cheats/ 301',
		'/project-zomboid-esp /dune-awakening-esp/ 301',
		'/project-zomboid-esp/ /dune-awakening-esp/ 301',
		'/project-zomboid-aimbot /dune-awakening-aimbot/ 301',
		'/project-zomboid-aimbot/ /dune-awakening-aimbot/ 301',
		'/project-zomboid-wallhack /dune-awakening-wallhack/ 301',
		'/project-zomboid-wallhack/ /dune-awakening-wallhack/ 301',
		'/project-zomboid-radar /dune-awakening-radar/ 301',
		'/project-zomboid-radar/ /dune-awakening-radar/ 301',
	];
	for (const line of lines) {
		if (!content.includes(line.split(' ')[0])) {
			content += `\n${line}`;
		}
	}
	writeFileSync(file, content);
	console.log('Patched public/_redirects');
}

console.log('Rebranding Project Zomboid Cheats → Dune Awakening Cheats...\n');
renamePageDirs();
renameDataFile();
renameComponent();
renameBgVideoScript();
transformFiles();
patchMiddlewareRedirects();
patchPublicRedirects();
console.log('\nRebrand complete. Next: npm run generate:i18n && npm run generate:blog');
