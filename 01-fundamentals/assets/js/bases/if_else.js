

let a = 5;

if ( a > 10 ) {
    console.log('A es mayor a 10')
} else {
    console.log('A es mejor que 10')
}

// console.log('Fin de programa');

const today = new Date();

let day = today.getDay();

console.log({day});

if ( day === 0 ) {
    console.log( 'Domingo' );
} else  if ( day === 1 ) {
    console.log('Monday')
    // if (day === 1) {
    //     console.log( 'Monday' );
    // } else {
    //     console.log('its not Monday or Sunday')
    // }
} else if ( day === 2 ) {
    console.log( 'Tuesday' );
}

// don't use If Else o Switch

let today2 = 2;

let weekdays = [ 
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Fryday',
    'Saturday']

console.log(weekdays[today2] || 'day not valid');

const daysLyrics = {
    0:()=>'Sunday-0', 
    1:()=>'Monday-1', 
    2:()=>'Tuesday-2', 
    3:()=>'Wednesday-3', 
    4:()=>'Thursday-4', 
    5:()=>'Fryday-5', 
    6:()=>'Saturday-6'
}

console.log( daysLyrics[today2]() || 'day not valid');