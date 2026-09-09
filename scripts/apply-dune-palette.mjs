import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('src');
const skip = new Set([
	'global.css',
	'footer.css',
	'prose.css',
	'inspira-hero-cta.css',
]);

const replacements = [
	[/rgba\(104, 112, 82/g, 'rgba(var(--bronze-rgb)'],
	[/rgba\(210, 174, 118/g, 'rgba(var(--gold-hover-rgb)'],
	[/rgba\(23, 27, 26/g, 'rgba(var(--card-rgb)'],
	[/rgba\(17, 21, 20/g, 'rgba(18, 19, 19'],
	[/rgba\(9, 11, 11/g, 'rgba(var(--midnight-rgb)'],
	[/#D2AE76/gi, 'var(--color-gold-hover)'],
	[/#d2ae76/g, 'var(--color-gold-hover)'],
	[/#687052/gi, 'var(--color-bronze)'],
	[/#858e63/gi, 'var(--color-bronze)'],
	[/#b58a58/gi, 'var(--color-bronze)'],
	[/#090[Bb]0[Bb]/g, 'var(--color-midnight)'],
	[/#111514/gi, 'var(--color-surface)'],
	[/#171[Bb]1[Aa]/g, 'var(--color-surface-raised)'],
	[/#202523/gi, 'var(--color-surface-elevated)'],
	[/#8[Ee]4038/g, 'var(--color-danger)'],
];

function walk(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const filePath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			walk(filePath);
			continue;
		}
		if (!/\.(astro|css|ts)$/.test(entry.name) || skip.has(entry.name)) continue;
		let text = readFileSync(filePath, 'utf8');
		let changed = false;
		for (const [from, to] of replacements) {
			const next = text.replace(from, to);
			if (next !== text) {
				text = next;
				changed = true;
			}
		}
		if (changed) {
			writeFileSync(filePath, text);
			console.log('updated', path.relative(process.cwd(), filePath));
		}
	}
}

walk(root);
console.log('Done.');
