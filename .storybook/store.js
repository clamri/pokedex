import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import PokemonService from "../services/pokemon.service";

PokemonService.$axios = axios;

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        pokemons: {
            namespaced: true,
            state: require("../store/pokemons.js").state,
            getters: require("../store/pokemons.js").getters,
            actions: require("../store/pokemons.js").actions,
            mutations: require("../store/pokemons.js").mutations
        },

        shared: {
            namespaced: true,
            state: require("../store/shared.js").state,
            getters: require("../store/shared.js").getters,
            actions: require("../store/shared.js").actions,
            mutations: require("../store/shared.js").mutations
        },

        team: {
            namespaced: true,
            state: require("../store/team.js").state,
            getters: require("../store/team.js").getters,
            actions: require("../store/team.js").actions,
            mutations: require("../store/team.js").mutations
        },
    }
});

store.$axios = axios;
store.$PokemonService = PokemonService;

export default store