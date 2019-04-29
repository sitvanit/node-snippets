const { Readable } = require('stream');

class MyReadable extends Readable {
    constructor(data, options) {
        super(options);
        this.data = data;
    }

    _read(size) {
        if (this.data.length) {
            const chunk = this.data.slice(0, size);
            this.data = this.data.slice(size, this.data.length);

            this.push(chunk); // fills the buffer and emits 'readable'
        } else {
            this.push(null); // 'end'
        }
    }
}

module.exports = MyReadable;
