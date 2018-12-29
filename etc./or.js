let a; // undefined (falsy value)
const b = null; // (falsy value)
const c = undefined; // (falsy value)
const d = 4;
const e = 'five';

const f = a || b || c || d || e;

console.log(f); // 4 (d)