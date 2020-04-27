const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(`Index: ${i}, element: ${arr[i]}`);
    }, 3000)
}

// setTimeout function creates a function (which is the closure)
// a JS closure is when an inner function has access to its outer enclosing function's variables.
// The function it creates has access to the outer scope which contains the for loop with the index i.
// after 3 seconds the function can be executed, but i now is 4
//  By changing var to let, it allows the value of i to be “held” until after the setTimeout is finished.

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(`Index: ${i}, element: ${arr[i]}`);
    }, 3000)
}
