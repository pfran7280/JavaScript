let character = {

    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coord: {
        lat: 30.034,
        LNG: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    addres: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    }

};

console.log('Name: ', character.name);

console.log(character['coord']['lat']);
console.log(character.coord.lat);
console.log(character.suits.length);

const x = 'alive';
console.log(character[x]);

// More details

delete character.age;
character.inmortal = true;

console.log({character})

const entriesPares = Object.entries( character ); // to array
console.log( entriesPares );

Object.freeze( character ); // block attributes, you cannot modified directly properties but you change the properties of the attribute for example addres 
character.addres.location = 'Spain';
character.money = 10000;

console.log(character);

const properties = Object.getOwnPropertyNames( character ); // is a array
console.log(properties);

const values = Object.values( character ); // get values
console.log( values );

