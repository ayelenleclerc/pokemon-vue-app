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

    padding: 15px;
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    margin-bottom: 5px;





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
    color: black;
    text-decoration: none;
}
</style>