declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"writing": {
"am-i-drinking-too-much-the-questions-that-actually-matter.md": {
	id: "am-i-drinking-too-much-the-questions-that-actually-matter.md";
  slug: "/am-i-drinking-too-much-the-questions-that-actually-matter";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"avoidant-attachment-in-marriage-when-closeness-feels-like-danger.md": {
	id: "avoidant-attachment-in-marriage-when-closeness-feels-like-danger.md";
  slug: "/avoidant-attachment-in-marriage-when-closeness-feels-like-danger";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"cannabis-and-marriage-when-legal-doesnt-mean-fine.md": {
	id: "cannabis-and-marriage-when-legal-doesnt-mean-fine.md";
  slug: "/cannabis-and-marriage-when-legal-doesnt-mean-fine";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"disconnected-achievers-guide-to-coming-home.md": {
	id: "disconnected-achievers-guide-to-coming-home.md";
  slug: "/disconnected-achievers-guide-to-coming-home";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"emotional-affair-signs.md": {
	id: "emotional-affair-signs.md";
  slug: "/emotional-affair-signs";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"i-drink-to-come-down-from-work.md": {
	id: "i-drink-to-come-down-from-work.md";
  slug: "/i-drink-to-come-down-from-work";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"i-shut-down-when-we-argue.md": {
	id: "i-shut-down-when-we-argue.md";
  slug: "/i-shut-down-when-we-argue";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"she-thinks-i-dont-care-but-i-do.md": {
	id: "she-thinks-i-dont-care-but-i-do.md";
  slug: "/she-thinks-i-dont-care-but-i-do";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"sober-curious-but-not-an-alcoholic.md": {
	id: "sober-curious-but-not-an-alcoholic.md";
  slug: "/sober-curious-but-not-an-alcoholic";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"successful-but-unhappy.md": {
	id: "successful-but-unhappy.md";
  slug: "/successful-but-unhappy";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"the-fight-you-keep-having-and-what-its-really-about.md": {
	id: "the-fight-you-keep-having-and-what-its-really-about.md";
  slug: "/the-fight-you-keep-having-and-what-its-really-about";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"what-your-kids-learn-when-dad-is-successful-but-absent.md": {
	id: "what-your-kids-learn-when-dad-is-successful-but-absent.md";
  slug: "/what-your-kids-learn-when-dad-is-successful-but-absent";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"when-drinking-becomes-the-third-partner-in-your-marriage.md": {
	id: "when-drinking-becomes-the-third-partner-in-your-marriage.md";
  slug: "/when-drinking-becomes-the-third-partner-in-your-marriage";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"when-therapy-didnt-work-before.md": {
	id: "when-therapy-didnt-work-before.md";
  slug: "/when-therapy-didnt-work-before";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-cant-i-enjoy-what-ive-built.md": {
	id: "why-cant-i-enjoy-what-ive-built.md";
  slug: "/why-cant-i-enjoy-what-ive-built";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-did-i-cheat-understanding-the-affair-as-an-exit.md": {
	id: "why-did-i-cheat-understanding-the-affair-as-an-exit.md";
  slug: "/why-did-i-cheat-understanding-the-affair-as-an-exit";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-i-sabotage-good-relationships.md": {
	id: "why-i-sabotage-good-relationships.md";
  slug: "/why-i-sabotage-good-relationships";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-we-fight-about-nothing.md": {
	id: "why-we-fight-about-nothing.md";
  slug: "/why-we-fight-about-nothing";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-you-keep-running-from-the-relationships-you-want.md": {
	id: "why-you-keep-running-from-the-relationships-you-want.md";
  slug: "/why-you-keep-running-from-the-relationships-you-want";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"why-your-wife-stopped-asking-you-to-be-present.md": {
	id: "why-your-wife-stopped-asking-you-to-be-present.md";
  slug: "/why-your-wife-stopped-asking-you-to-be-present";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
