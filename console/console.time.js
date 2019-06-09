console.time('time execution');

for (let i = 0; i < 1000000; ++i) {
    const a = 1 + 1;
}

console.timeEnd('time execution'); // time execution: 2.787ms

