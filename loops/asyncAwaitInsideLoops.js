/** await in for, while and for of loops **/

const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
};

const fruitsToGet = Object.keys(fruitBasket);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getNumFruit = fruit => sleep(1000).then(_ => fruitBasket[fruit]);

const forLoop = async _ => {
    console.log('start');

    for (let i = 0; i < fruitsToGet.length; ++i) {
        const numFruit = await getNumFruit(fruitsToGet[i]);
        console.log(numFruit);
    }

    console.log('end');
};

// forLoop();
// start
// 27
// 0
// 14
// end

// This behavior works with most loops (like while and for-of loops)
// But it won't work with loops that require a callback (forEach, map, filter, and reduce)


/** await in forEach **/

const forEachLoop = _ => {
    console.log('start');

    fruitsToGet.forEach(async fruit => {
        const numFruit = await getNumFruit(fruit);
        console.log(numFruit);
    });

    console.log('end');
};

forEachLoop();
// start
// end
// 27
// 0
// 14

