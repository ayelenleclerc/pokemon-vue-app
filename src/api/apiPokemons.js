import axios from 'axios';

// Creacion de una nueva llamada a la api de pokemon, a la ruta base
const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default apiPokemon;