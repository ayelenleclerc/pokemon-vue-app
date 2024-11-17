<template>
    <ProgressSpinner v-if="pokemons.length === 0" />

    <DataTable :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem">
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="tipo" header="Tipo" />
        <Column header="Detalle">
            <template #body="{ rowData }">
                <Button @click="openDialog(rowData.id)">Ver Detalle</Button>
            </template>
        </Column>
    </DataTable>

    <DialogComponent v-if="showDialog" :id="selectedId" @close="closeDialog" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePokemons } from '../composables/usePokemon';
import DialogComponent from './DialogComponent.vue';

import { defineEmits } from 'vue';
const { pokemons, fetchPokemonList } = usePokemons();


const showDialog = ref(false);
const selectedId = ref(null);



const emit = defineEmits(['openDialog']);

const openDialog = (id) => {

    emit('openDialog', id);
};

onMounted(fetchPokemonList);

const handleOpenDialog = (id) => {
    selectedId.value = id;
    showDialog.value = true;
};

const closeDialog = () => {
    showDialog.value = false;
};
</script>

<style scoped>
.btn {
    background-color: rgba(94, 224, 164, 0.589);
    color: black;
    border-radius: 10px;
    padding: 0.5em;
    cursor: pointer;
    border: 0;
    width: 200px;
    margin: 0.5em;
}
</style>