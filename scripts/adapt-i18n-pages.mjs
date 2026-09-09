#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'dune-awakening-esp'],
	['warzone-aimbot', 'dune-awakening-aimbot'],
	["'ricochet'", "'battleye-bypass'"],
	['ricochet-bypass', 'battleye-bypass-dune-awakening'],
	['undetected-warzone-cheats', 'undetected-dune-awakening-cheats'],
	['warzone-wallhack', 'dune-awakening-wallhack'],
	['warzone-radar-hack', 'dune-awakening-radar-hack'],
	['warzone-cheats-2026', 'dune-awakening-cheats-2026'],
	['call-of-duty-warzone-cheats', 'dune-awakening-cheats'],
	['call-of-duty-warzone', 'rust'],
	['Call of Duty: Warzone', 'Dune Awakening'],
	['Call of Duty Warzone', 'Dune Awakening'],
	['Warzone Cheats', 'Dune Awakening Cheats'],
	['Warzone cheats', 'Dune Awakening cheats'],
	['Warzone cheat', 'Dune Awakening cheat'],
	['Warzone ESP', 'Dune Awakening ESP'],
	['Warzone Aimbot', 'Dune Awakening Aimbot'],
	['Warzone wallhack', 'Dune Awakening wallhack'],
	['Warzone radar', 'Dune Awakening radar'],
	['Warzone firefights', 'Dune Awakening combat'],
	['Warzone combat', 'Dune Awakening combat'],
	['Warzone patches', 'Dune Awakening patches'],
	['Warzone updates', 'Dune Awakening updates'],
	['Warzone setup', 'Dune Awakening setup'],
	['Warzone license', 'Dune Awakening license'],
	['Warzone licenses', 'Dune Awakening licenses'],
	['Warzone sessions', 'Dune Awakening sessions'],
	['in Warzone', 'in Dune Awakening'],
	['for Warzone', 'for Dune Awakening'],
	['Warzone on', 'Dune Awakening on'],
	['Warzone or', 'Dune Awakening or'],
	['Warzone\'s', 'Dune Awakening\'s'],
	['Warzone ', 'Dune Awakening '],
	['Ricochet anti-cheat', 'Dune Awakening BattlEye anti-cheat (EAC)'],
	['Ricochet maintenance', 'anti-cheat maintenance'],
	['Ricochet bypass', 'anti-cheat bypass'],
	['Ricochet Bypass', 'BattlEye Bypass'],
	['Ricochet', 'Dune Awakening BattlEye anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['support@warzonescheats.net', 'support@duneawakeningcheats.com'],
	['Verdansk, Urzikstan, and Rebirth Island', 'loot objectives, extraction routes, and ranked seasons'],
	['Verdansk, Urzikstan and Rebirth Island', 'loot objectives, extraction routes and ranked seasons'],
	['gulag fights', 'map rotations'],
	['gulag fight', 'extraction route fight'],
	['gulag rounds', 'reenemy spawn rounds'],
	['gulag', 'control point'],
	['operators', 'players'],
	['operator', 'player'],
	['Operators', 'Players'],
	['Operator', 'Player'],
	['UAV', 'supply drop'],
	['Resurgence and spice runs', 'loot objectives and raids'],
	['BR and Resurgence', 'Arrakis exploration and spice runs'],
	['BR & Resurgence', 'PVE & PVP'],
	['loadout drops', 'loot chests'],
	['loadout drop', 'loot chest'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Embark\''],
	['Call of Duty combat pace', 'Dune Awakening combat pace'],
	['COD', 'Dune Awakening'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Dune Awakening Cheats',
	game: 'Dune Awakening',
	checkout: 'Zadeyo',
	eac: 'Dune Awakening BattlEye anti-cheat (EAC)',
};`,
);
phrases = phrases.replace(/KW\.ricochet/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'loot objectives, extraction routes, and ranked seasons'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
