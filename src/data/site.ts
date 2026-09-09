import { gameplayImages } from './gameplay-images';

export const siteConfig = {
	name: 'Dune Awakening Cheats',
	url: 'https://duneawakeningcheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@duneawakeningcheats.com',
	logo: '/favicon.png',
	logoRaster: '/favicon.png',
	logoRasterWidth: 192,
	logoRasterHeight: 192,
	logoAlt: 'Dune Awakening Cheats logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fdune-awakening',
	defaultOgImage: gameplayImages.cheatMenuUi.src,
} as const;

export const productInfo = {
	name: 'Dune Awakening Cheats',
	shortName: 'DA',
	brand: 'Dune Awakening Cheats',
	tagline: 'Dune Awakening cheats for PC — ESP, aimbot, and wallhack with updates after anti-cheat patches',
	summary:
		'Dune Awakening Cheats is a Windows PC package with ESP, aimbot, and wallhack for Dune Awakening. It works in survival, multiplayer, and Arrakis looting, and we update it after anti-cheat and game patches.',
	game: 'Dune Awakening',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Dune Awakening or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Player & NPC ESP across survival, multiplayer, and Arrakis looting',
			'Player, NPC, and elite unit outlines through terrain and obstacles',
			'Health and status markers for players and NPCs',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for group fights',
		],
		aimbot: [
			'Smooth aim targeting for lasguns, melee blades, and heavy weapons',
			'Smoothness, FOV, and sensitivity controls',
			'Headshot priority and target selection options',
			'Hotkey toggles mid-combat without opening menus',
			'Per-weapon profiles for lasguns, shotguns, and rifles',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and faction pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Dune Awakening patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Combat assist',
		columns: 1 as const,
		items: [
			'Line-of-sight visibility check',
			'Custom FOV arc',
			'FOV circle overlay',
			'Target snapline',
			'Custom aim hotkey',
			'Hold & toggle aim modes',
			'Aim smoothing slider',
			'Target type filter',
			'Headshot targeting',
			'Per-weapon profiles',
		],
	},
	{
		title: 'ESP & overlays',
		columns: 1 as const,
		items: [
			'Player, NPC & spice ESP',
			'Outlines through terrain',
			'Player bounding boxes',
			'Headshot markers',
			'Enemy facing indicator',
			'Entity name labels',
			'Distance readout',
			'ESP distance filter',
			'Health & spice pickup ESP',
			'Boss NPC & elite enemies ESP',
		],
	},
	{
		title: 'Radar & mission tools',
		columns: 1 as const,
		items: [
			'2D off-screen radar',
			'Defense wave direction cues',
			'In-session hotkey toggles',
			'Hotkey profiles',
			'Controller support',
			'Patch maintenance status',
			'In-game mod menu',
			'Spice & resource markers',
			'Stamina and status tracking',
			'Custom crosshair',
			'Squad colour coding',
			'PvP & spice-harvest presets',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Combat assist',
		summary:
			'Configurable aim assistance for lasguns, melee blades, and heavy weapons — tuned for survival, multiplayer, and Arrakis looting.',
		items: [
			{
				name: 'Line-of-sight visibility check',
				description:
					'Only locks onto enemies your character can actually hit — reduces obvious snaps through walls and base walls.',
			},
			{
				name: 'Custom FOV arc',
				description:
					'Set how wide the aimbot scans for players, NPCs, and elite enemies so close fights and sniper lanes both feel natural.',
			},
			{
				name: 'FOV circle overlay',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning in faction raids and harvest runs.',
			},
			{
				name: 'Target snapline',
				description:
					'Snapline from crosshair to the current lock — useful for verifying headshot priority on elite enemies and tough enemies.',
			},
			{
				name: 'Custom aim hotkey',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings on Windows PC.',
			},
			{
				name: 'Hold & toggle aim modes',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim smoothing slider',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more natural in public servers.',
			},
			{
				name: 'Target type filter',
				description:
					'Prioritise closest enemy, lowest health, elite units, or boss NPCs during faction raids.',
			},
			{
				name: 'Headshot targeting',
				description:
					'Bias locks toward headshot hitboxes on players, NPCs, and elite enemies.',
			},
			{
				name: 'Per-weapon profiles',
				description:
					'Save separate aim settings for rifles, shotguns, snipers, and melee — swap mid-session without retuning.',
			},
		],
	},
	{
		id: 'visual',
		title: 'ESP & overlays',
		summary:
			'ESP and wallhack overlays that surface enemies, loot, and mission threats through terrain and sand cover.',
		items: [
			{
				name: 'Player, NPC & spice ESP',
				description:
					'Highlights players and NPCs with boxes, health bars, and distance readouts across the Arrakis map.',
			},
			{
				name: 'Outlines through terrain',
				description:
					'Clean outlines on players, NPCs, and elite enemies — even through smoke, cover, and sand cover.',
			},
			{
				name: 'Player bounding boxes',
				description: 'Box ESP sized to each unit type for precise reads during melee combat and Arrakis harvest runs.',
			},
			{
				name: 'Headshot markers',
				description: 'Mark headshot hitboxes for precision shots on elite enemies, boss NPCs, and tough PvP targets.',
			},
			{
				name: 'Enemy facing indicator',
				description: 'See which way an enemy is facing before you push a corridor or capture a base perimeter.',
			},
			{
				name: 'Entity name labels',
				description: 'Display unit names above ESP boxes — players, NPCs, faction allies, and rivals.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or abilities.',
			},
			{
				name: 'ESP distance filter',
				description:
					'Hide far-away clutter — keep overlays readable in Arrakis and the Deep Desert, and raid waves.',
			},
			{
				name: 'Health & spice pickup ESP',
				description: 'Mark stillsuit repair kits, food, and ammo during long survival and harvest runs.',
			},
			{
				name: 'Boss NPC & elite enemies ESP',
				description:
					'Dedicated styling for elite enemies, boss NPCs, and faction leaders in late-game PvP.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Radar & mission tools',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D off-screen radar',
				description: 'Minimap-style blips for enemies outside your camera — great for faction raids, survival, and spice runs.',
			},
			{
				name: 'Defense wave direction cues',
				description: 'Directional hints when new enemy waves push toward your base defense or survival objective.',
			},
			{
				name: 'In-session hotkey toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-session without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Patch maintenance status',
				description: 'Maintenance status published on Updates after Funcom and Dune Awakening patches.',
			},
			{
				name: 'In-game mod menu',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Spice & resource markers',
				description: 'Highlight resources, items, and containers during town looting, warehouse runs, and Arrakis routes.',
			},
			{
				name: 'Stamina and status tracking',
				description: 'Track enemy status timers and your own cooldowns during complex elite enemies fights.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Squad colour coding',
				description: 'Separate colours for your squad members, allies, and enemies in public servers.',
			},
			{
				name: 'PvP & spice-harvest presets',
				description:
					'One-click ESP and radar profiles tuned for PvP encounter density and official server population.',
			},
		],
	},
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Dune Awakening Cheats is live for Dune Awakening on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Dune Awakening Cheats', href: '/dune-awakening-cheats/' },
	{ label: 'Dune Awakening ESP', href: '/dune-awakening-esp/' },
	{ label: 'Dune Awakening Aimbot', href: '/dune-awakening-aimbot/' },
	{ label: 'Dune Awakening wallhack', href: '/dune-awakening-wallhack/' },
	{ label: 'Undetected status', href: '/dune-awakening-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/dune-awakening-cheats/' },
	{ label: 'Aimbot', href: '/dune-awakening-aimbot/' },
	{ label: 'ESP', href: '/dune-awakening-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Dune Awakening update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Dune Awakening Cheats', href: '/dune-awakening-cheats/' },
	{ label: 'ESP', href: '/dune-awakening-esp/' },
	{ label: 'Aimbot', href: '/dune-awakening-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		category: 'Getting started',
		question: 'What is Dune Awakening Cheats?',
		answer:
			'Dune Awakening Cheats is a maintained Windows PC package for <a href="https://duneawakening.com/" target="_blank" rel="noopener noreferrer">Dune Awakening</a> with <a href="/dune-awakening-esp/">ESP page</a>, <a href="/dune-awakening-wallhack/">wallhack</a>, <a href="/dune-awakening-radar/">radar</a>, and <a href="/dune-awakening-aimbot/">aimbot</a> controls. One license covers the full feature set plus <a href="/setup/">setup help</a>.',
	},
	{
		category: 'Getting started',
		question: 'What is included in one license?',
		answer:
			'Player ESP boxes, health and spice markers, 2D radar overlays, and configurable aim assist — including per-weapon profiles and optional cloud DMA. See the <a href="/features/">full feature list</a> and compare <a href="/pricing/">license plans</a>.',
	},
	{
		category: 'Getting started',
		question: 'How are licenses delivered after checkout?',
		answer:
			'Licenses are delivered digitally after payment clears. Delivery timing can vary slightly by payment method. Keep your order confirmation handy if you contact <a href="/support/">our support team</a>.',
	},
	{
		category: 'Features & gameplay',
		question: 'Does this work for survival, multiplayer, and Arrakis?',
		answer:
			'Yes. ESP and radar help you read enemy positions in survival and during faction raids across <a href="/blog/dune-awakening-spice-farming-guide/">Arrakis</a> regions like Harko Village, Hagga Basin, and the Deep Desert. Aim assist covers lasgun, shotgun, and rifle profiles for solo or co-op.',
	},
	{
		category: 'Features & gameplay',
		question: 'Can I use a controller?',
		answer:
			'Controller support is available on Windows PC with adjustable FOV and aim settings. Menu navigation with a pad takes a little practice — see the <a href="/setup/">setup guide</a> for baseline values and <a href="/reviews/">player reviews</a> from controller players.',
	},
	{
		category: 'Features & gameplay',
		question: 'What is cloud DMA and do I need it?',
		answer:
			'Cloud DMA is an optional setup path for buyers who want hardware-assisted isolation instead of a standard loader. Most players start with the regular package. Read the <a href="/dune-awakening-cheats/">main guide</a> and ask <a href="/support/">support</a> before choosing DMA.',
	},
	{
		category: 'Updates & support',
		question: 'Is Dune Awakening Cheats permanently undetected?',
		answer:
			'No tool can promise permanent undetected status. Dune Awakening is maintained by <a href="https://duneawakening.com/" target="_blank" rel="noopener noreferrer">Funcom</a> and receives regular patches. We rebuild after anti-cheat updates and post status on the <a href="/updates/">status page</a> — check there before you load in.',
	},
	{
		category: 'Updates & support',
		question: 'Where do I check status after a Dune Awakening patch?',
		answer:
			'Start with our <a href="/updates/">Updates page</a>, then cross-check <a href="https://duneawakening.com/news/" target="_blank" rel="noopener noreferrer">official PC update notes</a>. For how patches affect gameplay, read our <a href="/blog/dune-awakening-patch-notes-guide/">patch notes guide</a>.',
	},
	{
		category: 'Updates & support',
		question: 'How do I contact support?',
		answer:
			'Use the <a href="/support/">Support page</a> or email support@duneawakeningcheats.com with your order ID, Windows version, and a short description of the issue. Refund questions are covered on the <a href="/refund-policy/">refund policy</a> page.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		category: 'Product details',
		question: 'What is a Dune Awakening wallhack?',
		answer:
			'A Dune Awakening wallhack is an ESP overlay that highlights players, NPCs, and elite enemies through terrain. Dune Awakening Cheats <a href="/dune-awakening-wallhack/">wallhack</a> includes distance readouts, category toggles, and team colours for survival and open-world Arrakis.',
	},
	{
		category: 'Product details',
		question: 'Does Dune Awakening Cheats include a radar hack?',
		answer:
			'Yes. <a href="/dune-awakening-radar/">2D radar overlays</a> show nearby threats outside your direct view — useful for reading flanks during base defense, survival, and faction pushes.',
	},
	{
		category: 'Product details',
		question: 'How does anti-cheat affect Dune Awakening Cheats?',
		answer:
			'Anti-cheat monitors Dune Awakening on Windows PC. After major patches we publish maintenance notes on <a href="/updates/">Updates</a>. Read the <a href="/dune-awakening-cheats/">maintenance guide</a> and our <a href="/blog/undetected-dune-awakening-cheats-battleye/">BattlEye explainer</a> for what to expect on patch day.',
	},
	{
		category: 'Product details',
		question: 'Where can I read Dune Awakening game guides?',
		answer:
			'Our <a href="/blog/">blog</a> covers Dune Awakening gameplay modes, survival tips, factions, Arrakis spice routes, and how to read official patch notes — with links to the <a href="https://duneawakening.fandom.com/wiki/Dune:_Awakening_Wiki" target="_blank" rel="noopener noreferrer">Dune Awakening Wiki</a> and <a href="https://duneawakening.com" target="_blank" rel="noopener noreferrer">official game guide</a>.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'krypt0_arc',
		title: 'Soft aim in survival',
		rating: 5,
		text: 'Using this for a few weeks in survival. Soft aim feels natural on rifles and I have not had issues in public servers. Took me a bit to figure out the menu layout but after that it has been smooth.',
		short: 'Using this for a few weeks in survival. Soft aim feels natural on rifles and I have not had issues in public servers.',
		slug: 'dune-awakening-soft-aim-review-xkrypt0',
		seoTitle: 'Dune Awakening Cheats reviews: soft aim by @krypt0_arc',
		seoDescription:
			'Dune Awakening Cheats reviews — @krypt0_arc rates soft aim 5/5 for survival on Windows PC after setup.',
		date: '2026-03-14',
	},
	{
		handle: 'extractR4K',
		title: 'ESP on Arrakis',
		rating: 4,
		text: 'ESP helps a lot on Arrakis and in Harko Village when you are trying to spot rival players around dunes before pushing a spice node. Radar could be a little bigger on 1080p. Still happy with it for what I paid.',
		short: 'ESP helps on Arrakis and Harko Village when spotting heavies before pushing the objective. Radar could be bigger on 1080p.',
		slug: 'dune-awakening-esp-realistic-review-buildsr4k',
		seoTitle: 'Dune Awakening Cheats reviews: ESP by @extractR4K',
		seoDescription:
			'Dune Awakening Cheats reviews — @extractR4K rates ESP wallhack 4/5 for Arrakis and Harko Village rotations.',
		date: '2026-02-08',
	},
	{
		handle: 'jakeDMA',
		title: 'Cloud DMA setup',
		rating: 5,
		text: 'I moved over from another tool that got flagged last patch. DMA setup sounded intimidating but support walked me through it on Discord in under an hour. Still running clean after the latest hotfix.',
		short: 'Moved from another tool that got flagged. Support walked me through DMA setup on Discord. Still running after the latest hotfix.',
		slug: 'dune-cloud-dma-review-dma-wizard',
		seoTitle: 'Dune Awakening Cheats reviews: cloud DMA by @jakeDMA',
		seoDescription:
			'Dune Awakening Cheats reviews — @jakeDMA rates cloud DMA setup 5/5 and patch-day stability.',
		date: '2026-01-22',
	},
	{
		handle: 'padWarMain',
		title: 'Controller support',
		rating: 4,
		text: 'Did not expect controller support to work this well. Aim assist needed some FOV tweaking with my Xbox pad. Opening the menu with a controller is clunky but playable.',
		short: 'Controller support works better than I expected. Needed some FOV tweaks with my Xbox pad.',
		slug: 'dune-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Dune Awakening Cheats reviews: controller by @padWarMain',
		seoDescription:
			'Dune Awakening Cheats reviews — @padWarMain rates controller aim assist 4/5 with an Xbox pad.',
		date: '2026-04-02',
	},
	{
		handle: 'stormchaser07',
		title: 'Setup took patience',
		rating: 3,
		text: 'Features are solid once everything is running. First launch was annoying because Windows Defender flagged the loader. Not entirely their fault, but the setup guide could be clearer. Support replied in a couple hours with a fix. ESP and pickup markers work well in Dune Awakening.',
		short: 'Solid once running. Setup guide could be clearer and Defender flagged the loader at first. Support helped same day.',
		slug: 'dune-cheat-setup-review-stormchaser07',
		seoTitle: 'Dune Awakening Cheats reviews: setup by @stormchaser07',
		seoDescription:
			'Dune Awakening Cheats reviews — @stormchaser07 rates first-time setup 3/5 and support response time.',
		date: '2026-05-19',
	},
	{
		handle: 'loot_goblin_42',
		title: 'Resource ESP',
		rating: 5,
		text: 'Mostly bought this for loot tracking on long spice runs. Being able to see cooldowns and stillsuit repair kits without tabbing around saves a surprising amount of time.',
		short: 'Mostly bought for loot tracking in survival. Cooldown and pickup markers save a lot of time.',
		slug: 'dune-loot-esp-review-lootgoblinx',
		seoTitle: 'Dune Awakening Cheats reviews: resource ESP by @loot_goblin_42',
		seoDescription:
			'Dune Awakening Cheats reviews — @loot_goblin_42 rates resource ESP 5/5 for spice runs and loot tracking.',
		date: '2026-06-11',
	},
	{
		handle: 'steelpath42',
		title: 'Weapon profiles',
		rating: 4,
		text: 'Been on this since early access. Separate profiles for lasgun and shotgun actually matter in tight Arrakis regions. Only gripe is waiting about a day for an update after one patch. Updates page helped at least.',
		short: 'Separate lasgun and shotgun profiles matter in tight Arrakis regions. Waited about a day for one patch update.',
		slug: 'dune-awakening-aimbot-realistic-review-steelpathgrind42',
		seoTitle: 'Dune Awakening Cheats reviews: aim profiles by @steelpath42',
		seoDescription:
			'Dune Awakening Cheats reviews — @steelpath42 rates per-weapon aim profiles 4/5 and post-patch updates.',
		date: '2026-03-28',
	},
	{
		handle: 'vanlife_arc',
		title: 'Radar on base defense',
		rating: 5,
		text: 'Radar makes raid waves way less chaotic. Seeing flank routes before they reach your base is huge when you are in a pub squad and nobody is calling enemy spawns.',
		short: 'Radar makes raid waves less chaotic. Seeing flank routes before they reach your base is huge in pub squads.',
		slug: 'dune-awakening-radar-hack-review-vanlifefn',
		seoTitle: 'Dune Awakening Cheats reviews: radar by @vanlife_arc',
		seoDescription:
			'Dune Awakening Cheats reviews — @vanlife_arc rates radar 5/5 during faction raids and multiplayer.',
		date: '2026-07-03',
	},
	{
		handle: 'patchdaymike',
		title: 'Patch day downtime',
		rating: 4,
		text: 'Every cheat goes down on patch day. Difference here is they posted a status update within a few hours and I was back the next morning. That is about all you can ask for.',
		short: 'Goes down on patch day like everything else. Status update within a few hours and back the next morning.',
		slug: 'dune-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Dune Awakening Cheats reviews: patch day by @patchdaymike',
		seoDescription:
			'Dune Awakening Cheats reviews — @patchdaymike rates patch-day communication 4/5 after a Dune Awakening update.',
		date: '2026-02-27',
	},
	{
		handle: 'snipezonly',
		title: 'Sniper profile',
		rating: 5,
		text: 'Sniper profile plus ESP tags is exactly what I wanted for Arrakis spice runs. No complaints so far.',
		short: 'Sniper profile plus ESP tags is exactly what I wanted for Arrakis spice runs.',
		slug: 'dune-sniper-aimbot-review-snipezonly',
		seoTitle: 'Dune Awakening Cheats reviews: sniper profile by @snipezonly',
		seoDescription:
			'Dune Awakening Cheats reviews — @snipezonly rates the sniper aim profile 5/5 with ESP tagging.',
		date: '2026-07-21',
	},
	{
		handle: 'nightowl_pc',
		title: 'Monthly sub',
		rating: 4,
		text: 'Started on monthly to test it before committing. Performance has been stable enough that I will probably grab lifetime next sale. Menu is a little crowded but you get used to it.',
		short: 'Started monthly to test it. Stable enough that I will probably grab lifetime next sale.',
		slug: 'dune-monthly-sub-review-nightowl',
		seoTitle: 'Dune Awakening Cheats reviews: monthly sub by @nightowl_pc',
		seoDescription:
			'Dune Awakening Cheats reviews — @nightowl_pc rates the monthly plan 4/5 before upgrading to lifetime.',
		date: '2026-05-06',
	},
	{
		handle: 'oldvet_wf',
		title: 'Lifetime key',
		rating: 5,
		text: 'Picked up lifetime after bouncing between free menus for years. Having one package with ESP, aim assist, and radar that actually gets updated is worth it to me.',
		short: 'Picked up lifetime after years of bouncing between free menus. One package that actually gets updated.',
		slug: 'dune-lifetime-key-review-oldvet',
		seoTitle: 'Dune Awakening Cheats reviews: lifetime key by @oldvet_wf',
		seoDescription:
			'Dune Awakening Cheats reviews — @oldvet_wf rates the lifetime key 5/5 for ESP, aim assist, and radar.',
		date: '2026-01-09',
	},
	{
		handle: 'duoqueue',
		title: 'Playing with a friend',
		rating: 4,
		text: 'Me and a friend both run it for duo open-world runs. ESP and radar make callouts way easier when we are on voice and not staring at the same screen. Wish there was a cleaner way to reset settings between missions.',
		short: 'Friend and I both run it for duo open-world runs. ESP and radar make callouts easier on voice.',
		slug: 'dune-squad-play-review-duoqueue',
		seoTitle: 'Dune Awakening Cheats reviews: squad play by @duoqueue',
		seoDescription:
			'Dune Awakening Cheats reviews — @duoqueue rates ESP and radar 4/5 for duo open-world runs.',
		date: '2026-04-18',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating:
		Math.round(
			(customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length) * 10,
		) / 10,
	totalCount: customerReviews.length,
} as const;
