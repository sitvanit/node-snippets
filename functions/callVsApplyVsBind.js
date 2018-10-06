// Function calls: call, apply and bind
// All of these three methods are used to attach 'this' into function and the difference is in the function invocation.
// .call() invokes the function immediately and requires you to pass in arguments as a list (one by one).
// .apply() invokes the function immediately and allows you to pass in arguments as an array.

// Quick tip: Apply for Array — Call for Comma.

const Snow = {surename: 'Snow'};
const char = {
    surename: 'Stark',
    knows: function(arg, name) {
        console.log(`You know ${arg}, ${name} ${this.surename}`);
    }
};

char.knows('something', 'Bran');              // You know something, Bran Stark
char.knows.call(Snow, 'nothing', 'Jon');      // You know nothing, Jon Snow
char.knows.call(Snow, ...["nothing", "Jon"]);  // You know nothing, Jon Snow
char.knows.apply(Snow, ['nothing', 'Jon']);   // You know nothing, Jon Snow

// .bind() returns a new function, with a certain context and parameters. It is usually used when you want a function
// to be called later with a certain context.
// This is useful for asynchronous callbacks and events.

const whoKnowsNothing = char.knows.bind(Snow, 'nothing');
whoKnowsNothing('Jon');  // You know nothing, Jon Snow