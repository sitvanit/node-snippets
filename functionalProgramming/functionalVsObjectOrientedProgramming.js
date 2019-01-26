const data = [
    {
        firstName: 'Bob',
        lastName: 'Ross',
        username: 'bob.ross',
        numFriends: 125,
        birthday: '2/23/1985',
        lastTenPosts: ['What a nice day', 'I love Kanye West']
    }
];

/** Functional Approach **/
// The functional approach is taking your raw data, passing it through a function or multiple functions, and outputting
// data that is useful to you and your project.
const getFullNames = data => data.map(person => person.lastName);

const fullNames = getFullNames(data);
console.log(fullNames);

/** Object-Oriented approach **/
// The object-oriented approach is creating objects for your data which have state and include all the information they
// need in order to generate the data that is useful to you and your project.
function initializeFriend(data) {
    return {
        fullName: `${data.firstName} ${data.lastName}`,
        getThreeRandomPosts: function() {
            // get three random posts from data.lastTenPosts
        },
        getThreeRandomPosts: function() {
            // get three random posts from this.lastTenPosts
        },
        getDaysUntilBirthday: function() {
            // use this.birthday to get the num days until birthday
        },
        greeting: function() {
            const numDays = this.getDaysUntilBirthday();
            return `Hello, this is ${this.fullName}'s data! It is ${numDays} until ${this.fullName}'s birthday!`
        }
    };
}

const objectFriends = data.map(initializeFriend);
objectFriends[0].getThreeRandomPosts();
