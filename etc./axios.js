const axios = require('axios');

async function getApps() {
    let apps;
    try {
        apps = await axios.get('https://apps.autodesk.com/api/v1/apps?store=BIM360&isDetail=true&isLive=true');
    } catch (e) {
        console.log(e);
    }
    return apps;
}

getApps().then();
