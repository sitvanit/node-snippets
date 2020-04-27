const { promisify } = require('util');
const sleep = promisify(setTimeout);

async function* generate() {
    yield 'hello';
    await sleep(1000);
    yield ' ';
    await sleep(1000);
    yield 'world';
}

async function consume(iterator) {
    let strings = '';
    for await (let chunk of iterator) {
        strings += chunk;
    }
    return strings;
}


consume(generate()).then(console.log);
