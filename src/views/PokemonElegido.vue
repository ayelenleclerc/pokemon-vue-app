<template>
    <div>
        <h1>Pokémon Elegidos</h1>
        <div class="pokemon-cards">
            <Card v-for="pokemon in selectedPokemons" :key="pokemon.id" class="pokemon-card">
                <template #title>
                    {{ pokemon.nombre }}
                </template>
                <template #content>
                    <img :src="pokemon.images" :alt="pokemon.nombre" class="pokemon-img" />
                    <p><strong>Tipo:</strong>

                        {{ Array.isArray(pokemon.tipo) ? pokemon.tipo.join(', ') : pokemon.tipo }}
                    </p>
                    <p><strong>Hábitat:</strong> {{ pokemon.habitat }}</p>
                    <p><strong>Habilidades:</strong>
                        {{ Array.isArray(pokemon.habilidades) ? pokemon.habilidades.join(', ') : pokemon.habilidades }}
                    </p>
                    <p><strong>Estadísticas:</strong></p>
                    <ul>
                        <li v-for="stat in pokemon.estadisticas" :key="stat.nombre">
                            {{ stat.nombre }}: {{ stat.valor }}
                        </li>
                    </ul>
                </template>

            </Card>
        </div>
    </div>
</template>

<script setup>
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';

const selectedPokemonsStore = useSelectedPokemonsStore();
const selectedPokemons = selectedPokemonsStore.selected;

</script>

<style scoped>
.pokemon-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.pokemon-card {
    width: 300px;
}

.pokemon-img {
    width: 100%;
}

.evoluciones {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.evolucion-card {
    width: 150px;
    text-align: center;
}
</style>