import { HERO_IMAGES, PAGE_IMAGE_ALTS, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Dune Awakening Cheats 2026 | ESP, Aimbot & Hacks for PC',
		description:
			'Dune Awakening cheats for Windows PC — ESP, aimbot, wallhack & radar. $35/mo or $150 lifetime. Setup guides, patch updates & buyer reviews.',
		h1: 'Dune Awakening Cheats',
		intro:
			'A focused Windows PC package for Dune Awakening: Player ESP, aimbot controls, and wallhack overlays with Dune Awakening BattlEye anti-cheat maintenance after major patches.',
		imageAlt: 'Dune Awakening cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Dune Awakening Cheats visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for desert survival pressure',
				'Dune Awakening punishes incomplete information. Dune Awakening Cheats puts ESP, wallhack, and aimbot in one license so you can read multiplayer servers, flank pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/dune-awakening-cheats/">Dune Awakening Cheats guide</a>, <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, and <a href="/dune-awakening-cheats/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get Player ESP, stillsuit repair kit markers, radar cues, and aimbot profiles in a single package aimed at Arrakis survival and looting.',
				'Details live on the <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, <a href="/dune-awakening-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'dune-awakening-esp': {
		title: 'Dune Awakening ESP 2026 | Wallhack & Enemy Boxes for PC',
		description:
			'Dune Awakening cheats with ESP wallhack — enemy boxes, health bars, loot markers & distance readouts. Aimbot & radar in one license.',
		h1: 'Dune Awakening ESP — Wallhack & Enemy Boxes',
		intro:
			'Visibility tools for Dune Awakening. Read players and NPCs, lockers, resource caches, and pickups, and distance before you commit to a fight — with toggleable ESP wallhack overlays for open-world Arrakis looting.',
		imageAlt: 'Dune Awakening ESP overlay with enemy outline boxes, health bars, and distance readouts',
		galleryTitle: 'Dune Awakening ESP overlay visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Dune Awakening wallhack guide',
		ctaSecondaryHref: '/dune-awakening-wallhack/',
		sections: [
			section(
				'What Dune Awakening ESP solves in combat',
				'Dune Awakening sessions punish incomplete information. Dune Awakening Cheats ESP wallhack helps you spot players and NPCs early, spot elite enemies before they push your position, and mark resource nodes and caches worth the detour.',
				'In towns, multiplayer servers, and open-world runs, that visibility gap is often the difference between a clean flanking and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Dune Awakening live updates and Arrakis region changes are published by ${EXT.epic}. When Arrakis regions or loot rules shift, ESP categories stay useful because they track enemies and containers — not a single static landmark.`,
			),
			section(
				'Player, NPC, and elite unit ESP wallhack categories',
				'Toggle player or NPC outlines, elite threat cues, pickup awareness markers, and loot or chest pins so only session-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports multiplayer servers and multiplayer squads alike.',
				'Compare category detail on the <a href="/dune-awakening-wallhack/">wallhack page</a> and pair visibility with the <a href="/dune-awakening-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'player or NPC ESP outlines with distance',
					'spice and resource markers for faster rotations',
					'elite unit and pickup threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'Dune Awakening Cheats ESP wallhack is maintained for Dune Awakening with rebuilds after Dune Awakening BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/dune-awakening-cheats/">anti-cheat maintenance maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first game session.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/dune-awakening-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/dune-awakening-cheats/">best Dune Awakening cheats guide</a> and <a href="/dune-awakening-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'dune-awakening-aimbot': {
		title: 'Dune Awakening Aimbot 2026 | Soft Aim for PC & Controller',
		description:
			'Dune Awakening cheats with soft aim — FOV, smoothing & headshot targeting. Per-weapon profiles for rifles, shotguns & snipers on Windows PC.',
		h1: 'Dune Awakening Aimbot — Soft Aim for PC & Controller',
		intro:
			'Configurable Aimbot tools for Dune Awakening combat. Smoothness, FOV, head priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dune Awakening cheats cheat menu with soft aim, FOV slider, and head priority settings',
		galleryTitle: 'Dune Awakening Aimbot combat previews',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dune-awakening-esp/',
		sections: [
			section(
				'Aimbot tuned for Dune Awakening combat pace',
				'Dune Awakening mixes long-range firearm fights with close-quarters shotgun pushes. Dune Awakening Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-session.',
				'Head priority and target selection options cover closest enemy, lowest health, or highest-threat targets during group fights and raid waves and raid modifiers.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill time windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for lasguns, shotguns, and rifles. Switch between long-range rifle shots and close-quarters room clears without reopening menus every enemy spawn.',
				'Prefer softer tracking? Read the <a href="/dune-awakening-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/dune-awakening-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/dune-awakening-esp/">ESP wallhack</a> and <a href="/dune-awakening-radar/">2D radar</a> in the same Dune Awakening Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Head priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-session',
					'Per-weapon profile slots for rifle/ shotgun / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'Dune Awakening Cheats rebuilds Aimbot behavior when Dune Awakening BattlEye anti-cheat or major Dune Awakening patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/dune-awakening-cheats/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Dune Awakening Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Dune Awakening cheats feature list — ESP, soft aim, radar, hotkeys & controller support. Review every toggle before checkout.',
		h1: 'Dune Awakening Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Dune Awakening Cheats package for Dune Awakening on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'Dune Awakening ESP overlay with enemy boxes and health bars',
		galleryTitle: 'Dune Awakening Cheats feature gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'player or NPC ESP wallhack, elite enemies and pickup threat cues, spice and resource markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports multiplayer servers and open-world runs. Deep-dive the <a href="/dune-awakening-esp/">ESP page</a> and <a href="/dune-awakening-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when Arrakis regions rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and enemy clusters, plus Aimbot smoothness, FOV, head priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Dune Awakening sessions. See <a href="/dune-awakening-radar/">radar</a> and <a href="/dune-awakening-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-session toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@duneawakeningcheats.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/dune-awakening-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Buy Dune Awakening Cheats | $35/mo or $150 Lifetime',
		description:
			'Buy Dune Awakening cheats — $35/month or $150 lifetime. ESP, aimbot & wallhack included. Instant digital delivery on Windows PC.',
		h1: 'Dune Awakening Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Dune Awakening Cheats — ESP wallhack, radar hack, and Aimbot for Dune Awakening on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'Dune Awakening wallhack ESP showing players and NPCs and elite enemies through objective corners',
		galleryTitle: 'Dune Awakening Cheats package visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Dune Awakening Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Dune Awakening Cheats package — ideal if you play Dune Awakening regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'player ESP wallhack, stillsuit repair kit markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Dune Awakening BattlEye anti-cheat or major Dune Awakening patches.',
				`update calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/dune-awakening-cheats/">best Dune Awakening cheats</a>, <a href="/dune-awakening-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Dune Awakening Cheats Setup | Install Guide for Windows PC',
		description:
			'Install Dune Awakening cheats on Windows 10/11. Activate your license, tune ESP & aimbot profiles, check patch status before queueing.',
		h1: 'Dune Awakening Cheats Setup — PC & Controller Guide',
		intro:
			'Install and configure Dune Awakening Cheats for Dune Awakening on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'Dune Awakening aimbot hitbox lock on player or NPC during open-world run fight',
		galleryTitle: 'Dune Awakening Cheats setup visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Dune Awakening Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching Dune Awakening.',
				`Also glance at ${EXT.status} if Dune Awakening servers look unstable on patch day — a platform outage is not a license fault.`,
				'Dune Awakening Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemies, pickups, and lockers — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-session. Details for each module live on <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/dune-awakening-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Dune Awakening or Dune Awakening BattlEye anti-cheat patches',
				'When Funcom ships a major Dune Awakening update or Dune Awakening BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/dune-awakening-cheats/">anti-cheat maintenance page</a> and <a href="/dune-awakening-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Dune Awakening Cheats Updates | Patch Status Log 2026',
		description:
			'Check Dune Awakening Cheats patch status for Windows PC. ESP, aimbot & radar rebuild notes after game and anti-cheat updates — verify before you queue.',
		h1: 'Dune Awakening Cheats Update Log',
		intro:
			'Official maintenance log for Dune Awakening Cheats on Windows PC. Track ESP, aimbot, and radar rebuild status after Funcom patches and anti-cheat updates — check here before you launch.',
		imageAlt:
			'Dune Awakening Cheats update status screen showing ESP, aimbot, and radar maintenance after a game patch on Windows PC',
		galleryTitle: 'Dune Awakening cheat maintenance and patch-day visuals',
		ctaPrimary: 'Get Dune Awakening Cheats',
		ctaSecondary: 'Undetected cheats guide',
		ctaSecondaryHref: '/dune-awakening-cheats/',
		sections: [
			section(
				'Why check Dune Awakening cheat updates before playing?',
				'Dune Awakening and its anti-cheat receive regular patches from Funcom. When a build changes, ESP wallhack overlays, radar cues, and aimbot profiles may need a maintenance rebuild.',
				`Use ${EXT.status} for launcher health and this page for Dune Awakening Cheats build status — both matter on patch day.`,
				'Checking the update log before you queue in survival or multiplayer avoids loading an outdated client after major Arrakis updates.',
			),
			section(
				'What each maintenance update includes',
				'Entries cover anti-cheat compatibility status, rebuilt ESP wallhack modules, radar range fixes, aimbot tuning after weapon balance changes, and delivery of new builds to active monthly and lifetime licenses.',
				'Lifetime ($150) and monthly ($35) subscribers receive rebuild access during an active license. See <a href="/pricing/">Pricing</a> to renew or upgrade.',
				'For background on why rebuilds happen, read the <a href="/dune-awakening-cheats/">undetected Dune Awakening cheats guide</a> and <a href="/setup/">Setup</a> walkthrough.',
			),
			section(
				'How to stay undetected after a Dune Awakening patch',
				'No cheat can guarantee permanent undetected status. Pair maintenance rebuilds with conservative in-game settings and patch-day awareness.',
				`Follow official notes from ${EXT.rust}, then confirm our rebuild is live on this page before you load in.`,
				'Questions after an anti-cheat update? Contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Dune Awakening Cheats FAQ | ESP, Aimbot & Safety',
		description:
			'Dune Awakening cheats FAQ — licensing, ESP, aimbot, controller support, patch-day status & pricing. Clear answers before you buy.',
		h1: 'Dune Awakening Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Dune Awakening Cheats — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and Dune Awakening compatibility on Windows PC.',
		imageAlt: 'Dune Awakening radar hack 2D minimap overlay showing faction raid spawn routes and players and NPCs and elite enemies',
		galleryTitle: 'Dune Awakening Cheats FAQ visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Dune Awakening Cheats?',
				'Dune Awakening Cheats is an undetected cheat package for Dune Awakening on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover survival and multiplayer servers. Explore <a href="/features/">Features</a> for the full control list and <a href="/dune-awakening-esp/">ESP</a> / <a href="/dune-awakening-aimbot/">Aimbot</a> for module detail.',
				`Dune Awakening is developed and published by ${EXT.epic}. Cheats are third-party tools and may violate Funcom's Terms of Service — use is at your own risk.`,
			),
			section(
				'Are Dune Awakening Cheats undetected in 2026?',
				'Dune Awakening Cheats is maintained with rebuilds after Dune Awakening BattlEye anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/dune-awakening-cheats/">undetected Dune Awakening cheats</a> and the <a href="/dune-awakening-cheats/">anti-cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@duneawakeningcheats.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Dune Awakening Cheats Support | Contact & Help',
		description:
			'Contact Dune Awakening Cheats support for licenses, setup & billing. Email support@duneawakeningcheats.com with your order ID.',
		h1: 'Dune Awakening Cheats Support — Contact Us',
		intro:
			'Get help with Dune Awakening Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for Dune Awakening on Windows PC.',
		imageAlt: 'Dune Awakening cheats spice runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Dune Awakening Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Dune Awakening Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Funcom bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. anti-cheat maintenance notes live on the dedicated <a href="/dune-awakening-cheats/">Dune Awakening BattlEye anti-cheat page</a>.',
				'Email: support@duneawakeningcheats.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Dune Awakening Cheats 2026 | Anti-cheat safe',
		description:
			'Undetected Dune Awakening Cheats with anti-cheat maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected Dune Awakening Cheats — Anti-cheat maintenance',
		intro:
			'How Dune Awakening Cheats stays maintained for Dune Awakening after Dune Awakening BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'Dune Awakening wallhack ESP skeleton boxes on players and NPCs and elite enemies through map geometry',
		galleryTitle: 'Undetected Dune Awakening Cheats visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'anti-cheat maintenance guide',
		ctaSecondaryHref: '/dune-awakening-cheats/',
		sections: [
			section(
				'What undetected means for Dune Awakening Cheats',
				'Undetected Dune Awakening Cheats means the package is actively maintained against Dune Awakening BattlEye anti-cheat and major Dune Awakening patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Dune Awakening BattlEye anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Dune Awakening client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Dune Awakening BattlEye anti-cheat or Dune Awakening updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for Dune Awakening outages that can look like product failures.`,
				'Deep technical workflow: <a href="/dune-awakening-cheats/">anti-cheat maintenance Dune Awakening guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/dune-awakening-cheats/">Dune Awakening cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Dune Awakening Wallhack 2026 | ESP Boxes Through Terrain',
		description:
			'Dune Awakening wallhack ESP highlights players, NPCs, and elite enemies through cover. Toggle categories for survival & Arrakis.',
		h1: 'Dune Awakening Wallhack — ESP Boxes & Visibility',
		intro:
			'Dune Awakening wallhack ESP for Dune Awakening — see enemies, pickups, and lockers through toggleable wallhack overlays built for open-world Arrakis looting.',
		imageAlt: 'Dune Awakening wallhack ESP skeleton boxes on player or NPC hero in Dune Awakening',
		galleryTitle: 'Dune Awakening wallhack ESP gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Dune Awakening ESP page',
		ctaSecondaryHref: '/dune-awakening-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Dune Awakening wallhack focuses on information — enemy outlines, loot pins, elite enemies threat cues — rather than automatic aiming. Dune Awakening Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and raid waves.',
				'For the broader ESP keyword page see <a href="/dune-awakening-esp/">Dune Awakening ESP</a>; for combat assist see <a href="/dune-awakening-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support spice runs, multiplayer servers, and spice runs with distance readouts and snaplines for engagement control.',
				`Arrakis region updates and Arrakis region area changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/dune-awakening-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Dune Awakening BattlEye anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/dune-awakening-cheats/">undetected Dune Awakening cheats</a> and <a href="/dune-awakening-cheats/">anti-cheat maintenance</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/dune-awakening-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Dune Awakening Radar Hack 2026 | 2D Minimap for Dune Awakening',
		description:
			'Dune Awakening radar hack shows off-screen enemies on a 2D minimap. Directional cues for base defense, survival & multiplayer.',
		h1: 'Dune Awakening Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Dune Awakening — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'Dune Awakening ESP distance markers and enemy health readouts in Dune Awakening',
		galleryTitle: 'Dune Awakening radar hack visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/dune-awakening-esp/',
		sections: [
			section(
				'Why radar hack matters in Dune Awakening',
				'Multi-floor Arrakis regions stack vertical fights — catwalks, doorways, and side enemy spawns. A 2D radar overlay shows nearby enemy threats outside direct line of sight so you can reposition before a flank wave.',
				'Dune Awakening Cheats radar complements <a href="/dune-awakening-esp/">ESP wallhack</a> markers during faction pushes and enemy clusters.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight raid waves. Directional cues highlight flanks during base raids and elite enemies pushes across spice runs and multiplayer servers.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live missions — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/dune-awakening-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full Dune Awakening Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Dune Awakening patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/dune-awakening-cheats/">undetected status</a>.',
			),
		],
	},
	'battleye-bypass': {
		title: 'Dune Awakening Anti-Cheat Maintenance | Patch Guide',
		description:
			'How Dune Awakening Cheats rebuild after Dune Awakening BattlEye anti-cheat patches — ESP, aimbot & radar maintenance for PC. Read before queueing.',
		h1: 'Dune Awakening Anti-Cheat — Maintenance Guide',
		intro:
			'Understand Dune Awakening BattlEye anti-cheat maintenance for Dune Awakening Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Dune Awakening security updates.',
		imageAlt: 'Dune Awakening undetected hacks status with ESP overlay on players and NPCs and elite enemies',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Dune Awakening BattlEye anti-cheat overview',
				`Dune Awakening BattlEye anti-cheat is Funcom’ anti-cheat for Dune Awakening on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Dune Awakening Cheats monitors anti-cheat patch notes and Dune Awakening seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“anti-cheat maintenance” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Dune Awakening service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/dune-awakening-cheats/">undetected Dune Awakening cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'anti-cheat maintenance in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Dune Awakening Cheats 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best Dune Awakening cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected Dune Awakening Cheats with anti-cheat maintenance — compare and buy.',
		h1: 'Dune Awakening Cheats 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 Dune Awakening Cheats package for Dune Awakening — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'Dune Awakening cheats main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'Dune Awakening Cheats 2026 gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Dune Awakening Cheats leads in 2026',
				'2026 seasons bring new maps, weapons, and Dune Awakening BattlEye anti-cheat updates. Dune Awakening Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official official patch messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover survival and multiplayer loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'player ESP wallhack, stillsuit repair kit markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/dune-awakening-cheats/">Dune Awakening Cheats pillar</a>, <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, <a href="/dune-awakening-wallhack/">wallhack</a>, <a href="/dune-awakening-radar/">radar</a>, <a href="/dune-awakening-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/dune-awakening-cheats/">Dune Awakening Cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/dune-awakening-cheats/">best Dune Awakening cheats</a> checklist, <a href="/blog/dune-awakening-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@duneawakeningcheats.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Undetected Dune Awakening Cheats 2026 | PC Hacks Guide',
		description:
			'Undetected Dune Awakening cheats with ESP, aimbot & wallhack for PC. Maintenance after patches, pricing & setup — no permanent undetected promises.',
		h1: 'Dune Awakening Cheats & Hacks — ESP, Aimbot & Wallhack',
		intro:
			'Dune Awakening cheats and hacks for survival, multiplayer, and Arrakis combine ESP wallhack visibility, 2D radar threat cues, and aimbot controls in one Windows PC license — maintained after Dune Awakening BattlEye anti-cheat patches. This is the pillar guide for Dune Awakening Cheats in 2026.',
		imageAlt: 'Dune Awakening cheats spice runs objective fight with ESP boxes and aimbot active',
		galleryTitle: 'Dune Awakening Cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/dune-awakening-cheats/',
		sections: [
			section(
				'What Dune Awakening Cheats include in 2026',
				'Players searching for Dune Awakening Cheats usually want visibility and combat tools without stacking separate downloads. Dune Awakening Cheats bundles player ESP wallhack, stillsuit repair kit markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called Dune Awakening cheats.',
				'Coverage spans spice runs and multiplayer servers with in-client toggles for live missions. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'Dune Awakening Cheats vs Dune Awakening cheats — same stack, clear pages',
				'Searchers use Dune Awakening Cheats and Dune Awakening cheats interchangeably. This pillar focuses on hacks language; the <a href="/dune-awakening-cheats/">Dune Awakening cheats 2026</a> and <a href="/dune-awakening-cheats/">best Dune Awakening cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/dune-awakening-esp/">Dune Awakening ESP</a>, <a href="/dune-awakening-aimbot/">Dune Awakening Aimbot</a>, <a href="/dune-awakening-wallhack/">wallhack</a>, <a href="/dune-awakening-radar/">radar hack</a>, and <a href="/dune-awakening-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/dune-awakening-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/dune-awakening-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-dune-awakening-cheats-battleye/">undetected anti-cheat notes</a>.',
			),
			section(
				'Dune Awakening Cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Dune Awakening Cheats maps the full mission loop: read players and NPCs, track containers and resource caches, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/dune-awakening-aimbot/">aimbot hack</a>, <a href="/dune-awakening-esp/">ESP hack</a>.',
			),
			section(
				'Undetected Dune Awakening Cheats with anti-cheat maintenance',
				'Undetected Dune Awakening Cheats require rebuilds after Dune Awakening BattlEye anti-cheat and major Dune Awakening patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/dune-awakening-cheats/">anti-cheat maintenance guide</a> for the practical workflow. Pair with <a href="/dune-awakening-cheats/">undetected Dune Awakening cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Dune Awakening Hack Download 2026 | Instant Access',
		description:
			'Dune Awakening cheat download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'Dune Awakening Hack Download — Instant License Delivery',
		intro:
			'How Dune Awakening cheat download works for Dune Awakening — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'Dune Awakening wallhack ESP showing players and NPCs and elite enemies through objective corners',
		galleryTitle: 'Dune Awakening cheat download visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Dune Awakening cheat download delivery works',
				'After checkout confirms payment, Dune Awakening Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Dune Awakening servers are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Dune Awakening cheat download includes player ESP wallhack, spice and resource markers, 2D radar overlays, Aimbot profiles, and in-client toggles for open-world Arrakis looting.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Dune Awakening or Dune Awakening BattlEye anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/dune-awakening-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Dune Awakening Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Dune Awakening mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected Dune Awakening Cheats package.',
		h1: 'Dune Awakening Mod Menu — In-Client Control Panel',
		intro:
			'Dune Awakening mod menu controls for Dune Awakening — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-session without leaving your character session on Windows PC.',
		imageAlt: 'Dune Awakening cheats mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'Dune Awakening mod menu gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Dune Awakening mod menu controls',
				'A Dune Awakening mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live missions. Dune Awakening Cheats keeps those toggles accessible with hotkeys.',
				'Toggle enemy outlines, stillsuit repair kit markers, elite enemies cues, and per-weapon Aimbot settings without alt-tabbing out of Dune Awakening.',
				'Control deep-dives: <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, <a href="/dune-awakening-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for open-world Arrakis looting',
				'Separate ESP wallhack categories for players, pickups, lockers, and caches let you reduce overlay noise during rotations and raid waves.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when Dune Awakening balance patches change fight distances and mobility.',
				'Soft tracking players should start with <a href="/dune-awakening-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'Dune Awakening mod menu behavior is rebuilt when Dune Awakening BattlEye anti-cheat or major Dune Awakening updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/dune-awakening-cheats/">anti-cheat maintenance guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Dune Awakening Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Dune Awakening aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and head priority — included in our Dune Awakening Cheats with ESP boxes.',
		h1: 'Dune Awakening Soft Aim — Smooth Aimbot Controls',
		intro:
			'Dune Awakening aimbot settings for Dune Awakening — configurable Aimbot smoothness, FOV, head priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dune Awakening aimbot ESP boxes and FOV circle on players and NPCs and elite enemies in open-world Arrakis',
		galleryTitle: 'Dune Awakening aimbot gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/dune-awakening-aimbot/',
		sections: [
			section(
				'What Dune Awakening aimbot means',
				'Dune Awakening aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Dune Awakening Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in missions firefights.',
				'Head priority and target selection cover closest enemy, lowest health, or highest-threat targets during group fights.',
				'Full Aimbot documentation: <a href="/dune-awakening-aimbot/">Dune Awakening Aimbot</a>. Alternate wording: <a href="/dune-awakening-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for lasguns, shotguns, and rifles. Switch between long-range rifle shots and close-quarters room clears with hotkeys mid-session.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/dune-awakening-esp/">ESP wallhack</a> and <a href="/dune-awakening-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Dune Awakening BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Dune Awakening Cheats 2026 | Buyer Guide',
		description:
			'Best Dune Awakening Cheats for 2026: ESP boxes, soft aim, cloud DMA, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best Dune Awakening Cheats — 2026 Buyer Guide',
		intro:
			'Compare the best Dune Awakening cheats for Dune Awakening in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Dune Awakening BattlEye anti-cheat rebuilds and instant delivery.',
		imageAlt: 'Dune Awakening wallhack ESP showing players and NPCs and elite enemies through objective corners',
		galleryTitle: 'Best Dune Awakening cheats gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best Dune Awakening cheats in 2026',
				'The best Dune Awakening cheats combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Dune Awakening Cheats covers spice runs and multiplayer servers with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Dune Awakening cheats feature checklist',
				'Look for player ESP wallhack, stillsuit repair kit markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Dune Awakening patches.',
				'Review <a href="/features/">Features</a>, <a href="/dune-awakening-cheats/">undetected status</a>, and <a href="/dune-awakening-cheats/">Dune Awakening cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/dune-awakening-esp/">ESP</a>, <a href="/dune-awakening-aimbot/">Aimbot</a>, <a href="/dune-awakening-cheats/">hacks</a>.',
			),
			section(
				'Buying the best Dune Awakening cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Funcom terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Dune Awakening Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Dune Awakening aimbot hack with soft aim for PC and controllers. FOV, head priority, and hotkeys — bundled with ESP boxes in our Dune Awakening Cheats package.',
		h1: 'Dune Awakening Aimbot Hack — Soft Aim Assist',
		intro:
			'Dune Awakening aimbot hack tools for Dune Awakening — smoothness, FOV, head priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'Dune Awakening aimbot hack menu with silent aim and head priority toggles',
		galleryTitle: 'Dune Awakening aimbot hack gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/dune-awakening-aimbot/',
		sections: [
			section(
				'Dune Awakening aimbot hack vs visibility tools',
				'A Dune Awakening aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Dune Awakening Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Dune Awakening combat pace across open-world Arrakis looting.',
				'Prefer softer tracking language? See <a href="/dune-awakening-aimbot/">soft aim</a>. Full settings: <a href="/dune-awakening-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Head priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-session without opening menus during rotations or enemy clusters.',
				'Per-weapon profile slots separate long-range rifle tuning from close-quarters shotgun settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Dune Awakening BattlEye anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/dune-awakening-cheats/">anti-cheat maintenance guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/dune-awakening-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Dune Awakening ESP Hack 2026 | enemy boxes & Loot',
		description:
			'Dune Awakening ESP hack with enemy boxes and stillsuit repair kit markers for PC and controllers. Undetected Dune Awakening cheats with cloud DMA — see overlays and buy.',
		h1: 'Dune Awakening ESP Hack — enemy boxes Guide',
		intro:
			'Dune Awakening ESP hack overlays for Dune Awakening — enemy outlines, elite enemies threat cues, spice and resource markers with distance readouts across spice runs and multiplayer servers.',
		imageAlt: 'Dune Awakening ESP hack with enemy skeleton, bounding box, and status tracking labels',
		galleryTitle: 'Dune Awakening ESP hack gallery',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/dune-awakening-esp/',
		sections: [
			section(
				'What a Dune Awakening ESP hack shows',
				'A Dune Awakening ESP hack renders player or NPC outlines, elite enemies positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during faction pushes and flanking scenarios.',
				'Canonical visibility guide: <a href="/dune-awakening-esp/">Dune Awakening ESP</a>. Wallhack wording: <a href="/dune-awakening-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for survival',
				'Toggle Player ESP hack, stillsuit repair kit markers, chest pins, and elite enemies cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports multiplayer servers and open-world runs.',
				`Arrakis region area and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Dune Awakening BattlEye anti-cheat and Dune Awakening patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/dune-awakening-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/dune-awakening-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Dune Awakening Unlock All 2026 | What It Really Means',
		description:
			'Dune Awakening unlock all explained vs real Dune Awakening Cheats — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'Dune Awakening Unlock All — What Players Search For',
		intro:
			'Dune Awakening unlock all is a common search term for Dune Awakening — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Dune Awakening Cheats actually provides on Windows PC.',
		imageAlt: 'Dune Awakening ESP boxes and distances on players and NPCs and elite enemies in open-world run',
		galleryTitle: 'Dune Awakening unlock all guide visuals',
		ctaPrimary: 'Buy Dune Awakening Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Dune Awakening unlock all usually means',
				'Dune Awakening unlock all searches often refer to instant access to weapons, camos, skins, or Prime Access tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Dune Awakening Cheats focuses on in-match awareness — Player ESP, stillsuit repair kit markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Prime Access items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot players and NPCs, lockers, and resource caches during live missions. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, spice and resource markers speed BR rotations — see the <a href="/dune-awakening-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/dune-awakening-cheats/">Dune Awakening Cheats</a> and <a href="/dune-awakening-cheats/">best Dune Awakening cheats</a>.',
			),
			section(
				'Buying Dune Awakening Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Dune Awakening on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Dune Awakening BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Dune Awakening Cheats',
		description:
			'Privacy policy for Dune Awakening Cheats. How we handle support emails, order data, and checkout for Dune Awakening cheats licenses on duneawakeningcheats.com.',
		h1: 'Dune Awakening Cheats Privacy Policy',
		intro: 'How Dune Awakening Cheats handles information when you browse duneawakeningcheats.com or contact support about a Dune Awakening license.',
		imageAlt: 'Dune Awakening ESP overlay visual for privacy policy page',
		galleryTitle: 'Dune Awakening Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Dune Awakening Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@duneawakeningcheats.com with your request details.',
				'Policy updates publish on this page. Continued use of duneawakeningcheats.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Dune Awakening Cheats',
		description:
			'Refund policy for Dune Awakening Cheats. Digital delivery terms and eligibility for Dune Awakening Cheats packages with ESP, soft aim, and cloud DMA.',
		h1: 'Dune Awakening Cheats Refund Policy',
		intro:
			'Refund terms for Dune Awakening Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Dune Awakening.',
		imageAlt: 'Dune Awakening ESP overlay visual for refund policy page',
		galleryTitle: 'Dune Awakening Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Dune Awakening Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@duneawakeningcheats.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Dune Awakening Cheats Rules',
		description:
			'Terms of use for duneawakeningcheats.com and Dune Awakening Cheats licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'Dune Awakening Cheats Terms of Use',
		intro: 'Terms governing use of duneawakeningcheats.com and Dune Awakening Cheats licenses for Dune Awakening on Windows PC.',
		imageAlt: 'Dune Awakening ESP overlay visual for terms of use page',
		galleryTitle: 'Dune Awakening Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Dune Awakening Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Dune Awakening on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Dune Awakening may violate Funcom terms and result in account penalties. Dune Awakening Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/dune-awakening-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@duneawakeningcheats.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
		imageAlt: PAGE_IMAGE_ALTS[pageId] ?? page.imageAlt,
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
