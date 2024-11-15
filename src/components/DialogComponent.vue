<!-- Creo el componente Dialog para el Modal de los detalles del pokemon -->
<template>
    <Dialog v-model:visible="visible" header="Detalles del Pokémon">
        <h3>{{ pokemon?.nombre }}</h3>
        <img :src="pokemon?.imagen" alt="Pokemon Image" class="pokemon-img" />
        <p>Tipo: {{ pokemon?.tipo }}</p>
        <p>Habitat: {{ pokemon?.habitat }}</p>
        <Button class="btn" label="Elegir" icon="pi pi-check" @click="choosePokemon" />
        <Button class="btn" label="Cancelar" icon="pi pi-trash" severity="danger" @click=" $emit('close')" />
    </Dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { usePokemons } from '../composables/usePokemon';
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';

//  Uso ref para guardar el pokemon seleccionado , watch para escuchar los cambios en el id y emit para emitir el evento close
export default {
    props: ['id'],
    setup(props, { emit }) {
        const store = useSelectedPokemonsStore();
        const { fetchPokemonDetails, selectedPokemon } = usePokemons();
        const visible = ref(true);

        watch(() => props.id, async () => {
            await fetchPokemonDetails(props.id);
        }, { immediate: true });

        const choosePokemon = () => {
            store.addPokemon(selectedPokemon.value);
            emit('close');
        };

        return { pokemon: selectedPokemon, visible, choosePokemon };
    }
};
</script>

<style scoped>
.pokemon-img {
    width: 50%;
}

.btn {

    color: black;
    border-radius: 10px;
    padding: 0.5em;
    cursor: pointer;
    border: 0;
    width: 35%;
    margin: 0.5em;
}
</style>