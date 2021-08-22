export const state = () => ({
    snackbar: {
        isVisible: false,
        label: null,
    },
});

export const mutations = {
    showSnackbar(state, payload) {
        state.snackbar.isVisible = true;
        state.snackbar.label = payload;
    },
    hideSnackbar(state) {
        state.snackbar.isVisible = false;
        state.snackbar.label = null;
    },
};

export const actions = {
    showSnackbar({ commit }, payload) {
        commit('showSnackbar', payload);
    },
    hideSnackbar({ commit }) {
        commit('hideSnackbar');
    },
};
