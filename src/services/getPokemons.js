import apiPokemon from '../api/apiPokemons';
 export const getPokemons = async () => {
     try {
    
        const response = await apiPokemon.get(`/pokemon`);
        const parsed = response.data.results.map((pokemon, index) => ({
            id: index + 1,
            name: pokemon.name,
            url: pokemon.url
        }))
        const pokemons = await Promise.all(parsed.map(async (pokemon) => await getPokemonsById(pokemon.id)));
      
        const stats = pokemons.map((pokemon) => pokemon.stats);
        const height = pokemons.map((pokemon) => pokemon.height);
        const weight = pokemons.map((pokemon) => pokemon.weight);
        const habitat = pokemons.map((pokemon) => pokemon.habitat);
        const habilidades = pokemons.map((pokemon) => pokemon.abilities.map((ability) => ability.ability.name).join(', '));
        const types = pokemons.map((pokemon) => pokemon.types.map((type) => type.type.name).join(', '));
        const estadisticas = pokemons.map((pokemon) => pokemon.stats.map((stat) => ({ nombre: stat.stat.name, valor: stat.base_stat })));
        const images = pokemons.map((pokemon) => pokemon.sprites.front_default);
         const parsedPokemons = pokemons.map((pokemon, index) => ({
             ...pokemon,
             id: index + 1,
             name: pokemon.name,
             url: pokemon.url,
             images: images[index],
            types: types[index],
            stats: stats[index],
            height: height[index],
            weight: weight[index],
            habitat: habitat[index],
            habilidades: habilidades[index],	
            estadisticas: estadisticas[index]
        }));
        console.log(parsedPokemons);
        return parsedPokemons;
    } catch (error) {
        console.error('Error al obtener Pokémon:', error);
        return [];
    }
};

const getPokemonsById = async (id) => {
    try {
        const response = await apiPokemon.get(`/pokemon/${id}`);
        const pokemon = response.data;
       
        return pokemon;
    } catch (error) {
        console.error('Error al obtener Pokémon por ID:', error);
        return null;
    }
};
