import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '@/views/PokemonView.vue'
import PokemonList from '@/views/PokemonList.vue'
import PokemonElegido from '@/views/PokemonElegido.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonView,
    },
   {
      path: '/pokemon-list',
      name: 'pokemon-list',
      component: PokemonList,
    },
   {
      path: '/pokemon-elegido',
      name: 'PokemonElegido',
      component: PokemonElegido,
    }
    
   ],
}
)

export default router
