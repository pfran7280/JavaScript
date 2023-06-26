

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nameUser: 'Juan' };
let ana = { ...juan };
ana.nameUser = 'Ana';

console.log({ juan, ana });

const changeName = ({ ...person }) => {
    person.nameUser = 'Tony';
    return person;
}

let peter = { nameUser: 'Peter' };
let tony  = changeName( peter );

console.log({ peter,tony });

// Array

const fruits = [ 'apple', 'pear', 'pineapple' ];

// const otherFruits = [ ...fruits ];

console.time( 'slice' );
const otherFruits = fruits.slice();
console.timeEnd( 'slice' );

console.time( 'spread' );
const otherFruits2 = [ ...fruits ];
console.timeEnd( 'spread' );

otherFruits.push( 'peach' );

console.table({ fruits, otherFruits });