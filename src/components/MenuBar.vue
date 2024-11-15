<!-- Creo el menu de navegación -->
<template>
    <header class="header">
        <img class="logo" src="../assets/pokemon-Logo.svg" alt="Logo de Pokemon">
        <div>
            <ul class="nav">
                <li class="item">
                    <RouterLink class="link pi pi-home" to="/"> Inicio</RouterLink>
                </li>
                <li class="item">
                    <RouterLink class="link pi pi-list" to="/pokemon-list"> Lista</RouterLink>
                </li>
                <li class="item">
                    <RouterLink class="link pi pi-star" to="/pokemon-elegido"> Elegidos</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 15px;


}

.logo {
    width: 100px;
}

.nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
}

.item {
    width: 100px;
    align-items: center;
    margin: 0 30px;
}

.link {

    font-size: 18px;
    color: #fff;
    text-decoration: none;
}
</style>