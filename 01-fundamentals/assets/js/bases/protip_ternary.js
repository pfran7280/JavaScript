

// const theOldest = ( a, b ) => {
//     return ( a > b ) ? a : b;
// }

const theOldest = ( a, b ) => ( a > b ) ? a : b;

const haveMembership = ( member ) => ( member) ? '2 dollars' : '10 dollars' ;


console.log( theOldest( 10, 16 ));
console.log(haveMembership( true ));

const friend = true;
const friendArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki'
];

console.log( friendArr );

const note = 95; // +A, B

const degree = note >= 95 ? 'A+':
              note >= 90 ? 'A':
              note >= 85 ? 'B+' :
              'F';

console.log({ note, degree })
