<template>
    <div>
        <h2 class="title">Lista de Pokemones</h2>
        <TablaComponent @openDialog="openDialog" />
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


        const openDialog = (pokemon) => {
            selectedPokemon.value = pokemon;
            showDialog.value = true;
        };


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

<style scoped>
.title {
    text-align: center;
}
</style>