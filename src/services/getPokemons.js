
import apiPokemon from "../api/apiPokemons.js";

export const getPokemon = async (id) => {
  const response = await apiPokemon.get(`/pokemon/${id}?language=es`);
  const pokemon = response.data;
  return pokemon;
};

export const getPokemonSpecies = async (speciesName) => {
  const response = await apiPokemon.get(`/pokemon-species/${speciesName}?language=es`);
  return response.data;
};

// Funciones adicionales para obtener otros detalles, si es necesario
export const getEvolutionChain = async (url) => {
  const response = await apiPokemon.get(url);
  return response.data;
};
