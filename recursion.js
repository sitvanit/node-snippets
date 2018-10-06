// Recursion is simply when a function calls itself.

// All recursive functions should have three key features:

// 1. A Termination Condition
// if(something bad happened){ STOP };
// if (x < 0) return;

// 2. A Base Case
// The Base Case is similar to our termination condition in that it also stops our recursion. But remember,
// the termination condition is a catch-all for bad data. Whereas the base case is the goal of our recursive function.
// if (x === 0) return 1;

// 3. The Recursion
// return x * factorial(x — 1);

function factorial(x) {
    // termination
    if (x < 0) return;
    // base
    if (x === 0) return 1;
    // recursion
    return x * factorial(x - 1);
}
console.log(factorial(3)); // 6
// factorial(3) = return 3 * factorial(2);
// factorial(2) = return 2 * factorial(1);
// factorial(1) = return 1 * factorial(0);
// factorial(0) = 1;
// factorial(1) = return 1 * 1 // 1
// factorial(2) = return 2 * 1 // 2
// factorial(3) = return 3 * 2 // 6

function revStr(str) {
    // base + termination
    if (str === '') return '';
    // recursion
    return revStr(str.substr(1)) + str[0]
}
console.log(revStr('cat'));
// revStr('cat') = return revStr('at') + 'c';
// revStr('at')  = return revStr('t') + 'a';
// revStr('t')   = return revStr('') + 't';
// revStr('')    = ''
// revStr('t')   = '' + 't'; // 't'
// revStr('at')  = 't' + 'a'; // 'ta'
// revStr('cat') = 'ta' + 'c'; // 'tac'
