/*** Currying, Partial Application, and Infinite Application ***/

/** Arity **/
//  the number of arguments a function or operator accepts — functions accepting more arguments have a higher arity,
//  and functions accepting less arguments have lower arity.

// add as having an arity of two (although we would more likely use a conventional shorthand and call it a “binary function.”
function add(a, b) {
    return a + b;
}

console.log(add(3, 5)); // 8

/** Currying **/
// So, simply put, currying is the process of taking a function with arity greater than one and expressing it as a
// sequence of functions of single arity.

function curriedAdd(a) {
    return function (b) {
        return a + b;
    }
}

console.log(curriedAdd(3)(5)); // 8

/** Partial Application Pattern **/
// Why would we want to curry a function?
// Partial application is a pattern in which a function with arity greater than one is expressed as a sequence of
// functions of lower arity. If this sounds familiar, it is because it is very close to the definition of currying!
// The primary technical difference is that we don’t specify that we are restricted to unary functions (functions with
// arity of one) when we are using a partial application pattern.
