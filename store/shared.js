export const state = () => ({
    snackbar: {
        isVisible: false,
        label: null,
    },
    helloModal: {
        isVisible: false
    }
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
    showHelloModal(state) {
        state.helloModal.isVisible = true;
    },
    hideHelloModal(state) {
        state.helloModal.isVisible = false;
    },
};

export const actions = {
    showSnackbar({ commit }, payload) {
        commit('showSnackbar', payload);
    },
    hideSnackbar({ commit }) {
        commit('hideSnackbar');
    },
    showHelloModal({ commit }) {
        commit('showHelloModal');
    },
    hideHelloModal({ commit }) {
        commit('hideHelloModal');
    },
};
