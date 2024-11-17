<template>
    <Dialog v-model:visible="visible" header="Detalles del Pokémon">
        <h3>{{ pokemon?.nombre }}</h3>
        <img :src="pokemon?.imagen" alt="Pokemon Image" class="pokemon-img" />
        <p>Tipo: {{ pokemon?.tipo }}</p>
        <p>Hábitat: {{ pokemon?.habitat }}</p>
        <Button class="btn" label="Elegir" icon="pi pi-check" @click="choosePokemon" />
        <Button class="btn" label="Cancelar" icon="pi pi-trash" severity="danger" @click="closeDialog" />
    </Dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { usePokemons } from '../composables/usePokemon';
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';


const props = defineProps({
    id: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['close']);


const visible = ref(true);
const store = useSelectedPokemonsStore();
const { fetchPokemonDetails, selectedPokemon } = usePokemons();


watch(() => props.id, async (newId) => {
    if (newId) {
        await fetchPokemonDetails(newId);
    }
}, { immediate: true });



const choosePokemon = () => {
    store.addPokemon(selectedPokemon.value);
    closeDialog();
};

const closeDialog = () => {
    emit('close');
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