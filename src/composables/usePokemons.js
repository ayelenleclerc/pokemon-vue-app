import { ref, onMounted } from 'vue';
import { getPokemons } from '../services/getPokemons';

export const usePokemons = () => {
    const pokemons = ref([]);
    const isLoading = ref(false);

    const fetchPokemons = async (offset = 0, limit = 20) => {
        isLoading.value = true;
        pokemons.value = await getPokemons(offset, limit);
        console.log(pokemons.value);
        isLoading.value = false;
    };

    
    onMounted(() => {
        fetchPokemons();
    });

    return { pokemons, isLoading, fetchPokemons };
};