const join = <T>(array: T[], seperator: string | ((x: T, i: number, a: T[]) => string) = ",") => {
	if (typeof seperator === "string") return array.reduce((c, t, i, a) => c + (i < array.length - 1 ? t + seperator : t), "");
	else if (seperator instanceof Function) return array.reduce((c, t, i, a) => c + (i < array.length - 1 ? t + seperator(a[i], i, a) : t), "");
};
export const pick = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
export const random = (strings: string[], ...added: any) => join(strings, (x, i) => String(added instanceof Array ? pick(added[i]) : added));
