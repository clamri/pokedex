export const state = () => ({
    loaded: false,
    count: null,
    next: null,
    previous: null,
    list: [],
});

export const mutations = {
    setLoading(state) {
        state.loaded = false;
    },
    setList(state, { count, next, previous, pokemons }) {
        state.list = [...pokemons];

        state.loaded = true;
        state.count = count;
        state.next = next;
        state.previous = previous;
    },
    concatList(state, { next, previous, pokemons }) {
        state.list = [...state.list, ...pokemons];

        state.loaded = true;
        state.next = next;
        state.previous = previous;
    },
};

export const actions = {
    async getAll({ commit, state, dispatch }) {
        if (!state.loaded) {
            commit('setLoading');
            const data = await this.$PokemonService.getAll();

            const pokemons = await dispatch('getDetailledPokemons', data);
            commit('setList', { ...data, pokemons });
        }
    },
    async getMore({ commit, state, dispatch }) {
        if (state.loaded && state.next) {
            commit('setLoading');
            const data = (await this.$axios.get(state.next))?.data;

            const pokemons = await dispatch('getDetailledPokemons', data);
            commit('concatList', { ...data, pokemons });
        }
    },
    async getOne({ state }, { name }) {
        const pokemon = state.list ? state.list.find(_ => _.name === name) : null;
        if (pokemon) {
            return pokemon;
        } else {
            const pokemon = await this.$PokemonService.getOne(name);
            return {
                id: pokemon.id,
                order: pokemon.order,
                name: pokemon.name,
                sprite: pokemon.sprites.other['official-artwork'].front_default,
                defaultType: pokemon.types[0].type.name,
                types: pokemon.types,
            };
        }
    },

    async getDetailledPokemons({ }, { results }) {
        const promisesArray = results.map(async result => (await this.$axios.get(result.url)).data);
        return (await Promise.all(promisesArray)).map(pokemon => {
            return {
                id: pokemon.id,
                order: pokemon.order,
                name: pokemon.name,
                sprite: pokemon.sprites.other['official-artwork'].front_default,
                defaultType: pokemon.types[0].type.name,
                types: pokemon.types,
            }
        });
    }
};
