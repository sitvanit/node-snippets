const urn = "urn:adsk.checklists.cs.instance.item:efca79bd-3865-4e68-88d5-30d982175c7d/1";


const URN_BASE = "urn:adsk.checklists.cs";

function getUrnComponents(urn) {
    const length = 36;
    const pattern = new RegExp(`${URN_BASE}.([a-z]+)\\.?(.*):(.{${length}})\\/?(.*)`);
    const [, type, subType, containerId, objectId] = urn.split(pattern);

    return { containerId, objectId, type, subType }
}

const { containerId, objectId, type, subType }  = getUrnComponents(urn);

console.log(containerId);
console.log(type);
console.log(subType);
console.log(objectId);