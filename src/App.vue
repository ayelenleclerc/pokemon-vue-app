<template>
  <MenuBar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import MenuBar from './components/MenuBar.vue';
//  importo el menu de navegacion para que sea global y se vea en todas las vistas
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>