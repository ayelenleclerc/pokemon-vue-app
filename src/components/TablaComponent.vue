<!-- creo la base de la tabla -->
<template>
    <DataTable :value="pokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem">
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="tipo" header="Tipo" />
        <Column header="Detalle">
            <template #body="slotProps">
                <Button class="btn" label="Ver Detalle" @click="openDialog(slotProps.data.id)" />
            </template>
        </Column>
    </DataTable>
    <DialogComponent v-if="showDialog" :id="selectedId" @close="closeDialog" />
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePokemons } from '../composables/usePokemon';
import DialogComponent from './DialogComponent.vue';

// exporto el componente Dialog para que lo use la vista de este componente.
export default {
    components: { DialogComponent },
    setup() {
        const { pokemons, fetchPokemonList } = usePokemons();
        const showDialog = ref(false);
        const selectedId = ref(null);

        onMounted(fetchPokemonList);

        const openDialog = (id) => {
            selectedId.value = id;
            showDialog.value = true;
        };

        const closeDialog = () => {
            showDialog.value = false;
        };

        return { pokemons, showDialog, selectedId, openDialog, closeDialog };
    }
};
</script>

<style scoped>
.btn {
    background-color: rgba(255, 255, 0, 0.712);
    color: black;
    border-radius: 10px;
    padding: 0.5em;
    cursor: pointer;
    border: 0;
    width: 200px;
    margin: 0.5em;
}
</style>