/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import faqDataEn from "./en/faqData.json";
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";
import teamDataEn from "./en/teamData.json";
import testimonialDataEn from "./en/testimonialData.json";
import faqDataFr from "./fr/faqData.json";
import navDataFr from "./fr/navData.json";
import siteDataFr from "./fr/siteData.json";
import teamDataFr from "./fr/teamData.json";
import testimonialDataFr from "./fr/testimonialData.json";

export const dataTranslations = {
	en: {
		siteData: siteDataEn,
		navData: navDataEn,
		faqData: faqDataEn,
		teamData: teamDataEn,
		testimonialData: testimonialDataEn,
	},
	fr: {
		siteData: siteDataFr,
		navData: navDataFr,
		faqData: faqDataFr,
		teamData: teamDataFr,
		testimonialData: testimonialDataFr,
	},
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
	en: {
		hero_text: "Everything you need for an amazing website.",
		hero_description:
			"A template for the next killer SaaS. Multiple pages and sections, blog, i18n, animations, CMS - all ready to go.",
		back_to_all_posts: "Back to all posts",
		updated: "Updated",
	},
	fr: {
		hero_text: "Tout ce dont vous avez besoin pour un site Web incroyable.",
		hero_description:
			"Je ne parle pas vraiment français donc j'utilise Google Translate pour quelques parties de cette démo.",
		back_to_all_posts: "Retour à tous les articles",
		updated: "Mis à jour",
	},
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/legal/privacy", the route would be "legal/privacy"
 *
 * This also supports wildcards. For example, "categories/*" would match "categories/1" or "categories/2" etc for that language.
 *
 * Note: This works in conjunction with the localizedCollections object below
 */
export const routeTranslations = {
	en: {
		aboutKey: "about",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		blogKey: "blog",
	},
	fr: {
		aboutKey: "a-propos",
		categoryKey: "categories",
		categoryKey2: "categories",
		categoryKey3: "categories/*",
		blogKey: "blog",
	},
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
	blog: {
		en: "blog",
		fr: "blog",
	},
	// Add more collections/locales as needed
} as const;
