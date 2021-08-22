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
    updateFromList(state, { index, pokemon }) {
        state.list = [...state.list.slice(0, index), pokemon, ...state.list.slice(index + 1)];
    },
    removeFromList(state, { index }) {
        state.list = [...state.list.slice(0, index), ...state.list.slice(index + 1)];
    }
};

export const actions = {
    async initTeam({ commit }, { pokemons }) {
        commit('setList', { pokemons });
    },
    async addOne({ commit, state, dispatch }, { pokemon }) {
        commit('addToList', { pokemon });
        localStorage.setItem('team', JSON.stringify(state.list));
        dispatch('shared/showSnackbar', this.$i18n.t('store.team.pokemonAddedToTeamSnackbarLabel'), {
            root: true
        });
    },
    async updateOne({ commit, state }, { index, pokemon }) {
        commit('updateFromList', { index, pokemon });
        localStorage.setItem('team', JSON.stringify(state.list));
    },
    async removeOne({ commit, state, dispatch }, { index }) {
        commit('removeFromList', { index });
        localStorage.setItem('team', JSON.stringify(state.list));
        dispatch('shared/showSnackbar', this.$i18n.t('store.team.pokemonRemovedFromTeamSnackbarLabel'), {
            root: true
        });
    },
};
