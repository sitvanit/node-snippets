/** module.exports **/

// Each file in Node.js is referred to as a module.

// logging the contents of module object
console.log(module);
// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/sitvanit/projects/snippets/etc./modules.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/Users/sitvanit/projects/snippets/etc./node_modules',
//      '/Users/sitvanit/projects/snippets/node_modules',
//      '/Users/sitvanit/projects/node_modules',
//      '/Users/sitvanit/node_modules',
//      '/Users/node_modules',
//      '/node_modules' ]}

// Before executing the code written inside a module, Node takes the entire code and encloses it within a function wrapper.
// The function wrapper ensures that all the code written inside a module is private to it unless explicitly stated otherwise (exported).

// (function(exports, require, module, __filename, __dirname) {
//     // entire module code lives here
// });

/** require **/
// require keyword refers to a function which is used to import all the constructs exported using the module.exports object from another module.
// The value returned by the require function in module y is equal to the module.exports object in the module x.
