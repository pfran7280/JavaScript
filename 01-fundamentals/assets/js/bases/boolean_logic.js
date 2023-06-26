

const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}

console.warn('Not or negation ');
console.log( true );
console.log( !true );
console.log( !false );

console.log( !returnFalse() );

console.log( 'And' )
console.log( true && true );
console.log( true && false );

console.log( '===================' );
console.log( returnFalse() && returnTrue() ); // false
console.log( returnTrue() && returnFalse() ); // false

console.warn( 'OR' );
console.log( true || false );
console.log( false || false );
console.log( returnTrue() || returnFalse() ); // true
console.log( returnFalse() || returnTrue() ); // false

console.warn( 'Assignments' );

const iAmIndefined = undefined;
const iAmNull       = null;
const iAmFalse      = false;

const a1 = true && 'Hello World' && 150;
const a2 = 'Hello' && 'World' && iAmFalse;
const a3 = iAmFalse || iAmIndefined || iAmNull || 'I am not false' || true;
const a4 = iAmFalse || iAmIndefined || returnTrue() || 'I am not false' || true;

console.log({ a1 });
console.log({ a2 });
console.log({ a3 });
console.log({ a4 });