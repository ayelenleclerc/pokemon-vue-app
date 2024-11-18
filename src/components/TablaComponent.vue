<template>
    <div>
        <DataTable v-if="!isLoading || pokemons.length > 0" :value="pokemons" paginator :rows="10"
            :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">

            <Column field="id" header="ID" />
            <Column field="name" header="Nombre" />
            <Column field="types" header="Tipo" />
            <Column header="Detalle">
                <template #body="slotProps">
                    <Button icon="pi pi-search" severity="contrast" rounded aria-label="Star"
                        @click="openDialog(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>
        <ProgressSpinner v-else />
        <DialogComponent v-if="openDialogs" :id="selectedId" @close="closeDialog" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePokemons } from '../composables/usePokemons';
import DialogComponent from './DialogComponent.vue';


const { pokemons,
    isLoading,
    fetchPokemons, fetchPokemonsDetail } = usePokemons();
const openDialogs = ref(false);
const selectedId = ref('');

const selectedPokemon = ref(null);

const loadPokemon = async (id) => {
    console.log('Cargando Pokémon con ID:', id);
    selectedPokemon.value = await fetchPokemonsDetail(id);


}


const openDialog = (id) => {
    console.log('Abriendo diálogo para el Pokémon con ID:', id);
    selectedId.value = id;

    openDialogs.value = true;
}


const closeDialog = () => {
    console.log('Cerrando diálogo');
    selectedId.value = null;
};

onMounted(() =>
    fetchPokemons()
        .then(() => console.log('Lista de Pokémon cargada'))
        .catch((error) => console.error('Error al obtener la lista de Pokémon:', error)),
);
</script>
<style lang="scss" scoped></style>