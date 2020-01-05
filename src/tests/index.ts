import * as randomify from "../";
const fail = (x: number) => console.error(`\x1b[41mTest ${x} failed.\x1b[0m`);
const pass = (str: string) => console.log(`\x1b[32m${str}\x1b[0m`);
let i = 0;
let failed = false;
const createTest = (func: (assert: (bool: boolean) => any) => any) => {
	const num = ++i;
	const all: boolean[] = [];
	const assert = (bool: boolean) => all.push(bool);
	Array(25).fill(0).map(() => func(assert));
	all.every(Boolean) ? pass(`Test ${i} passed.`) : (failed = true, fail(num));
};
createTest(assert => {
	const opts = [0, 2, 6, "e", "foo"];
	assert(opts.includes(randomify.pick(opts)));
});
createTest(assert => {
	const opts = "ABC123";
	const picked = randomify.pickString(opts, 10);
	assert(picked.split("").every(x => picked.includes(x)) && picked.length === 10);
});
createTest(assert => {
	const int = randomify.randint(10, 20);
	assert(int < 20 && int >= 10);
});
createTest(assert => {
	const arr = ["foo", "bar", "qaz"];
	const str = randomify.random`${arr}_${arr}${"ok"}${1}${true}`;
	assert(Boolean(str.match(/(foo|bar|qaz)_(foo|bar|qaz)ok1true/)));
});
createTest(assert => {
	assert(Boolean(randomify.randomColor().match(/#[0-9A-F]{6}/)));
});
createTest(assert => {
	const expected = [1, 2, 3, 4, 5, 6];
	const range = randomify.range(1, 7);
	assert(range.every((x, j) => expected[j]) && range.length === expected.length);
});

if (!failed) console.log("\x1b[42mAll tests passed.\x1b[0m");
else throw console.error("\x1b[41mOne or more tests failed.\x1b[0m");
export {};
