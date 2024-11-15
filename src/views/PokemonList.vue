<!-- Creo la vista principal del listado  -->
<template>
    <div>
        <h2>Lista de Pokemones</h2>
        <TablaComponent @openDialog="openDialog" />

        <!-- Dialog de detalles del Pokémon -->
        <DialogComponent v-if="showDialog" :pokemon="selectedPokemon" @close="closeDialog" />
    </div>
</template>

<script>
import { ref } from 'vue';
import TablaComponent from '../components/TablaComponent.vue';
import DialogComponent from '../components/DialogComponent.vue';

export default {
    components: {
        TablaComponent,
        DialogComponent
    },
    setup() {
        const showDialog = ref(false);
        const selectedPokemon = ref(null);

        // Abre el diálogo y asigna el Pokémon seleccionado
        const openDialog = (pokemon) => {
            selectedPokemon.value = pokemon;
            showDialog.value = true;
        };

        // Cierra el diálogo
        const closeDialog = () => {
            showDialog.value = false;
            selectedPokemon.value = null;
        };

        return {
            showDialog,
            selectedPokemon,
            openDialog,
            closeDialog
        };
    }
};
</script>

<style scoped></style>