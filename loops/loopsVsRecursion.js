function iterativeFactorial(n) {
    let res = 1;
    for (let i = n; i > 0; i--) {
        res = res * i
    }
    return res;
}

function recursiveFactorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

// for Tail Call Optimization (TCO)
function betterRecursiveFactorial(n, res) {
    if (n === 1) {
        return res;
    }

    return betterRecursiveFactorial(n - 1, res);
}

// Side Note: Tail Call Optimization (TCO) is an optimization carried out by the compiler or engine that allows the
// “loop” to continue without growing the stack. Even though ES6 came out with TCO as a part of its new standard,
// all the major browsers have had a bumpy ride implementing it and as of now, it’s been in limbo. That being said,
// it’s good to keep in mind how to convert one for TCO. Take a look here for more details regarding its implementation
// history for JavaScript.

// When recursiveFactorial is called, the following takes place:
// 3 * recursiveFactorial(3-1)
//     2 * recursiveFactorial(2 - 1)
//         1
//     2 * 1 = 2
// 2 * 3 = 6

// There are two essential components that make a recursive function desirably functional: the recursion and the base case.

// The recursion is the part where the function is called, which in our factorial example would be recursiveFactorial(n-1).
// Take note, that the function can be called in multiple places in itself, as well as multiple times in the same
// expression with likely different arguments.
// The base case is where we define the stopping condition. In our factorial example, the base case is if (n===1).
// Take note that there can be as many base cases as the algorithm requires.
