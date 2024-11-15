// src/composables/usePokemons.js
import { ref } from 'vue';
import { getPokemon, getPokemonSpecies, getEvolutionChain } from '../services/getPokemons';

export function usePokemons() {
  const pokemons = ref([]);
  const selectedPokemon = ref(null);
  const evolutions = ref([]);
  
  const fetchPokemonList = async () => {
    for (let i = 1; i <= 1302; i++) { // Cambia el límite según la cantidad de pokemones
      const pokemonData = await getPokemon(i);
      pokemons.value.push({
        id: pokemonData.id,
        nombre: pokemonData.name,
        tipo: pokemonData.types.map(t => t.type.name).join(', '),
      });
    }
  };

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
