//  creo el Store para gestionar el estado global de los pokemons elegidos para mostrarlos en la vista PokemonElegido, y guardarlos en el localStorage
import { defineStore } from 'pinia';

export const useSelectedPokemonsStore = defineStore('selectedPokemons', {
  state: () => ({
    selected: JSON.parse(localStorage.getItem('selectedPokemons')) || []
  }),
  actions: {
   addPokemon(pokemon) {
      // Comprobamos si el pokemon ya existe en la lista
      const exists = this.selected.some(p => p.id === pokemon.id); // Asumimos que 'id' es el identificador único de cada pokemon

      if (!exists) {
        // Si no existe, lo agregamos a la lista
        this.selected.push(pokemon);
        this.saveToLocalStorage();
      } else {
        console.log('Este Pokémon ya ha sido seleccionado');
      }
      },
    saveToLocalStorage() {
      // Guarda los Pokémon elegidos en localStorage
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
