/**
 * Join an array with a function or string.
 * @param array - The array to be joined.
 * @param separator - The separator to be put inbetween the elements in the array. Can be a string or a function.
 */
export const join = <T>(array: T[], separator: string | ((x: T, i: number, a: T[]) => string) = ",") => {
	if (typeof separator === "string") return array.reduce((c, t, i, a) => c + (i < array.length - 1 ? t + separator : t), "");
	else if (separator instanceof Function) return array.reduce((c, t, i, a) => c + (i < array.length - 1 ? t + separator(a[i], i, a) : t), "");
};
/**
 * ```ts
 * console.log(pick(["Console log!", "Console message!"]))
 * ```
 * Pick a random element from an array.
 * @param array - The array that the element is going to be picked from.
 */
export const pick = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
/**
 * ```ts
 * random`It is currently ${["daytime", "nighttime", "afternoon"]}. It's time to ${["work", "exercise", "eat"]}!`
 * ```
 * A template literal tag that chooses random elements from its placeholders.
 * @param strings - The strings from the template literal.
 * @param added - The placeholders. They can be either "any" or an array. If it's an array, it will pick a random element from it.
 */
export const random = (strings: TemplateStringsArray, ...added: any[]) => join(Array.from(strings), (x, i) => String(added instanceof Array ? pick(added[i]) : added));
/**
 * ```ts
 * randint(1, 5) // 1, 2, 3, 4
 * randint(1, 5, true) // Any float between 1 and 5.
 * ```
 * Returns a random integer from min to max, but never reaching max.
 * @param min The minimum value.
 * @param max The maximum value.
 * @param decimals Whether to have decimals in the output.
 */
export const randint = (min: number, max: number, decimals = false) => min > max ? NaN : (decimals ? Number : Math.floor)((Math.random() * (max - min)) + min);
/**
 * ```ts
 * range(1, 7) // [1, 2, 3, 4, 5, 6]
 * ```
 * Gets a list with values ranging from the min value to max value, excluding the max value.
 * @param min - The minimum value.
 * @param max - The maximum value.
 */
export const range = (min: number, max: number) => Array(Math.max(max - min, 0)).fill(0).map((x, i) => x + min + i);

