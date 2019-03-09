const fs = require('fs');

fs.createReadStream('file')
    .pipe(fs.createWriteStream('file-copy'));
