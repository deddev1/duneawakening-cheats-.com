#!/usr/bin/env node
/** Final pass: fix remaining Warzone references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['warzoneImages', 'duneImages'],
	["from '../data/warzone'", "from '../data/dune'"],
	["from './warzone'", "from './dune'"],
	['/undetected-warzone-cheats/', '/dune-awakening-cheats/'],
	['/warzone-wallhack/', '/dune-awakening-wallhack/'],
	['/warzone-radar-hack/', '/dune-awakening-radar/'],
	['/ricochet-bypass/', '/dune-awakening-cheats/'],
	['/warzone-cheats-2026/', '/dune-awakening-cheats/'],
	['/warzone-aimbot/', '/dune-awakening-aimbot/'],
	['/warzone-esp/', '/dune-awakening-esp/'],
	['/warzone-hacks/', '/dune-awakening-esp/'],
	['Warzone Cheats', 'Dune Awakening Cheats'],
	['Warzone cheats', 'Dune Awakening cheats'],
	['Warzone wallhack', 'Dune Awakening wallhack'],
	['Warzone radar', 'Dune Awakening radar'],
	['Warzone Aimbot', 'Dune Awakening Aimbot'],
	['Warzone ESP', 'Dune Awakening ESP'],
	['Call of Duty: Warzone', 'Dune Awakening'],
	['Ricochet', 'Dune Awakening BattlEye anti-cheat (EAC)'],
	['ricochet', 'eac'],
	['warzonescheats.net', 'duneawakeningcheats.com'],
	['operatorEsp', 'playerEsp'],
	['gulagFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
