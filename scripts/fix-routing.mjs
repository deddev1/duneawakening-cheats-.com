#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'dune-awakening-esp'],
	['warzone-aimbot', 'dune-awakening-aimbot'],
	['ricochet', 'battleye-bypass'],
	['undetected-warzone-cheats', 'undetected-dune-awakening-cheats'],
	['warzone-wallhack', 'dune-awakening-wallhack'],
	['warzone-radar-hack', 'dune-awakening-radar-hack'],
	['warzone-cheats-2026', 'dune-awakening-cheats-2026'],
	['ricochet-bypass', 'battleye-bypass-dune-awakening'],
	['warzonescheats.net', 'duneawakeningcheats.com'],
	['trucos-warzone', 'trucos-dune'],
	['triche-warzone', 'triche-dune'],
	['warzone-cheats', 'dune-awakening-cheats'],
	['cheats-warzone', 'cheats-dune'],
	['trucchi-warzone', 'trucchi-dune'],
	['cheaty-warzone', 'cheaty-dune'],
	['chity-warzone', 'chity-dune'],
	['chitov-warzone', 'chitov-dune'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-dune'],
	['hile-warzone', 'hile-dune'],
	['warzone-hile', 'dune-hile'],
	['warzone-esp-chity', 'dune-awakening-esp-chity'],
	['warzone-aimbot-chity', 'dune-awakening-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-dune-awakening-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-dune-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-dune-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-dune'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-dune'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-dune-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-dune'],
	['cheats-warzone-nedetectabile', 'cheats-dune-nedetectabile'],
	['basta-warzone-cheats', 'basta-dune-awakening-cheats'],
	['battleye-bypass-dune-awakening-trucos-warzone', 'battleye-bypass-dune-awakening-trucos-dune'],
	['battleye-bypass-dune-awakening-triche-warzone', 'battleye-bypass-dune-awakening-triche-dune'],
	['battleye-bypass-dune-awakening-cheats-warzone', 'battleye-bypass-dune-awakening-cheats-dune'],
	['battleye-bypass-dune-awakening-chity-warzone', 'battleye-bypass-dune-awakening-chity-dune'],
	['battleye-bypass-dune-awakening-warzone', 'battleye-bypass-dune-awakening'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'battleye-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich dune-awakening-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/dune-awakening-cheats-hero.webp',
	'dune-awakening-esp': '/images/dune-awakening-cheats-esp-wallhack.webp',
	'dune-awakening-aimbot': '/images/dune-awakening-cheats-aimbot-combat.webp',
	features: '/images/dune-awakening-cheats-package.webp',
	pricing: '/images/dune-awakening-cheats-cover.webp',
	setup: '/images/dune-awakening-loadout-builder.webp',
	updates: '/images/dune-awakening-header-art.webp',
	faq: '/images/dune-awakening-squad-fight.webp',
	support: '/images/dune-awakening-cheats-package.webp',
	undetected: '/images/dune-awakening-battle-royale-combat.webp',
	wallhack: '/images/dune-awakening-cheats-esp-wallhack.webp',
	radar: '/images/dune-awakening-player-esp.webp',
	'battleye-bypass': '/images/dune-awakening-reboot-van-fight.webp',
	'cheats-2026': '/images/dune-awakening-cheats-hero.webp',
	privacy: '/images/dune-awakening-cheats-aimbot-combat.webp',
	refund: '/images/dune-awakening-cheats-cover.webp',
	terms: '/images/dune-awakening-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'dune-awakening-esp', 'dune-awakening-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'dune-awakening-esp' | 'dune-awakening-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
