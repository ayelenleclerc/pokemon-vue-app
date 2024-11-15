<template>
    <div>
        <h1 class="title">Bienvenidos a Pokemon App</h1>
        <div class="central">
            <h3>Accede para ver el listado</h3>
            <Button label="Lista de Pokemons" @click="goToPokemonList" />
            <p>Puedes elegir a tu Pokemon favorito</p>
        </div>
        <div class="imgCentral"><img src="../assets/pikachu.svg" alt="Logo de Pokemon con leyenda: Catch them all"
                class="centralImg"></div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();


const goToPokemonList = () => {
    router.push('/pokemon-list');
}
</script>

<style scoped>
.title {
    text-align: center;
}

.central {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.imgCentral {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;

}

.centralImg {
    width: 250px;
}
</style>