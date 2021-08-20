import PokemonService from '~/services/pokemon.service.js';

export default (ctx, inject) => {
    if (!ctx.$axios) {
        console.error('Please make sure $axios module is added');
    } else {
        PokemonService.$axios = ctx.$axios;
    }

    inject('PokemonService', PokemonService);
};
