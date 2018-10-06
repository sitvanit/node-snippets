// Benefit #1: Shorter Syntax
// (parameters) => { statements }
// () => { statements }
// parameter => { statements }
// parameter => statement (if you return the statement)

// Benefit #2: No binding of this
// this keeps its meaning from its original context

function Counter1() {
    this.num = 0;
}
const a = new Counter1();
console.log(a.num);

// increase the value of a.num every second.
// setInterval() is a function that calls another function after a set number of milliseconds.

function Counter2() {
    this.num = 0;
    this.timer = setInterval(function add() {
        this.num++;
        console.log(this.num);
    }, 1000);
}
// const b = new Counter2(); // it will print Nan (not a number)
// Our setInterval function isn’t being called on a declared object.
// It also isn’t being called with the new keyword.
// (only the Counter() function).
// And lastly, we’re not using call, bind, or apply.

function Counter3() {
    this.num = 0;
    this.timer = setInterval(() => {
        this.num++;
        console.log(this.num);
    }, 1000);
}
const c = new Counter3();