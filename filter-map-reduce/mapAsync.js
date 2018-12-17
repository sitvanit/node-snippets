const functionWithPromise = item => Promise.resolve('ok');
const asyncFunction = async item => await functionWithPromise(item);

const getData = async list => await Promise.all(list.map(item => asyncFunction(item)));

const list = ['a', 'b'];
getData(list).then(data => console.log(data));

