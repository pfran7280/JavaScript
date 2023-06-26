
// function createCharacter(name, lastName) {
//     return {
//         name: name,
//         lastName: lastName
//     }
// }

// function createCharacter(name, lastName) {
//     return {
//         name,
//         lastName
//     }
// }

const createCharacter = (nameCharacter, lastName) => ({nameCharacter,lastName});


const character = createCharacter('Franklin', 'Suarez');
console.log(character);

function printArguments() {
    console.log(arguments);
}

printArguments(10,true,false,'Fran','Hello');

const printArguments2 = ( ...arguments ) => {
    // console.log(arguments);
    return arguments;
}

const argumets = printArguments2(10,true,false,'Fran','Hello');
console.log(argumets);

const [married, alive, namePerson, greet] = printArguments2(10,true,false,'Fran','Hello');

console.log({married, alive, namePerson, greet});

const {lastName:newLastName} = createCharacter('Alex','Herrera');
console.log({newLastName});

// let heroe = {

//     name: 'Tony Stark',
//     codeName: 'Ironman',
//     alive: false,
//     age: 40,
//     suits: ['Mark I', 'Mark V', 'Hulkbuster'],

// };

// const printProperties = (character) => {

//     console.log(character.name);

// }

let heroe = {

    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],

};

const printProperties = ({name,codeName,alive,age = 15,suits}) => {

    
    console.log({name});    
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({suits});

}

 
printProperties( heroe );


