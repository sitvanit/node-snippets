/** Using switch case **/
function getPokemon(type) {
    let pokemon;
    switch (type) {
        case 'Water':
            pokemon = 'Squirtle';
            break;
        case 'Fire':
            pokemon = 'Charmander';
            break;
        case 'Plant':
            pokemon = 'Bulbasur';
            break;
        case 'Electric':
            pokemon = 'Pikachu';
            break;
        default:
            pokemon = 'Mew';
    }
    return pokemon;
}

console.log(getPokemon('Fire')); // Result: Charmander


/** Using object **/
const pokemonObject = {
    Water: 'Squirtle',
    Fire: 'Charmander',
    Plant: 'Bulbasur',
    Electric: 'Pikachu'
};

function getPokemonFromMap(type) {
    return pokemonObject[type] || 'Mew';
}

console.log(getPokemonFromMap('Fire'));


/** Using map **/
const pokemonMap = new Map([
    ['Water', 'Squirtle'],
    ['Fire', 'Charmander'],
    ['Plant', 'Bulbasur'],
    ['Electric', 'Pikachu']
]);

function getPokemonFromMap(type) {
    return pokemonMap.get(type) || 'Mew';
}

console.log(getPokemonFromMap('Fire')); // Result: Charmander
