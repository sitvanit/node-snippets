/** regular for **/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/** for ... in **/
// There’s no need to think of a counter or an exit condition.
// The main disadvantage of this solution is that we still need to use an index to access the elements of the array.
for (const index in numbers) {
    console.log(numbers[index]);
}

/** for .. of **/
// allowing you to loop over any type of data type that is iterable.
// One big advantage is that we no longer need an index and can access elements or our array directly. It makes the for
// ... of loop the most compact of the whole family of for loops.
for (const number of numbers) {
    console.log(number);
}

/** forEach **/
// forEach() is an array method and therefore cannot be used on other JavaScript objects.
// This method can be useful if your case meets two conditions: you want to loop over an array and you don’t need to
// stop the loop before the end of that array
numbers.forEach(function(number) {
    console.log(number);
});
