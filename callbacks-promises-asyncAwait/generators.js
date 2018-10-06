// When we call a generator function it doesn't start running, we will have to iterate through it manually.
function* foo () {
    let index = 0;
    while(index < 2) {
        yield index++;
    }
}

const bar = foo();

console.log(bar.next());
console.log(bar.next());
console.log(bar.next());

