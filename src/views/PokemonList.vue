<template>
    <div>
        <h2 class="title">Lista de Pokemones</h2>
        <TablaComponent :pokemons="pokemons" @openDialog="handleOpenDialog" />
        <DialogComponent v-if="showDialog" :id="selectedId" @close="showDialog = false" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TablaComponent from '../components/TablaComponent.vue';
import DialogComponent from '../components/DialogComponent.vue';
import { usePokemons } from '../composables/usePokemon';

const { pokemons, fetchPokemonList } = usePokemons();

const showDialog = ref(false);
const selectedId = ref(null);

onMounted(fetchPokemonList);

// Emitir y manejar el evento openDialog correctamente
const handleOpenDialog = (id) => {
    selectedId.value = id;
    showDialog.value = true;
};
</script>

<style scoped>
.title {
    text-align: center;
}
</style>