// src/composables/usePokemons.js
import { ref } from 'vue';
import { getPokemon, getPokemonSpecies, getEvolutionChain } from '../services/getPokemons';

// funcion composable para llevar los datos de los pokemones a las vistas.
export function usePokemons() {
   //constantes reactivas
  const pokemons = ref([]);
  const selectedPokemon = ref(null);
  const evolutions = ref([]);
  
  // Función para traer los datos de los pokemones para la lista 
  const fetchPokemonList = async () => {
    for (let i = 1; i <= 1302; i++) { 
      const pokemonData = await getPokemon(i);
      pokemons.value.push({
        id: pokemonData.id,
        nombre: pokemonData.name,
        tipo: pokemonData.types.map(t => t.type.name).join(', '),
      });
    }
  };

  // Función para traer los datos de los pokemones para el detalle
  const fetchPokemonDetails = async (id) => {
    const pokemonData = await getPokemon(id);
    const speciesData = await getPokemonSpecies(pokemonData.species.name);
    
    selectedPokemon.value = {
      id: pokemonData.id,
      nombre: pokemonData.name,
      imagen: pokemonData.sprites.other['official-artwork'].front_default,
      tipo: pokemonData.types.map(t => t.type.name).join(', '),
      habitat: speciesData.habitat?.name || 'Desconocido',
      habilidades: pokemonData.abilities.map(a => a.ability.name),
      estadisticas: pokemonData.stats.map(s => ({
        nombre: s.stat.name,
        valor: s.base_stat
      }))
    };

    if (speciesData.evolution_chain) {
      const evolutionChainData = await getEvolutionChain(speciesData.evolution_chain.url);
      processEvolutionChain(evolutionChainData.chain);
    }
  };
    // Funcion que procesa los datos de las cadenas de evoluciones de los pokemones para dejar un array unidimensional.
  const processEvolutionChain = (chain) => {
    evolutions.value = [];
    let current = chain;
    while (current) {
      evolutions.value.push({
        nombre: current.species.name,
        url: current.species.url
      });
      current = current.evolves_to[0];
    }
  };

  return {
    pokemons,
    selectedPokemon,
    evolutions,
    fetchPokemonList,
    fetchPokemonDetails
  };
}
