/** closures **/
// closure is a function inside another function that:
// 1) uses variables from its parent scope and
// 2) is exposed to the outside world.

function outside() {
    let x = 2;
    return function inside(y) {
        return x * y;
    }
}

// The best part of a closure is that x, because we have created a variable that no other part of our program can touch,
// but we can still use.
//  the only thing that gets exposed to the global scope is the definition of inside, not the variable x.

let myClosure = outside();

console.log(myClosure(5)); // 10


