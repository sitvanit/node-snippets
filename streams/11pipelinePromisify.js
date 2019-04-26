const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
const Promise = require('bluebird');

const promisifiedPipeline = Promise.promisify(pipeline);

async function run() {
    try {
        await promisifiedPipeline(
            fs.createReadStream('file'),
            zlib.createGzip(),
            fs.createWriteStream('file.gz')
        );
    } catch (e) {
        console.error(e);
    }

    console.log('Pipeline succeeded.');
}

run();
