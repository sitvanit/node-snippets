require('console.table');

const niceJson = {a: 1, b: 2, c: 3};

// You can pass more than one parameter to these methods. Each parameter is evaluated and concatenated in a string
// delimited by the space, but in case of objects or arrays you can navigate between their properties.

/** log levels **/
console.log("log", niceJson, new Date());   // log { a: 1, b: 2, c: 3 } 2018-07-20T19:41:24.117Z
console.error("log", niceJson, new Date()); // log { a: 1, b: 2, c: 3 } 2018-07-20T19:41:24.117Z
console.warn("log", niceJson, new Date());  // log { a: 1, b: 2, c: 3 } 2018-07-20T19:41:24.117Z
console.info("log", niceJson, new Date());  // log { a: 1, b: 2, c: 3 } 2018-07-20T19:41:24.117Z
console.log('\n');

/** console.group **/
async function doSomething(obj) {
    console.group('doSomething Profile');
    const _data = new Date();
    console.log('evaluating data: ', _data);
    const _fullName = `${obj.firstName} ${obj.lastName}`;
    console.log('fullName: ', _fullName);
    const _id = Math.random(1);
    console.log('id: ', _id);
    console.groupEnd();
}
doSomething({ firstName: "Ricardo", lastName: "Canella"});
console.log('\n');

/** console.table **/
const typeOfConsole = [
    { name: 'log', type: 'standard' },
    { name: 'info', type: 'standard' },
    { name: 'table', type: 'wow' }
];
console.table(typeOfConsole);
console.log('\n');

const mySocial = {
    facebook: true,
    linkedin: true,
    flickr: false,
    instagram: true,
    VKontaktebadoo: false
};
console.table(mySocial, ["Socials", "I've an account"]);
console.log('\n');

/** console.assert **/
function lesserThan(a, b) {
    console.assert(a < b, "a is not lesser than b");
}
lesserThan(3, 2);