const mime = require('mime');

console.log(mime.getExtension('image/jpeg')); // jpeg
console.log(mime.getExtension('image/jpg')); // null
console.log(mime.getType('jpg')); // image/jpg


