
//Enter a website to see if it is open or not


const currentTime = 10;
const day         = 1;

let openingTime;
let msg;

if ( [0,6].includes( day ) ) {
    console.log(' weekend ');
    openingTime = 9;
} else {
    console.log( 'Day of the week' );
    openingTime = 11;
}

openingTime = ( [0,6].includes( day ) ) 
    ? 9 
    : 11;

msg = ( currentTime >= openingTime  )
    ? msg = `'It's open'`
    : msg = `'It's close'`;


console.log(({ openingTime, msg }));