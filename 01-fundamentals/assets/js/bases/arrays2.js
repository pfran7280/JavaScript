

let games = ['Zelda', 'Mario', 'Metroid', 'Yugioh'];

console.log(games.length)

let first = games[2 - 2]; 

let last = games[ games.length - 1 ];

console.log({first, last});

games.forEach( (value, index, arr) => {
    console.log({value, index, arr})
});

let newGame = games.push('F-zero');
console.log(newGame,games);

newGame = games.unshift('Fire emblem');
console.log(newGame,games);

let deleteGame = games.pop();

console.log(deleteGame,games);

let pos = 1;

let deletedGames = games.splice(pos, 2);
console.log( {deletedGames, games} );

let metroidIndex = games.indexOf('Metroid');
console.log({metroidIndex});