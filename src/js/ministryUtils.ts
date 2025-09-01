import { type CollectionEntry, getCollection } from "astro:content";

import { slugify } from "@/js/textUtils";

// --------------------------------------------------------
/**
 * * get all ministries in a formatted array
 * @returns all ministries sorted by date
 *
 * ## Examples
 *
 * ```ts
 * const ministry = await getAllMinistries();
 * ```
 *
 */
export async function getAllMinistries(): Promise<CollectionEntry<"ministries">[]> {
	const posts = await getCollection("ministries", ({ data }) => {
		// filter (none at the moment)
		return true;
	});

	// no filtering for now
	const filteredMinistries: CollectionEntry<"ministries">[] = posts;

	// filter sort by date and limit
	const formattedMinistries = formatMinistries(filteredMinistries, {
		limit: undefined,
	});

	return formattedMinistries;
}

// --------------------------------------------------------
/**
 * * returns in a formatted array
 * @param ministries: CollectionEntry<"ministry">[] - array of ministries, unformatted
 * note: this has an optional options object, params below
 * @param limit: number - if number is passed, limits the number of sermons returned
 * @returns formatted according to passed parameters
 */
interface FormatMinistryOptions {
	limit?: number;
}

export function formatMinistries(
	ministries: CollectionEntry<"ministries">[],
	{
		limit = undefined,
	}: FormatMinistryOptions = {},
): CollectionEntry<"ministries">[] {
	const filteredMinistries = ministries;

	// limit if number is passed
	if (typeof limit === "number") {
		return filteredMinistries.slice(0, limit);
	}

	return filteredMinistries;
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
