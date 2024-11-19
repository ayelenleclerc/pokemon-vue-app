<template>
    <div>
        <DataTable v-if="!isLoading || pokemons.length > 0" :value="pokemons" paginator :rows="10"
            :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">

            <Column field="id" header="ID" style="width: 25%" />
            <Column field="name" header="Nombre" style="width: 25%" />
            <Column field="types" header="Tipo" style="width: 25%" />
            <Column header="Detalle" style="width: 25%">
                <template #body="slotProps">
                    <Button icon="pi pi-search" severity="contrast" rounded aria-label="Star"
                        @click="selectToPokemon(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>
        <ProgressSpinner v-else />
        <DialogComponent v-model:visible="visible">
            <template #body>
                <div class="modal-body">
                    <div class="flex justify-content-center" style="width: 100%">
                        <p class="text-left font-bold">
                            {{ pokemonName.toUpperCase() }}
                        </p>
                    </div>
                    <div class="flex justify-content-center" style="width: 100%">
                        <img :src="pokemonImage" alt="Pokemon Image" />
                    </div>
                    <div class="flex justify-content-center" style="width: 100%">
                        <p class="text-left">
                            Tipo: {{ pokemonTypes }}
                        </p>
                        <p class="text-left">
                            Habilidades: {{ pokemonHabilidades }}
                        </p>
                        <p class="text-left">
                            Estadisticas: {{ pokemonEstadisticas }}
                        </p>
                    </div>
                </div>
                <div>
                    <Button label="Elegir" icon="pi pi-check" class="p-button-text" @click="elegir(pokemonId)" />
                    <Button label="Cerrar" icon="pi pi-times" class="p-button-text" @click="visible = false"
                        severity="danger" />
                </div>
            </template>
        </DialogComponent>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePokemons } from '../composables/usePokemons';
import DialogComponent from './DialogComponent.vue';
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';

const store = useSelectedPokemonsStore();


const { pokemons,
    isLoading,
    fetchPokemons } = usePokemons();

const visible = ref(false);
const pokemonName = ref('');
const pokemonImage = ref('');
const pokemonTypes = ref('');
const pokemonId = ref('');

const pokemonHabilidades = ref('');
const pokemonEstadisticas = ref('');
const selectToPokemon = (id) => {

    const selectedPokemon = pokemons.value.find(pokemon => pokemon.id === id);

    if (selectedPokemon) {
        pokemonName.value = selectedPokemon.name;
        pokemonImage.value = selectedPokemon.images;
        pokemonTypes.value = selectedPokemon.types;
        pokemonHabilidades.value = selectedPokemon.habilidades;
        pokemonEstadisticas.value = selectedPokemon.estadisticas.map(pokemon => pokemon.nombre + ': ' + pokemon.valor + "\n").join(', ');
        pokemonId.value = selectedPokemon.id;
        visible.value = true;

    }
}
onMounted(fetchPokemons);
const elegir = (id) => {
    const selectedPokemon = pokemons.value.find(pokemon => pokemon.id === id);
    if (selectedPokemon) {
        console.log('Pokemon elegido:', selectedPokemon.id);
        store.addPokemon(selectedPokemon);
        visible.value = false;
    }
}
</script>
<style lang="scss" scoped></style>