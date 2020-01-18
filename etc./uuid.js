const uuid = require('uuid');

const removeDashes = uuid => uuid.replace(/-/g, '');
const addDashes = uuid => uuid.substr(0,8)+"-"+uuid.substr(8,4)+"-"+uuid.substr(12,4)+"-"+uuid.substr(16,4)+"-"+uuid.substr(20);

const id = uuid();
const idWithoutDashes = removeDashes(id);
const idWithDashes = addDashes(idWithoutDashes);
const idWithDashesTemplateString = `${idWithoutDashes.substr(0, 8)}-${idWithoutDashes.substr(8, 4)}-${idWithoutDashes.substr(12, 4)}-${idWithoutDashes.substr(16, 4)}-${idWithoutDashes.substr(20)}`;

console.log(id);
console.log(typeof id);
console.log(idWithoutDashes);
console.log(idWithDashes);
console.log(idWithDashesTemplateString);
console.log('---------');
console.log(addDashes('05cc9675947549d5a5c9f54df27751c6'));
