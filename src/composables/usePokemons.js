import { ref } from 'vue';
import { getPokemons, getPokemonsById } from '../services/getPokemons';

export const usePokemons = () => {
    const pokemons = ref([]); // Lista de Pokémon
    const pokemonDetail = ref(null); // Detalle de un Pokémon específico
    const isLoading = ref(false); // Indicador de carga
    const error = ref(null); // Error en caso de fallo

    // Obtener lista de Pokémon con paginación
    const fetchPokemons = async (offset = 0, limit = 20) => {
        isLoading.value = true;
        error.value = null;
        try {
            pokemons.value = await getPokemons(offset, limit);
        } catch (err) {
            console.error('Error al obtener la lista de Pokémon:', err);
            error.value = 'No se pudo cargar la lista de Pokémon.';
        } finally {
            isLoading.value = false;
        }
    };

    // Obtener detalles de un Pokémon por ID
    const fetchPokemonDetail = async (id) => {
        isLoading.value = true;
        error.value = null;
        try {
            const pokemon = pokemonDetail.value = await getPokemonsById(id);
            return pokemon;
        } catch (err) {
            console.error(`Error al obtener el Pokémon con ID ${id}:`, err);
            error.value = 'No se pudo cargar el detalle del Pokémon.';
        } finally {
            isLoading.value = false;
        }
    };

    return {
        pokemons,
        pokemonDetail,
        isLoading,
        error,
        fetchPokemons,
        fetchPokemonDetail,
    };
};
