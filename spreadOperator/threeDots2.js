/*** Spread Operator (...) ***/

const movies = ['Leon', 'Love Actually', 'Lord of the Rings'];
console.log(...movies); // Leon Love Actually Lord of the Rings

const numbers = new Set([1, 4, 5, 7]);
console.log(...numbers); // 1 4 5 7

/* Combining Array */
const shapes = ['triangle', 'square', 'circle'];
const objects = ['pencil', 'notebook', 'eraser'];
console.log(shapes.concat(objects)); // [ 'triangle', 'square', 'circle', 'pencil', 'notebook', 'eraser' ]

console.log([...shapes, ...objects]);


/*** Rest Parameter (...) ***/

const movie = ["Life of Brian", 8.1, 1979, "Graham Chapman", "John Cleese", "Michael Palincheese"];
const [title, rating, year, ...actors] = movie;
console.log(title);  // Life of Brian
console.log(rating); // 8.1
console.log(year);   // 1979
console.log(actors); // [ 'Graham Chapman', 'John Cleese', 'Michael Palincheese' ]

/* Variadic functions */
// Variadic functions are functions which take an indefinite number of arguments.

function sum(...nums) {
    let total = 0;
    for(const num of nums) {
        total += num;
    }
    return total;
}
