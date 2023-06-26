


const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < cars.length ){

//     console.log(cars[i]);
//     i++;

// }

while ( cars[i] ){

    if (i === 1) {
        break;
    }

    console.log(cars[i]);
    i++;

}

console.warn( 'Do while' );
let j = 10;
do {
    console.log(cars[j]);
    j++;
} while ( cars[j] );

