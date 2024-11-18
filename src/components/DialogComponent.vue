<template>
    <Dialog :visible="true" @hide="close">
        <h3>{{ pokemon.name }}</h3>
        <p><strong>Imagen:</strong> <img :src="pokemon.image" alt="Image" /></p>
        <p><strong>Tipo:</strong> {{ pokemon.types.join(', ') }}</p>
        <p><strong>Habitat:</strong> {{ pokemon.habitat }}</p>
        <Button label="Cancelar" @click="close" />
        <Button label="Elegir" @click="choosePokemon" />
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    pokemon: Object
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

const choosePokemon = () => {
    // Lógica para guardar el Pokémon elegido en Pinia
    close();
};
</script>