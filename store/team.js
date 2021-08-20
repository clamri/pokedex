export const state = () => ({
    list: [],
});

export const mutations = {
    addToList(state, { pokemon }) {
        state.list = [...state.list, ...[pokemon]];
    },
};

export const actions = {
    async addOne({ commit }, { pokemon }) {
        commit('addToList', { pokemon });
    },
};
