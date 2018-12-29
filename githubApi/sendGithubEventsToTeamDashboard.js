const request = require('request');
const Promise = require('bluebird');

const getGithubEvents = (page, repsitoryName) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: `https://git.autodesk.com/api/v3/repos/BIM360/${repsitoryName}/events?page=${page}`,
            headers: {
                'Authorization': 'token f10149e339d95d2b95099b6ceeb4463101870bea'
            }
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to servers');
            } else if (response.statusCode === 200) {
                resolve(body);
            } else {
                reject(`An unknown error has been occurred with statusCode: ${response.statusCode}`);
            }
        })
    })
};


const postGithubEvent = (event, headers) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: 'http://localhost:8000/gitevent',// 'https://adsk-git-dashboard.herokuapp.com/gitevent',
            headers,
            form: event
        }, (error, response, body) => {
            if (error) {
                reject(`Unable to connect to servers due to: ${error}`);
            } else if (response.statusCode === 201) {
                resolve(`Succeed with response: ${body}`);
            } else {
                reject(`An unknown error has been occurred with statusCode: ${response.statusCode} and errorMessage: ${response.body}`);
            }
        })
    })
};

const handleEvent = event => {
    let githubEventHeader;
    const validEvents = ['CreateEvent', 'DeleteEvent', 'PushEvent', 'PullRequestEvent', 'PullRequestReviewEvent', 'PullRequestReviewCommentEvent'];

    if (validEvents.includes(event.type)) {
        const createdAtHeader = event['created_at'];

        switch (event.type) {
            case 'CreateEvent':
                githubEventHeader = 'create';
                break;
            case 'DeleteEvent':
                githubEventHeader = 'delete';
                break;
            case 'PushEvent':
                githubEventHeader = 'push';
                break;
            case 'PullRequestEvent':
                githubEventHeader = 'pull_request';
                break;
            case 'PullRequestReviewEvent':
                githubEventHeader = 'pull_request_review';
                break;
            case 'PullRequestReviewCommentEvent':
                githubEventHeader = 'pull_request_review_comment';
        }

        Object.assign(event, event.payload, { sender: event.actor, repository: event.repo, isMigrated: true });
        delete event.actor;
        delete event.payload;
        delete event.repo;

        postGithubEvent(event, { 'x-created-at': createdAtHeader, 'x-github-event': githubEventHeader })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    }
};

const migrateGithubRepositoryData = (repositoryName) => {
    for(page = 1; page <= 10; ++page) {
        getGithubEvents(page, repositoryName)
            .then(async events => {
                const arrayEvents = JSON.parse(events);
                await Promise.map(arrayEvents, async event => {
                    handleEvent(event);
                }, {concurrency: 1});
            })
            .catch((err)  => {
                console.log(err);
            });
    }
};

const migrateGithubRepositoriesData = async () => {
    const repositories = ['issues-v2-service', 'issues_service', 'checklists-service', 'android-bim360-docs', 'ca-ui-web', 'dailylogs-service', 'issues-service-apigee-endpoint'];

    try {
        await Promise.map(repositories, async repository => {
            return migrateGithubRepositoryData(repository);
        }, {concurrency: 1});
    } catch (e) {
        console.log(e.message);
    }
};

migrateGithubRepositoriesData()
    .then(() => {
        console.log('Migration succeed')
    })
    .catch(err => {
    console.log(`Migration failed due to ${err.message}`);
    });
