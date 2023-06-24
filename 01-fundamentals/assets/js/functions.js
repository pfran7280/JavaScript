

function greet(name) {
    // console.log({arguments});
    // console.log('Hello ' + name);

    return [1,2];

    // never execute after return
    console.log('I am after return');
}

const greet2 = function() {
    console.log('Hello World');
}

function greet3(name){
    console.log('hello ' + name);
}

const greetArrow = () => {
    console.log('Hello arrow');
}

greet();
greet2();
greet3( 'Fran' );

greet3('fran', 40, true, 'Costa Rica');
greetArrow();


const returnGreet = greet('fran', 40, true, 'Costa Rica');
console.log(returnGreet[0], returnGreet[1]);

function total( a,b ) {
    return a + b; 
}

console.log( total(1,2) );

const total2 = (a, b) => {
    return a + b;
}

console.log( total2(1,2) );

const total3 = (a, b) => a + b;

console.log( total3(2,2) );

function getRandom() {
    return Math.random();
}

console.log( getRandom );

let numberRandom2 = () => Math.random();

console.log( numberRandom2() );