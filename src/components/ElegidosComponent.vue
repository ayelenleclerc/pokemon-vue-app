<template>
    <div>
        <h2>Pokemones Elegidos</h2>
        <div v-if="selectedPokemons.length">
            <div v-for="pokemon in selectedPokemons" :key="pokemon.id" class="p-card">
                <Card>
                    <template #title>{{ pokemon.nombre }}</template>
                    <img :src="pokemon.imagen" alt="Pokemon Image" />
                    <p>Tipo: {{ pokemon?.tipo }}</p>
                    <p>Hábitat: {{ pokemon.habitat }}</p>
                    <Button label="Ver Detalles" @click="viewPokemonDetails(pokemon)" />
                </Card>
            </div>
        </div>
        <p v-else>No se han seleccionado pokemones.</p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';
import Card from 'primevue/card';
import Button from 'primevue/button';


const store = useSelectedPokemonsStore();
const selectedPokemons = store.selected;


const router = useRouter();


const viewPokemonDetails = (pokemon) => {
    router.push({ name: 'PokemonElegido', params: { id: pokemon.id } });
};
</script>

<style scoped>
.p-card {
    margin: 1rem;
}
</style>