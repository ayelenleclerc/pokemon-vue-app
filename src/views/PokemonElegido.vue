<template>
    <div>
        <h1>Pokémon Elegidos</h1>
        <div class="pokemon-cards">
            <Card v-for="pokemon in selectedPokemons" :key="pokemon.id" class="pokemon-card">
                <template #title>
                    {{ pokemon.nombre }}
                </template>
                <template #content>
                    <img :src="pokemon.imagen" :alt="pokemon.nombre" class="pokemon-img" />
                    <p><strong>Tipo:</strong>

                        {{ Array.isArray(pokemon.tipo) ? pokemon.tipo.join(', ') : pokemon.tipo }}
                    </p>
                    <p><strong>Hábitat:</strong> {{ pokemon.habitat }}</p>
                    <p><strong>Habilidades:</strong> {{ pokemon.habilidades.join(', ') }}</p>
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

<script>
import { useSelectedPokemonsStore } from '../stores/selectedPokemons';
import { Card, Button } from 'primevue';

export default {
    components: {
        Card,
        Button,
    },
    setup() {
        const selectedPokemonsStore = useSelectedPokemonsStore();
        const selectedPokemons = selectedPokemonsStore.selected;
        const verEvolucion = (evolucion) => {
            console.log('Ver evolución de:', evolucion);
        };

        return {
            selectedPokemons,
            verEvolucion,
        };
    },
};
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