const request = require('request');
const URL = 'https://pokeapi.co/api/v2'

const getName = (pokemonName) => {
    const url = `${URL}/pokemon/${pokemonName}/`;
    request.get(url, callbackPokemon);
    console.log('Petición enviada');
}

const callbackPokemon = (error, response, body) => {
    if (response.statusCode === 200) {
        console.log('Petición correcta');
        const pokemon = JSON.parse(body);
        const name = pokemon.name;
        const type = pokemon.types[0].type.name;
        const id = pokemon.id;
        console.log(`Hola, soy ${name}, soy de tipo ${type} y soy el Pokémon número ${id}`)
    } else {
        console.log('Algo falló.')
        console.log(error);
    }
}
getName('kyogre');