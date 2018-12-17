/** Arrow Functions **/

// Unlike every other form of function, arrow functions do not have their own execution context.
// They operate in the context of their enclosing scope.
// Practically, this means that both this and arguments are inherited from their parent function.

/* Execution Context */
// an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed.

// Types of Execution Context:

// Global Execution Context - The code that is not inside any function is in the global execution context.
// It creates a global object which is a window object (in case of browsers) and sets the value of this to equal to the global object.
// There can only be one global execution context in a program.

// Functional Execution Context - Every time a function is invoked, a brand new execution context is created for that
// function. Each function has its own execution context, but it’s created when the function is invoked or called.

// When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the
// current execution stack. Whenever the engine finds a function invocation, it creates a new execution context for
// that function and pushes it to the top of the stack.
// The engine executes the function whose execution context is at the top of the stack. When this function completes,
// its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.

/* Where You Should Not Use Arrow Functions? */
// (1) in methods on an object. This is an example where function context and this are exactly what you want.
// (2) in deep chains of function calls -  they give really bad stacktraces.
// (3) in places where this is bound dynamically.


