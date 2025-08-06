import { type CollectionEntry, getCollection } from "astro:content";

import { slugify } from "@/js/textUtils";

// --------------------------------------------------------
/**
 * * get all sermons in a formatted array
 * @returns all sermons sorted by date
 *
 * ## Examples
 *
 * ```ts
 * const sermons = await getAllSermons();
 * ```
 *
 */
export async function getAllSermons(): Promise<CollectionEntry<"sermons">[]> {
	const posts = await getCollection("sermons", ({ data }) => {
		// filter out sermons (none at the moment)
		return true;
	});

	// no filtering for now
	const filteredSermons: CollectionEntry<"sermons">[] = posts;

	// filter sort by date and limit
	const formattedPosts = formatSermons(filteredSermons, {
		sortByDate: true,
		limit: undefined,
	});

	return formattedPosts;
}

// --------------------------------------------------------
/**
 * * returns all sermons in a formatted array
 * @param sermons: CollectionEntry<"sermons">[] - array of sermons, unformatted
 * note: this has an optional options object, params below
 * @param sortByDate: boolean - if true, sorts posts by date
 * @param limit: number - if number is passed, limits the number of sermons returned
 * @returns formatted sermons according to passed parameters
 */
interface FormatSermonsOptions {
	sortByDate?: boolean;
	limit?: number;
}

export function formatSermons(
	sermons: CollectionEntry<"sermons">[],
	{
		sortByDate = true,
		limit = undefined,
	}: FormatSermonsOptions = {},
): CollectionEntry<"sermons">[] {
	const filteredSermons = sermons;

	// now we have filteredSermons
	// sortByDate or randomize
	if (sortByDate) {
		filteredSermons.sort(
			(a: CollectionEntry<"sermons">, b: CollectionEntry<"sermons">) =>
				new Date(b.data.preachDate).getTime() - new Date(a.data.preachDate).getTime(),
		);
	} else {
		filteredSermons.sort(() => Math.random() - 0.5);
	}

	// limit if number is passed
	if (typeof limit === "number") {
		return filteredSermons.slice(0, limit);
	}

	return filteredSermons;
}

// --------------------------------------------------------
/**
 * * returns an array of processed items, sorted by count
 * @param items: string[] - array of items to count and sort
 * @returns object with counts of each item in the array
 *
 * note: return looks like { productivity: 2, 'cool-code': 1 }
 */

export function countItems(items: string[]): object {
	// get counts of each item in the array
	const countedItems = items.reduce((acc, item) => {
		const val = acc[slugify(item)] || 0;

		return {
			...acc,
			[slugify(item)]: val + 1,
		};
	}, {});

	return countedItems;
}

// --------------------------------------------------------
/**
 * * returns array of arrays, sorted by value (high value first)
 * @param jsObj: object - array of "key: value" pairs to sort
 * @returns array of arrays with counts, sorted by count
 *
 * note: return looks like [ [ 'productivity', 2 ], [ 'cool-code', 1 ] ]
 * note: this is used for tag and category cloud ordering
 */
export function sortByValue(jsObj: object): [string, number][] {
	const array: [string, number][] = [];
	for (const i in jsObj) {
		array.push([i, jsObj[i]]);
	}

	const sorted = array.sort((a, b) => {
		return b[1] - a[1];
	});

	// looks like [ [ 'productivity', 2 ], [ 'cool-code', 1 ] ]
	return sorted;
}
