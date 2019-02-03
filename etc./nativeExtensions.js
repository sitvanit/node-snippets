/** Native Extensions **/
// In simple terms, we can say that a native extension is a set of C++ implemented logic that can be invoked from JavaScript code.

// JavaScript: it’s the coding language.
// V8: it’s the engine that runs our JavaScript code.
// Libuv: it’s a C library that provides us with asynchronous execution.

// e.g. The fs module is implemented using C++ (it has disk access) and eventually exposes methods (like writeFile and readFile) which can be invoked from JavaScript.
