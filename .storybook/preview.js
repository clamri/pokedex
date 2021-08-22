import Vue from 'vue';
import Vuex from 'vuex';

import { action } from '@storybook/addon-actions';

import BaseButton from '../components/base/BaseButton.vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseLinkHoveredUnderline from '../components/base/BaseLinkHoveredUnderline.vue';
import BaseLoader from '../components/base/BaseLoader.vue';
import BaseModal from '../components/base/BaseModal.vue';
import PokemonCardButton from '../components/pokemon/PokemonCardButton.vue';
import PokemonCardLink from '../components/pokemon/PokemonCardLink.vue';
import PokemonEvolutions from '../components/pokemon/PokemonEvolutions.vue';
import PokemonFormSearch from '../components/pokemon/PokemonFormSearch.vue';
import TeamButtonAddPokemon from '../components/team/TeamButtonAddPokemon.vue';
import TeamFormSurname from '../components/team/TeamFormSurname.vue';
import TeamModalPokemon from '../components/team/TeamModalPokemon.vue';
import TeamSection from '../components/team/TeamSection.vue';

Vue.use(Vuex);

Vue.component('base-button', BaseButton);
Vue.component('base-input', BaseInput);
Vue.component('base-link-hovered-underline', BaseLinkHoveredUnderline);
Vue.component('base-loader', BaseLoader);
Vue.component('base-modal', BaseModal);
Vue.component('pokemon-card-button', PokemonCardButton);
Vue.component('pokemon-card-link', PokemonCardLink);
Vue.component('pokemon-evolutions', PokemonEvolutions);
Vue.component('pokemon-form-search', PokemonFormSearch);
Vue.component('team-button-add-pokemon', TeamButtonAddPokemon);
Vue.component('team-form-surname', TeamFormSurname);
Vue.component('team-modal-pokemon', TeamModalPokemon);
Vue.component('team-section', TeamSection);

Vue.component('nuxt-link', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
});

export const parameters = {
    backgrounds: {
        default: 'default',
        values: [
            {
                name: 'default',
                value: '#f6f8fc',
            },
            {
                name: 'white',
                value: '#fff',
            },
            {
                name: 'primary',
                value: '#B39AFE',
            },
        ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};