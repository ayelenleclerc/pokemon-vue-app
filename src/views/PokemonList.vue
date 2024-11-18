<template>
    <div>
        <DataTable v-if="!isLoading" :value="pokemons" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem">

            <Column field="id" header="ID" />
            <Column field="name" header="Nombre" />
            <Column field="types" header="Tipo" />
            <Column header="Detalle">
                <template #body="slotProps">
                    <Button @click="showDetails(slotProps.rowData)" label="Ver Detalle" />
                </template>
            </Column>
        </DataTable>
        <ProgressSpinner v-else />
        <DialogComponent v-if="selectedPokemon" :pokemon="selectedPokemon" @close="selectedPokemon = null" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePokemons } from '../composables/usePokemons';
import DialogComponent from '../components/DialogComponent.vue';

const { pokemons, isLoading, fetchPokemons } = usePokemons();
const selectedPokemon = ref(null);


const showDetails = (pokemon) => {
    selectedPokemon.value = pokemon;
};
onMounted(fetchPokemons)
</script>