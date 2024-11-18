<template>
    <Dialog :visible="dialogVisible" @hide="close">
        <template v-if="selectedPokemon">
            <h3>{{ selectedPokemon.name }}</h3>
            <p><strong>Imagen:</strong> <img :src="selectedPokemon.sprites?.front_default || 'placeholder.png'"
                    alt="Image" /></p>
            <p><strong>Tipo:</strong> {{ selectedPokemon.types?.map(type => type.type.name).join(', ') || 'Desconocido'
                }}</p>
            <p><strong>Habitat:</strong> {{ selectedPokemon.habitat }}</p>
            <Button label="Cancelar" @click="close" />
            <Button label="Elegir" @click="choosePokemon" />
        </template>
        <template v-else-if="error">
            <p>{{ error }}</p>
        </template>
        <template v-else>
            <p>Cargando datos del Pokémon...</p>
        </template>
    </Dialog>
</template>


<script setup>
import { ref, watch } from 'vue';
import { usePokemons } from '../composables/usePokemons';
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';
import { defineProps, defineEmits } from 'vue';

const id = defineProps({
    id: {
        type: Number,
        required: true
    },

});

const emit = defineEmits(['close']);

const store = useSelectedPokemonsStore();
const { fetchPokemonsDetail } = usePokemons();
const dialogVisible = ref(true);

const selectedPokemon = ref({});
const error = ref('');

watch(
    () => (id),
    async (newId) => {
        selectedPokemon.value = null;
        error.value = 'no lo encontre';

        try {
            const pokemon = await fetchPokemonsDetail(id);
            if (pokemon) {
                selectedPokemon.value = pokemon.value;
            } else {
                error.value = `No se pudo encontrar el Pokémon con ID ${newId}.`;
            }

            dialogVisible.value = true;
        } catch (err) {
            console.error(`Error al obtener los datos del Pokémon con ID ${newId}:`, err);
            error.value = `No se pudieron cargar los datos del Pokémon con ID ${newId}.`;
        }
    }
);


const close = () => {
    dialogVisible.value = false;
    emit('close');
};

const choosePokemon = () => {
    if (selectedPokemon.value) {
        store.addPokemon(selectedPokemon.value);
        emit('close');
    }
};
</script>