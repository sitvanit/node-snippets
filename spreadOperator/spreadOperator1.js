const middle = [3, 4];

// 1 - spread
const arr1 = [1, 2, middle, 5, 6];
console.log(arr1); // [1, 2, [3, 4], 5, 6]
const arr2 = [1, 2, ...middle, 5, 6];
console.log(arr2);

// 2 - hard copy array (slice)
const arr3 = [...arr2]; // a hard copy - equivalent to slice
console.log(arr3);
// it's different than:
const arr4 = arr2; // because this is a shallow copy. every change will do on array 2 will get to that.
arr2.pop();
console.log(arr2); // original after change
console.log(arr3); // hard copy
console.log(arr4); // shallow copy

// 3 - concat
const arr5 = ['a', 'b', 'c'];
const arr6 = ['d', 'e', 'f'];
const arr7 = arr5.concat(arr6);
console.log(arr7); // ['a', 'b', 'c', 'd', 'e', 'f']
const arr8 = [...arr5, ...arr6];
console.log(arr8);

// 4 - Math
console.log(Math.max()); // -Infinity
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(100, 3, 4)); // 100
// max of an array
const arr9 = [2, 4, 8, 6, 0];
console.log(Math.max(...arr9));

// 5 - string to array
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e',' l',' l', 'o']

// 6 - Removing unwanted properties
const {_internal, tooBig, ...cleanObject} = {el1: '1', _internal:"secret", tooBig:{}, el2: '2', el3: '3'};
console.log(cleanObject); // { el1: '1', el2: '2', el3: '3' }

// 7 - merge objects
const object1 = { a:1, b:2,c:3 };
const object2 = { b:30, c:40, d:50};
const merged = {...object1, ...object2}; //spread and re-add into merged
console.log(merged); //{ a: 1, b: 30, c: 40, d: 50 }

// 8 - clone object
const object3 = { a:1, b:2,c:3 };
const object4 = {...object3};
console.log(object4);

