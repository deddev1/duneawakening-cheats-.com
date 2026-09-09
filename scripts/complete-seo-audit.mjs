#!/usr/bin/env node
/**
 * Completes dune-awakening-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'dune-awakening-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'dune-awakening-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'dune-awakening-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'dune-awakening-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-dune-awakening-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'dune-awakening-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'dune-awakening-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'zomboid-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'rust'],
	[/battleye-bypass-dune-awakening-warzone/g, 'battleye-bypass-dune-awakening'],
	[/Call of Duty: Warzone/g, 'Dune Awakening'],
	[/Call of Duty Warzone/g, 'Dune Awakening'],
	[/Call of Duty/g, 'Dune Awakening'],
	[/Warzone Wallhack/g, 'Dune Awakening Wallhack'],
	[/Warzone Radar Hack/g, 'Dune Awakening Radar Hack'],
	[/Warzone Cheat Features/g, 'Dune Awakening Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Dune Awakening Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Dune Awakening Cheat Setup'],
	[/Warzone Cheat Status/g, 'Dune Awakening Cheat Status'],
	[/Warzone Cheat Support/g, 'Dune Awakening Cheat Support'],
	[/Warzone group fight/g, 'Dune Awakening group fight'],
	[/Warzone squad builder/g, 'Dune Awakening loadout builder'],
	[/Warzone store header/g, 'Dune Awakening header'],
	[/Warzone wasteland combat/g, 'Dune Awakening spice runs combat'],
	[/Warzone loadout builder/g, 'Dune Awakening loadout builder'],
	[/Warzone pricing/g, 'Dune Awakening pricing'],
	[/Warzone Dune Awakening BattlEye anti-cheat/g, 'Dune Awakening Dune Awakening BattlEye anti-cheat'],
	[/on Warzone/g, 'on Dune Awakening'],
	[/for Warzone/g, 'for Dune Awakening'],
	[/Warzone guides/g, 'Dune Awakening guides'],
	[/Warzone guide/g, 'Dune Awakening guide'],
	[/Warzone hileleri/g, 'Dune Awakening hileleri'],
	[/Warzone hile/g, 'Dune Awakening hile'],
	[/Warzone hileleri/g, 'Dune Awakening hileleri'],
	[/cheatów Warzone/g, 'cheatów Dune Awakening'],
	[/cheat Warzone/g, 'cheat Dune Awakening'],
	[/cheats Warzone/g, 'cheats Dune Awakening'],
	[/trucos Warzone/g, 'trucos Dune Awakening'],
	[/triche Warzone/g, 'triche Dune Awakening'],
	[/trucchi Warzone/g, 'trucchi Dune Awakening'],
	[/Wallhack Warzone/g, 'Dune Awakening Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Dune Awakening undetected'],
	[/cheats Warzone undetected/g, 'cheats Dune Awakening undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Dune Awakening and loot objectives'],
	[/Verdansk, Urzikstan/g, 'Dune Awakening, loot objectives'],
	[/spice runs and Resurgence/g, 'spice runs and loot objectives'],
	[/Activision's anti-cheat/g, "Embark' anti-cheat"],
	[/Activision anti-cheat/g, 'Embark anti-cheat'],
	[/Activision ships/g, 'Embark ships'],
	[/Activision security/g, 'Embark security'],
	[/Activision bans/g, 'Embark bans'],
	[/Activision/g, 'Embark'],
	[/ricochet/gi, 'eac'],
	[/Ricochet/g, 'Dune Awakening BattlEye anti-cheat (EAC)'],
	[/call-of-duty-warzone-cheats/g, 'dune-awakening-cheats'],
	[/call-of-duty-warzone/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Dune Awakening'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Dune Awakening BattlEye anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Dune Awakening Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Dune Awakening guides');
	content = content.replace(/Warzone guide/g, 'Dune Awakening guide');
	content = content.replace(/Warzone hileleri/g, 'Dune Awakening hileleri');
	content = content.replace(/Warzone hile/g, 'Dune Awakening hile');
	content = content.replace(/cheat Warzone/g, 'cheat Dune Awakening');
	content = content.replace(/cheats Warzone/g, 'cheats Dune Awakening');
	content = content.replace(/trucos Warzone/g, 'trucos Dune Awakening');
	content = content.replace(/triche Warzone/g, 'triche Dune Awakening');
	content = content.replace(/trucchi Warzone/g, 'trucchi Dune Awakening');
	content = content.replace(/cheatów Warzone/g, 'cheatów Dune Awakening');
	content = content.replace(/читов Warzone/g, 'читов Dune Awakening');
	content = content.replace(/читів Warzone/g, 'читів Dune Awakening');
	content = content.replace(/Warzoneチート/g, 'Dune Awakeningチート');
	content = content.replace(/Warzone 치트/g, 'Dune Awakening 치트');
	content = content.replace(/Warzone作弊/g, 'Dune Awakening作弊');
	content = content.replace(/Warzone rehberleri/g, 'Dune Awakening rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Dune Awakening gidsen');
	content = content.replace(/Warzone průvodce/g, 'Dune Awakening průvodce');
	content = content.replace(/Warzone guider/g, 'Dune Awakening guider');
	content = content.replace(/Warzone related/g, 'Dune Awakening related');
	content = content.replace(/Warzone ガイド/g, 'Dune Awakening ガイド');
	content = content.replace(/Warzone 가이드/g, 'Dune Awakening 가이드');
	content = content.replace(/Warzone指南/g, 'Dune Awakening指南');
	content = content.replace(/Warzone गाइड/g, 'Dune Awakening गाइड');
	content = content.replace(/Warzone panduan/g, 'Dune Awakening panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Dune Awakening คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Dune Awakening hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Dune Awakening Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
