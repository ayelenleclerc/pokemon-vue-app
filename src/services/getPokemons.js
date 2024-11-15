
import apiPokemon from "../api/apiPokemons.js";

// Funcion para traer los datos de los pokemones
export const getPokemon = async (id) => {
  const response = await apiPokemon.get(`/pokemon/${id}`);
  const pokemon = response.data;
  return pokemon;
};

// Funcion para traer los datos de las especies
export const getPokemonSpecies = async (speciesName) => {
  const response = await apiPokemon.get(`/pokemon-species/${speciesName}`);
  return response.data;
};

// Funciones adicionales para obtener otros detalles, si es necesario
export const getEvolutionChain = async (url) => {
  const response = await apiPokemon.get(url);
  return response.data;
};
