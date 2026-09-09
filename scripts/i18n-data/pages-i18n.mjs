import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Dune Awakening indetectables para Dune Awakening en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Dune Awakening BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Dune Awakening Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Dune Awakening en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Dune Awakening BattlEye anti-cheat tras cada parche.', imageAlt: 'Hero dune-awakening-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Dune Awakening Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Dune Awakening Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en misiones y multiplayer servers.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Dune Awakening indétectables pour Dune Awakening sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Dune Awakening BattlEye anti-cheat. Livraison numérique instantanée.', h1: 'Dune Awakening Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Dune Awakening sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Dune Awakening BattlEye anti-cheat après chaque patch.', imageAlt: 'Hero dune-awakening-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Dune Awakening Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Dune Awakening Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Idéal pour repérer les ennemis et joueurs en survie, multijoueur et coop.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dune Awakening Cheats für Dune Awakening auf PC. ESP Wallhack, Radar Hack und Aimbot mit Dune Awakening BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Dune Awakening: ESP Wallhack, Radar und Aimbot mit Dune Awakening BattlEye anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Dune Awakening-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Dune Awakening Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Dune Awakening Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in missions und multiplayer servers zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Dune Awakening indetectáveis para Dune Awakening no PC. ESP wallhack, radar hack e Aimbot com manutenção Dune Awakening BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Dune Awakening Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Dune Awakening no Windows PC: ESP wallhack, radar e Aimbot com manutenção Dune Awakening BattlEye anti-cheat após cada patch.', imageAlt: 'Hero dune-awakening-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Dune Awakening Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Dune Awakening Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em survival e multiplayer servers.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Dune Awakening indetectable per Dune Awakening su PC. ESP wallhack, radar hack e Aimbot con manutenzione Dune Awakening BattlEye anti-cheat. Consegna digitale istantanea.', h1: 'Dune Awakening Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Dune Awakening su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Dune Awakening BattlEye anti-cheat dopo ogni patch.', imageAlt: 'Hero dune-awakening-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Dune Awakening Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Dune Awakening Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in missions e multiplayer servers.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dune Awakening cheats voor Dune Awakening op PC. ESP wallhack, radar hack en Aimbot met Dune Awakening BattlEye anti-cheat-onderhoud. Directe digitale levering.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Dune Awakening: ESP wallhack, radar en Aimbot met Dune Awakening BattlEye anti-cheat-onderhoud na elke patch.', imageAlt: 'Dune Awakening-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Dune Awakening Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Dune Awakening Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in missions en multiplayer servers.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Dune Awakening dla Dune Awakening na PC. ESP wallhack, radar hack i Aimbot z konserwacją Dune Awakening BattlEye anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Dune Awakening na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Dune Awakening BattlEye anti-cheat po każdym patchu.', imageAlt: 'Hero dune-awakening-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Dune Awakening Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Dune Awakening Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i multiplayer servers.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Dune Awakening для Dune Awakening на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Dune Awakening BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Dune Awakening на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Dune Awakening BattlEye anti-cheat после патчей.', imageAlt: 'Hero dune-awakening-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Dune Awakening Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Dune Awakening Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в survival и multiplayer servers.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Dune Awakening için undetected hileler. ESP wallhack, radar hack ve Aimbot — Dune Awakening BattlEye anti-cheat bakımı. Anında dijital teslimat.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Dune Awakening Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Dune Awakening BattlEye anti-cheat bakımı dahil.', imageAlt: 'Dune Awakening-cheats player ESP wallhack ve Aimbot undetected', gallery: 'Dune Awakening Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Dune Awakening Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve multiplayer servers\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Dune Awakening Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Dune Awakening undetected لـ Dune Awakening على PC. ESP wallhack ورadar hack وAimbot مع صيانة Dune Awakening BattlEye anti-cheat. تسليم رقمي فوري.', h1: 'Dune Awakening Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Dune Awakening على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Dune Awakening Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Dune Awakening Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وmultiplayer servers.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Dune Awakening Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Dune Awakening向けundetectedチート。ESP wallhack、radar hack、Aimbot、Dune Awakening BattlEye anti-cheatメンテナンス。即時デジタル配信。', h1: 'Dune Awakening Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Dune Awakening Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Dune Awakening BattlEye anti-cheatメンテナンス付き。', imageAlt: 'dune-awakening-cheats player ESP wallhackとAimbot undetected', gallery: 'Dune Awakening Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDune Awakening Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとmultiplayer serversで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Dune Awakening undetected 치트. ESP wallhack, radar hack, Aimbot, Dune Awakening BattlEye anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Dune Awakening Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Dune Awakening BattlEye anti-cheat 유지보수 포함.', imageAlt: 'dune-awakening-cheats player ESP wallhack 및 Aimbot undetected', gallery: 'Dune Awakening Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Dune Awakening Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 multiplayer servers에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Dune Awakening Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Dune Awakening undetected作弊。ESP wallhack、radar hack、Aimbot、Dune Awakening BattlEye anti-cheat维护。即时数字交付。', h1: 'Dune Awakening Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Dune Awakening Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Dune Awakening BattlEye anti-cheat维护。', imageAlt: 'dune-awakening-cheats player ESP wallhack与Aimbot undetected', gallery: 'Dune Awakening Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Dune Awakening Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在生存和multiplayer servers中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Dune Awakening undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Dune Awakening Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'dune-awakening-cheats player ESP wallhack और Aimbot undetected', gallery: 'Dune Awakening Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Dune Awakening Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और multiplayer servers में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dune Awakening undetected untuk Dune Awakening di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Dune Awakening BattlEye anti-cheat. Pengiriman digital instan.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Dune Awakening di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Dune Awakening Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan multiplayer servers.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Dune Awakening undetected สำหรับ Dune Awakening บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Dune Awakening บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero dune-awakening-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Dune Awakening Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ multiplayer servers', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dune Awakening undetected cho Dune Awakening trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Dune Awakening BattlEye anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Dune Awakening trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Dune Awakening Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và multiplayer servers.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Dune Awakening для Dune Awakening на PC. ESP wallhack, radar hack, Aimbot, обслуговування Dune Awakening BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Dune Awakening на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Dune Awakening Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і multiplayer servers.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Dune Awakening cheaty pro Dune Awakening na PC. ESP wallhack, radar hack, Aimbot, údržba Dune Awakening BattlEye anti-cheat. Okamžité digitální doručení.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Dune Awakening na Windows PC: ESP wallhack, radar, Aimbot s údržbou Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Dune Awakening Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a multiplayer servers.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Dune Awakening undetected pentru Dune Awakening pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Dune Awakening BattlEye anti-cheat. Livrare digitală instantă.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Dune Awakening pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Dune Awakening BattlEye anti-cheat.', imageAlt: 'Hero dune-awakening-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Dune Awakening Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Dune Awakening Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și multiplayer servers.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Dune Awakening Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Dune Awakening cheats för Dune Awakening på PC. ESP wallhack, radar hack, Aimbot, Dune Awakening BattlEye anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Dune Awakening Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Dune Awakening på Windows PC: ESP wallhack, radar, Aimbot med Dune Awakening BattlEye anti-cheat-underhåll.', imageAlt: 'Dune Awakening-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Dune Awakening Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Dune Awakening Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och multiplayer servers.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'dune-awakening-esp': { suffix: 'enemy boxes & Wallhack', focus: 'enemy boxes, stillsuit repair kit markers, and wallhack overlays' },
	'dune-awakening-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'Anti-cheat maintenance Log', focus: 'anti-cheat patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and anti-cheat questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'Anti-cheat safe Status', focus: 'undetected maintenance after Dune Awakening BattlEye anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'battleye-bypass': { suffix: 'Patch Maintenance', focus: 'how anti-cheat updates are handled for Dune Awakening Cheats' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Dune Awakening cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Dune Awakening Cheats pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Dune Awakening cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Dune Awakening' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Dune Awakening Cheats', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Dune Awakening Cheats ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Dune Awakening. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `dune-awakening-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Dune Awakening Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read players and NPCs with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for open-world Arrakis looting.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'dune-awakening-esp': { en: 'Dune Awakening ESP', es: 'Dune Awakening ESP', fr: 'Dune Awakening ESP', de: 'Dune Awakening ESP', pt: 'Dune Awakening ESP', it: 'Dune Awakening ESP', nl: 'Dune Awakening ESP', pl: 'Dune Awakening ESP', ru: 'Dune Awakening ESP', tr: 'Dune Awakening ESP', ar: 'Dune Awakening ESP', ja: 'Dune Awakening ESP', ko: 'Dune Awakening ESP', zh: 'Dune Awakening ESP', hi: 'Dune Awakening ESP', id: 'Dune Awakening ESP', th: 'Dune Awakening ESP', vi: 'Dune Awakening ESP', uk: 'Dune Awakening ESP', cs: 'Dune Awakening ESP', ro: 'Dune Awakening ESP', sv: 'Dune Awakening ESP' },
	'dune-awakening-aimbot': { en: 'Dune Awakening Aimbot', es: 'Dune Awakening Aimbot', fr: 'Dune Awakening Aimbot', de: 'Dune Awakening Aimbot', pt: 'Dune Awakening Aimbot', it: 'Dune Awakening Aimbot', nl: 'Dune Awakening Aimbot', pl: 'Dune Awakening Aimbot', ru: 'Dune Awakening Aimbot', tr: 'Dune Awakening Aimbot', ar: 'Dune Awakening Aimbot', ja: 'Dune Awakening Aimbot', ko: 'Dune Awakening Aimbot', zh: 'Dune Awakening Aimbot', hi: 'Dune Awakening Aimbot', id: 'Dune Awakening Aimbot', th: 'Dune Awakening Aimbot', vi: 'Dune Awakening Aimbot', uk: 'Dune Awakening Aimbot', cs: 'Dune Awakening Aimbot', ro: 'Dune Awakening Aimbot', sv: 'Dune Awakening Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Dune Awakening Wallhack', es: 'Dune Awakening Wallhack', fr: 'Dune Awakening Wallhack', de: 'Dune Awakening Wallhack', pt: 'Dune Awakening Wallhack', it: 'Dune Awakening Wallhack', nl: 'Dune Awakening Wallhack', pl: 'Dune Awakening Wallhack', ru: 'Dune Awakening Wallhack', tr: 'Dune Awakening Wallhack', ar: 'Dune Awakening Wallhack', ja: 'Dune Awakening Wallhack', ko: 'Dune Awakening Wallhack', zh: 'Dune Awakening Wallhack', hi: 'Dune Awakening Wallhack', id: 'Dune Awakening Wallhack', th: 'Dune Awakening Wallhack', vi: 'Dune Awakening Wallhack', uk: 'Dune Awakening Wallhack', cs: 'Dune Awakening Wallhack', ro: 'Dune Awakening Wallhack', sv: 'Dune Awakening Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'battleye-bypass': { en: 'Anti-cheat bypass', es: 'Bypass Dune Awakening BattlEye anti-cheat', fr: 'Bypass Dune Awakening BattlEye anti-cheat', de: 'Anti-cheat bypass', pt: 'Bypass Dune Awakening BattlEye anti-cheat', it: 'Bypass Dune Awakening BattlEye anti-cheat', nl: 'Anti-cheat bypass', pl: 'Bypass Dune Awakening BattlEye anti-cheat', ru: 'Bypass Dune Awakening BattlEye anti-cheat', tr: 'anti-cheat bypass', ar: 'Bypass Dune Awakening BattlEye anti-cheat', ja: 'Anti-cheat bypass', ko: 'Anti-cheat bypass', zh: 'Anti-cheat bypass', hi: 'Anti-cheat bypass', id: 'Bypass Dune Awakening BattlEye anti-cheat', th: 'Anti-cheat bypass', vi: 'Bypass Dune Awakening BattlEye anti-cheat', uk: 'Bypass Dune Awakening BattlEye anti-cheat', cs: 'Anti-cheat bypass', ro: 'Bypass Dune Awakening BattlEye anti-cheat', sv: 'Anti-cheat bypass' },
	'cheats-2026': { en: 'Dune Awakening Cheats 2026', es: 'Dune Awakening Cheats 2026', fr: 'Dune Awakening Cheats 2026', de: 'Dune Awakening Cheats 2026', pt: 'Dune Awakening Cheats 2026', it: 'Dune Awakening Cheats 2026', nl: 'Dune Awakening Cheats 2026', pl: 'Dune Awakening Cheats 2026', ru: 'Dune Awakening Cheats 2026', tr: 'Dune Awakening Cheats 2026', ar: 'Dune Awakening Cheats 2026', ja: 'Dune Awakening Cheats 2026', ko: 'Dune Awakening Cheats 2026', zh: 'Dune Awakening Cheats 2026', hi: 'Dune Awakening Cheats 2026', id: 'Dune Awakening Cheats 2026', th: 'Dune Awakening Cheats 2026', vi: 'Dune Awakening Cheats 2026', uk: 'Dune Awakening Cheats 2026', cs: 'Dune Awakening Cheats 2026', ro: 'Dune Awakening Cheats 2026', sv: 'Dune Awakening Cheats 2026' },
	hacks: { en: 'Dune Awakening Cheats', es: 'Dune Awakening Cheats', fr: 'Dune Awakening Cheats', de: 'Dune Awakening Cheats', pt: 'Dune Awakening Cheats', it: 'Dune Awakening Cheats', nl: 'Dune Awakening Cheats', pl: 'Dune Awakening Cheats', ru: 'Dune Awakening Cheats', tr: 'Dune Awakening Cheats', ar: 'Dune Awakening Cheats', ja: 'Dune Awakening Cheats', ko: 'Dune Awakening Cheats', zh: 'Dune Awakening Cheats', hi: 'Dune Awakening Cheats', id: 'Dune Awakening Cheats', th: 'Dune Awakening Cheats', vi: 'Dune Awakening Cheats', uk: 'Dune Awakening Cheats', cs: 'Dune Awakening Cheats', ro: 'Dune Awakening Cheats', sv: 'Dune Awakening Cheats' },
	'cheat-download': { en: 'Dune Awakening Cheats Download', es: 'Descarga Dune Awakening Cheats', fr: 'Téléchargement Dune Awakening Cheats', de: 'Dune Awakening Cheats Download', pt: 'Download Dune Awakening Cheats', it: 'Download Dune Awakening Cheats', nl: 'Dune Awakening Cheats Download', pl: 'Pobieranie Dune Awakening Cheats', ru: 'Скачать Dune Awakening Cheats', tr: 'Dune Awakening Hile İndir', ar: 'Dune Awakening Cheats Download', ja: 'Dune Awakening Cheats Download', ko: 'Dune Awakening Cheats Download', zh: 'Dune Awakening Cheats Download', hi: 'Dune Awakening Cheats Download', id: 'Dune Awakening Cheats Download', th: 'Dune Awakening Cheats Download', vi: 'Dune Awakening Cheats Download', uk: 'Завантаження Dune Awakening Cheats', cs: 'Dune Awakening Cheats Download', ro: 'Descărcare Dune Awakening Cheats', sv: 'Dune Awakening Cheats Download' },
	'mod-menu': { en: 'Dune Awakening Mod Menu', es: 'Dune Awakening Mod Menu', fr: 'Dune Awakening Mod Menu', de: 'Dune Awakening Mod Menu', pt: 'Dune Awakening Mod Menu', it: 'Dune Awakening Mod Menu', nl: 'Dune Awakening Mod Menu', pl: 'Dune Awakening Mod Menu', ru: 'Dune Awakening Mod Menu', tr: 'Dune Awakening Mod Menu', ar: 'Dune Awakening Mod Menu', ja: 'Dune Awakening Mod Menu', ko: 'Dune Awakening Mod Menu', zh: 'Dune Awakening Mod Menu', hi: 'Dune Awakening Mod Menu', id: 'Dune Awakening Mod Menu', th: 'Dune Awakening Mod Menu', vi: 'Dune Awakening Mod Menu', uk: 'Dune Awakening Mod Menu', cs: 'Dune Awakening Mod Menu', ro: 'Dune Awakening Mod Menu', sv: 'Dune Awakening Mod Menu' },
	'soft-aim': { en: 'Dune Awakening Soft Aim', es: 'Dune Awakening Soft Aim', fr: 'Dune Awakening Soft Aim', de: 'Dune Awakening Soft Aim', pt: 'Dune Awakening Soft Aim', it: 'Dune Awakening Soft Aim', nl: 'Dune Awakening Soft Aim', pl: 'Dune Awakening Soft Aim', ru: 'Dune Awakening Soft Aim', tr: 'Dune Awakening Soft Aim', ar: 'Dune Awakening Soft Aim', ja: 'Dune Awakening Soft Aim', ko: 'Dune Awakening Soft Aim', zh: 'Dune Awakening Soft Aim', hi: 'Dune Awakening Soft Aim', id: 'Dune Awakening Soft Aim', th: 'Dune Awakening Soft Aim', vi: 'Dune Awakening Soft Aim', uk: 'Dune Awakening Soft Aim', cs: 'Dune Awakening Soft Aim', ro: 'Dune Awakening Soft Aim', sv: 'Dune Awakening Soft Aim' },
	'best-cheats': { en: 'Best Dune Awakening Cheats', es: 'Mejores Dune Awakening Cheats', fr: 'Meilleures Dune Awakening Cheats', de: 'Beste Dune Awakening Cheats', pt: 'Melhores Dune Awakening Cheats', it: 'Migliori Dune Awakening Cheats', nl: 'Beste Dune Awakening Cheats', pl: 'Najlepsze Dune Awakening Cheats', ru: 'Лучшие Dune Awakening Cheats', tr: 'En İyi Dune Awakening Hileleri', ar: 'Best Dune Awakening Cheats', ja: 'Best Dune Awakening Cheats', ko: 'Best Dune Awakening Cheats', zh: 'Best Dune Awakening Cheats', hi: 'Best Dune Awakening Cheats', id: 'Best Dune Awakening Cheats', th: 'Best Dune Awakening Cheats', vi: 'Best Dune Awakening Cheats', uk: 'Найкращі Dune Awakening Cheats', cs: 'Nejlepší Dune Awakening Cheats', ro: 'Cele mai bune Dune Awakening Cheats', sv: 'Bästa Dune Awakening Cheats' },
	'aimbot-hack': { en: 'Dune Awakening Aimbot Hack', es: 'Dune Awakening Aimbot Hack', fr: 'Dune Awakening Aimbot Hack', de: 'Dune Awakening Aimbot Hack', pt: 'Dune Awakening Aimbot Hack', it: 'Dune Awakening Aimbot Hack', nl: 'Dune Awakening Aimbot Hack', pl: 'Dune Awakening Aimbot Hack', ru: 'Dune Awakening Aimbot Hack', tr: 'Dune Awakening Aimbot Hack', ar: 'Dune Awakening Aimbot Hack', ja: 'Dune Awakening Aimbot Hack', ko: 'Dune Awakening Aimbot Hack', zh: 'Dune Awakening Aimbot Hack', hi: 'Dune Awakening Aimbot Hack', id: 'Dune Awakening Aimbot Hack', th: 'Dune Awakening Aimbot Hack', vi: 'Dune Awakening Aimbot Hack', uk: 'Dune Awakening Aimbot Hack', cs: 'Dune Awakening Aimbot Hack', ro: 'Dune Awakening Aimbot Hack', sv: 'Dune Awakening Aimbot Hack' },
	'esp-hack': { en: 'Dune Awakening ESP Hack', es: 'Dune Awakening ESP Hack', fr: 'Dune Awakening ESP Hack', de: 'Dune Awakening ESP Hack', pt: 'Dune Awakening ESP Hack', it: 'Dune Awakening ESP Hack', nl: 'Dune Awakening ESP Hack', pl: 'Dune Awakening ESP Hack', ru: 'Dune Awakening ESP Hack', tr: 'Dune Awakening ESP Hack', ar: 'Dune Awakening ESP Hack', ja: 'Dune Awakening ESP Hack', ko: 'Dune Awakening ESP Hack', zh: 'Dune Awakening ESP Hack', hi: 'Dune Awakening ESP Hack', id: 'Dune Awakening ESP Hack', th: 'Dune Awakening ESP Hack', vi: 'Dune Awakening ESP Hack', uk: 'Dune Awakening ESP Hack', cs: 'Dune Awakening ESP Hack', ro: 'Dune Awakening ESP Hack', sv: 'Dune Awakening ESP Hack' },
	'unlock-all': { en: 'Dune Awakening Unlock All', es: 'Dune Awakening Unlock All', fr: 'Dune Awakening Unlock All', de: 'Dune Awakening Unlock All', pt: 'Dune Awakening Unlock All', it: 'Dune Awakening Unlock All', nl: 'Dune Awakening Unlock All', pl: 'Dune Awakening Unlock All', ru: 'Dune Awakening Unlock All', tr: 'Dune Awakening Unlock All', ar: 'Dune Awakening Unlock All', ja: 'Dune Awakening Unlock All', ko: 'Dune Awakening Unlock All', zh: 'Dune Awakening Unlock All', hi: 'Dune Awakening Unlock All', id: 'Dune Awakening Unlock All', th: 'Dune Awakening Unlock All', vi: 'Dune Awakening Unlock All', uk: 'Dune Awakening Unlock All', cs: 'Dune Awakening Unlock All', ro: 'Dune Awakening Unlock All', sv: 'Dune Awakening Unlock All' },
};

const CTA2_HREF = {
	'dune-awakening-esp': '/dune-awakening-wallhack/',
	'dune-awakening-aimbot': '/dune-awakening-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/dune-awakening-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/dune-awakening-cheats/',
	wallhack: '/dune-awakening-esp/',
	radar: '/dune-awakening-esp/',
	'battleye-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/dune-awakening-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/dune-awakening-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/dune-awakening-aimbot/',
	'esp-hack': '/dune-awakening-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Dune Awakening Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Dune Awakening Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for duneawakeningcheats.com and Dune Awakening licenses.`),
		imageAlt: `dune-awakening-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Dune Awakening Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on duneawakeningcheats.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Dune Awakening terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@duneawakeningcheats.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
