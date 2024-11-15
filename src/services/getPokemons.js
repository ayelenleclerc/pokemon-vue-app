
import apiPokemon from "../api/apiPokemons.js";


export const getPokemon = async (id) => {
  const response = await apiPokemon.get(`/pokemon/${id}`);
  const pokemon = response.data;
  return pokemon;
};


export const getPokemonSpecies = async (speciesName) => {
  const response = await apiPokemon.get(`/pokemon-species/${speciesName}`);
  return response.data;
};


export const getEvolutionChain = async (url) => {
  const response = await apiPokemon.get(url);
  return response.data;
};
