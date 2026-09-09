export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/**
 * UI locales (language switcher / `/{lang}/…` routes).
 * All locales are included in sitemaps and indexable.
 * @see `seoIndexableLocales`, `includeLocaleUrlsInSitemap`
 */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Spain & Latin America' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'France & Africa' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Germany & DACH' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Brazil & Portugal' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Italy' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Netherlands & Belgium' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Poland' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Russia & CIS' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Turkey' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Middle East & North Africa' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Japan' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'South Korea' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'China & Singapore' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'India' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Indonesia' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Thailand' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Vietnam' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Ukraine' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Czech Republic' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Romania' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Sweden & Nordics' },
];

/** Official / canonical locale — English global pages at site root. */
export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

/** All locales are indexable and listed in per-locale sitemaps. */
export const seoIndexableLocales: readonly LocaleCode[] = localeCodes;

/** Include localized URLs in per-locale sitemaps and sitemap-i18n.xml. */
export const includeLocaleUrlsInSitemap = true;

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Dune Awakening Cheats Blog | ESP, Aimbot & Setup Guides',
		blogDescription:
			'Dune Awakening cheats blog — undetected ESP, wallhack, radar, aimbot setup, pricing, anti-cheat maintenance, and vendor comparisons for Windows PC.',
		blogH1: 'Dune Awakening Cheats Blog',
		blogIntro:
			'Guides for Dune Awakening cheats buyers: ESP and wallhack explainers, radar and aimbot settings, undetected anti-cheat notes, pricing breakdowns, and setup walkthroughs — plus Arrakis game tips when you need them.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Dune Awakening guides',
		allPosts: 'All blog posts',
		home: 'Dune Awakening Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Dune Awakening Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Dune Awakening en PC Windows.',
		blogH1: 'Blog Dune Awakening Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Dune Awakening indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Dune Awakening BattlEye anti-cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Dune Awakening relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Dune Awakening Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Dune Awakening Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Dune Awakening sur PC Windows.',
		blogH1: 'Blog Dune Awakening Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Dune Awakening indétectables, ESP wallhack, radar hack, Aimbot et Dune Awakening BattlEye anti-cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Dune Awakening associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Dune Awakening Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Dune Awakening Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Dune Awakening Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Dune Awakening auf Windows PC.',
		blogH1: 'Dune Awakening Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Dune Awakening Cheats, ESP Wallhack, Radar Hack, Aimbot und Dune Awakening BattlEye anti-cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Dune Awakening Guides',
		allPosts: 'Alle Beiträge',
		home: 'Dune Awakening Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Dune Awakening Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Dune Awakening no PC.',
		blogH1: 'Blog Dune Awakening Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Dune Awakening indetectáveis, ESP wallhack, radar hack, Aimbot e Dune Awakening BattlEye anti-cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Dune Awakening relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Dune Awakening Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Dune Awakening Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Dune Awakening su PC Windows.',
		blogH1: 'Blog Dune Awakening Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Dune Awakening indetectable, ESP wallhack, radar hack, Aimbot e Dune Awakening BattlEye anti-cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Dune Awakening correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Dune Awakening Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Dune Awakening Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Dune Awakening Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Dune Awakening op Windows PC.',
		blogH1: 'Dune Awakening Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Dune Awakening cheats, ESP wallhack, radar hack, Aimbot en Dune Awakening BattlEye anti-cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Dune Awakening gidsen',
		allPosts: 'Alle posts',
		home: 'Dune Awakening Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Dune Awakening Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Dune Awakening na PC.',
		blogH1: 'Blog Dune Awakening Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Dune Awakening, ESP wallhack, radar hack, Aimbot i Dune Awakening BattlEye anti-cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Dune Awakening',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Dune Awakening Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Dune Awakening Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Dune Awakening Cheats: undetected ESP, wallhack, radar и Aimbot для Dune Awakening на Windows PC.',
		blogH1: 'Блог Dune Awakening Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Dune Awakening, ESP wallhack, radar hack, Aimbot и Dune Awakening BattlEye anti-cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Dune Awakening',
		allPosts: 'Все статьи',
		home: 'Главная Dune Awakening Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Dune Awakening Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Dune Awakening Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Dune Awakening Windows PC.',
		blogH1: 'Dune Awakening Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Dune Awakening hileleri, ESP wallhack, radar hack, Aimbot ve Dune Awakening BattlEye anti-cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Dune Awakening rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Dune Awakening Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Dune Awakening Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Dune Awakening Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Dune Awakening على Windows PC.',
		blogH1: 'مدونة Dune Awakening Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Dune Awakening undetected وESP wallhack ورadar hack وAimbot وDune Awakening BattlEye anti-cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Dune Awakening ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Dune Awakening Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Dune Awakening Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Dune Awakening Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Dune Awakening Windows PC向け。',
		blogH1: 'Dune Awakening Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Dune Awakeningチート、ESP wallhack、radar hack、Aimbot、Dune Awakening BattlEye anti-cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Dune Awakeningガイド',
		allPosts: 'すべての記事',
		home: 'Dune Awakening Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Dune Awakening Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Dune Awakening Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Dune Awakening Windows PC.',
		blogH1: 'Dune Awakening Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Dune Awakening 치트, ESP wallhack, radar hack, Aimbot, Dune Awakening BattlEye anti-cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Dune Awakening 가이드',
		allPosts: '모든 게시물',
		home: 'Dune Awakening Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Dune Awakening Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Dune Awakening Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Dune Awakening Windows PC。',
		blogH1: 'Dune Awakening Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Dune Awakening作弊、ESP wallhack、radar hack、Aimbot和Dune Awakening BattlEye anti-cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Dune Awakening指南',
		allPosts: '所有文章',
		home: 'Dune Awakening Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Dune Awakening Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Dune Awakening Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Dune Awakening Windows PC के लिए।',
		blogH1: 'Dune Awakening Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Dune Awakening cheats, ESP wallhack, radar hack, Aimbot और Dune Awakening BattlEye anti-cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Dune Awakening गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Dune Awakening Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Dune Awakening Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Dune Awakening di PC Windows.',
		blogH1: 'Blog Dune Awakening Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Dune Awakening undetected, ESP wallhack, radar hack, Aimbot dan Dune Awakening BattlEye anti-cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Dune Awakening terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Dune Awakening Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Dune Awakening Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Dune Awakening Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Dune Awakening บน PC',
		blogH1: 'บล็อก Dune Awakening Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Dune Awakening undetected, ESP wallhack, radar hack, Aimbot และ Dune Awakening BattlEye anti-cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Dune Awakening ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Dune Awakening Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Dune Awakening Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Dune Awakening trên PC.',
		blogH1: 'Blog Dune Awakening Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Dune Awakening undetected, ESP wallhack, radar hack, Aimbot và Dune Awakening BattlEye anti-cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Dune Awakening liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Dune Awakening Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Dune Awakening Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Dune Awakening Cheats: undetected ESP, wallhack, radar та Aimbot для Dune Awakening на Windows PC.',
		blogH1: 'Блог Dune Awakening Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Dune Awakening, ESP wallhack, radar hack, Aimbot та Dune Awakening BattlEye anti-cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Dune Awakening",
		allPosts: 'Усі статті',
		home: 'Головна Dune Awakening Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Dune Awakening Cheats: undetected ESP, wallhack, radar a Aimbot pro Dune Awakening na Windows PC.',
		blogH1: 'Blog Dune Awakening Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Dune Awakening cheaty, ESP wallhack, radar hack, Aimbot a Dune Awakening BattlEye anti-cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Dune Awakening průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Dune Awakening Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Dune Awakening Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Dune Awakening Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Dune Awakening pe PC.',
		blogH1: 'Blog Dune Awakening Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Dune Awakening undetected, ESP wallhack, radar hack, Aimbot și Dune Awakening BattlEye anti-cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Dune Awakening related',
		allPosts: 'Toate articolele',
		home: 'Acasă Dune Awakening Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Dune Awakening Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Dune Awakening Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Dune Awakening på PC.',
		blogH1: 'Dune Awakening Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Dune Awakening cheats, ESP wallhack, radar hack, Aimbot och Dune Awakening BattlEye anti-cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Dune Awakening guider',
		allPosts: 'Alla inlägg',
		home: 'Dune Awakening Cheats hem',
		language: 'Språk',
	},
};
