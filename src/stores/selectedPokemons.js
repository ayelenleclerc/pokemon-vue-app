
import { defineStore } from 'pinia';

export const useSelectedPokemonsStore = defineStore('selectedPokemons', {
  state: () => ({
    selected: JSON.parse(localStorage.getItem('selectedPokemons')) || []
  }),
  actions: {
   addPokemon(pokemon) {

      const exists = this.selected.some(p => p.id === pokemon.id); 

      if (!exists) {

        this.selected.push(pokemon);
        this.saveToLocalStorage();
      } else {
        console.log('Este Pokémon ya ha sido seleccionado');
      }
      },
    saveToLocalStorage() {

      localStorage.setItem('selectedPokemons', JSON.stringify(this.selected));
    },
    loadFromLocalStorage() {
      const savedPokemons = JSON.parse(localStorage.getItem('selectedPokemons'));
      if (savedPokemons) {
        this.selected = savedPokemons;
      }
    }
  }
});
