<!-- Creo el componente ElegidosComponent para mostrar los pokemones elegidos -->
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

<script>
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';
import { useRouter } from 'vue-router';
import { Card, Button } from 'primevue';
//  importo nuevamente el card y el boton, porque no me los tomaba de la importacion global

// exporto los componentes para que los utilice en la vista de elegidos.
export default {
    components: { Card, Button },
    setup() {
        const store = useSelectedPokemonsStore();
        const router = useRouter();

        const viewPokemonDetails = (pokemon) => {
            router.push({ name: 'PokemonElegido', params: { id: pokemon.id } });
        };

        return {
            selectedPokemons: store.selected,
            viewPokemonDetails
        };
    }
};
</script>

<style scoped>
.p-card {
    margin: 1rem;
}
</style>