// De-duping Arrays Using Sets
const arr = [1, 1, 2, 2, 3, 3];
const deduped = [...new Set(arr)];
console.log(deduped); // // [1, 2, 3]