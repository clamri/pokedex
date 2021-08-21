export const state = () => ({
    list: [],
});

export const mutations = {
    setList(state, { pokemons }) {
        state.list = [...pokemons];
    },
    addToList(state, { pokemon }) {
        state.list = [...state.list, ...[pokemon]];
    },
};

export const actions = {
    async initTeam({ commit }, { pokemons }) {
        commit('setList', { pokemons });
    },
    async addOne({ commit, state }, { pokemon }) {
        commit('addToList', { pokemon });
        localStorage.setItem('team', JSON.stringify(state.list));
    },
};
