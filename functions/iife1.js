// Immediately-Invoked Function Expression (IIFE — pronounced ‘iffy’)
// Creating a function expression and then invoking it immediately.

// **FUNCTION DECLARATION**
function doSomething(){
    // ...do something...
}

// **FUNCTION EXPRESSION**
const doSomething = function(){
  // ...do something...
};

// when the JavaScript Parser encounters the function keywords it usually assumes we’re writing a function declaration,
// unless we explicitly tell it that we’re not.

(function(){
    // ...do something...
})();

// By wrapping our function in parenthesis, we tell the parser to parse our JavaScript as a function expression,
// and not a function declaration.

// Why would we use an IIFE instead of just creating a function and invoking it right afterwards?
// Privacy.

(function(){
    const superSecret = 195;
})();
console.log(superSecret);
//  Uncaught ReferenceError: superSecret is not defined
