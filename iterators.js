const myFavouriteAuthors1 = [
    'Neal Stephenson',
    'Arthur Clarke',
    'Isaac Asimov',
    'Robert Heinlein'
];

// for loop
for (let i = 0; i < myFavouriteAuthors1.length; ++i) {
    console.log('for loop: ' + myFavouriteAuthors1[i]);
}

// while loop
let i = 0;
while(i < myFavouriteAuthors1.length) {
    console.log('while loop: ' + myFavouriteAuthors1[i]);
    ++i;
}

// for-of loop
for (const author of myFavouriteAuthors1) {
    console.log('for of loop: ' + author);
}


const myFavouriteAuthors2 = {
    allAuthors: {
        fiction: [
            'Agatha Christie',
            'J. K. Rowling',
            'Dr. Seuss'
        ],
        scienceFiction: [
            'Neal Stephenson',
            'Arthur Clarke',
            'Isaac Asimov',
            'Robert Heinlein'
        ],
        fantasy: [
            'J. R. R. Tolkein',
            'J. K. Rowling',
            'Terry Prachett'
        ]
    }
};

// for (let author of myFavouriteAuthors2) {
//     console.log(author)
// }
// TypeError: myFavouriteAuthors2 is not iterable
// An iterable is a data structure that wants to make its elements accessible to the public.
// An iterator is a pointer for traversing the elements of a data structure.
