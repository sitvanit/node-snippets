const MyReadable = require('./1MyReadable');
const MyWritable = require('./3MyWritable');

const data = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

const readable = new MyReadable(data, { objectMode:true, highWaterMark: 2 });
const writable = new MyWritable({ objectMode:true });

readable.pipe(writable);
