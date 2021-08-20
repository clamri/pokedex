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
    setList(state, { count, next, previous, results }) {
        state.list = [...results];

        state.loaded = true;
        state.count = count;
        state.next = next;
        state.previous = previous;
    },
    concatList(state, { next, previous, results }) {
        state.list = [...state.list, ...results];

        state.loaded = true;
        state.next = next;
        state.previous = previous;
    },
};

export const actions = {
    async getAll({ commit, state }) {
        if (!state.loaded) {
            commit('setLoading');
            const data = await this.$PokemonService.getAll();
            commit('setList', data);
        }
    },
    async getMore({ commit, state }) {
        if (state.loaded && state.next) {
            commit('setLoading');
            const data = (await this.$axios.get(state.next))?.data;
            commit('concatList', data);
        }
    },
    async getOne({ state }, { name }) {
        const pokemon = state.list ? state.list.find(_ => _.name === name) : null;
        if (pokemon) {
            return pokemon;
        } else {
            return await this.$PokemonService.getOne(name);
        }
    },
};
