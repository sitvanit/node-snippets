const _ = require('lodash');

const signature = {
    "id": "34d806de-c8ec-43df-8089-7cbdde016ac2",
    "urn": "urn:adsk.checklists.cs.instance.signature:efca79bd-3865-4e68-88d5-30d982175c7d/41",
    "instanceId": 1,
    "index": 0,
    "requiredBy": "Architect",
    "isRequired": true,
    "definedAt": "Template",
    "requiredName": "Eithan",
    "requiredCompany": "IKEA",
    "createdAt": "2018-11-10T13:00:36.615Z", // The moment the record was saved in the DB
    "updatedAt": "2018-11-10T13:24:36.615Z", // The moment of the update
    "deletedAt": null, // The moment the sign was deleted
    "submittedBy": "2JYRM4PAVTZA",
    "instanceRevision": "0",
    "correlationId": "76b72", // uuid
    "formalSignature": {
    "graphic": {
        "type": "SVG",
            "content": "sdfd", // an entire SVG content as a string
            "permittedAttributes": ["type", "content"],
            "permittedActions": ["canEdit"]
    },
    "instanceSignedRevision": "fer8fd3", // shortId
    "signedName": "Carlos",
        "signedCompany": "IKEA",
        "signedAt": "2018-11-10T13:00:36.615Z", // The moment the user signed
        "isSigned": true,
        "permittedAttributes": ["graphic", "instanceSignedRevision", "signedName", "signedCompany", "signedAt"],
        "permittedActions": ["canEdit"]
},
    "permittedAttributes": ["requiredName", "requiredCompany", "correlationId", "id"],
    "permittedActions": ["canEdit"]
}

Object.assign(signature, signature.formalSignature, signature.formalSignature.graphic);
delete signature.formalSignature;
delete signature.graphic;
console.log(signature);