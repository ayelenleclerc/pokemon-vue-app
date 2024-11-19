import { ref } from 'vue';
import { getPokemons, getPokemonsById } from '../services/getPokemons';

export const usePokemons = () => {
    const pokemons = ref([]); 
    const isLoading = ref(false); 
    const error = ref(null); 


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

    return {
        pokemons,
        isLoading,
        error,
        fetchPokemons,
       
    };
};
