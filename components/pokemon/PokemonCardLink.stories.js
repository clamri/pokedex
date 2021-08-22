import PokemonCardLink from './PokemonCardLink.vue';

import store from '@/.storybook/store';

export default {
  title: 'Pokemon/PokemonCardLink',
  component: PokemonCardLink,
  decorators: [() => ({ template: '<div style="margin-top: 5rem;"><story/></div>' })],
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PokemonCardLink },
  template: '<pokemon-card-link v-bind="$props" />',
  store: store,
});

export const Bulbasaur = Template.bind({});
Bulbasaur.args = {
  pokemon: { "id": 1, "order": 1, "name": "bulbasaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", "defaultType": "grass", "types": [{ "slot": 1, "type": { "name": "grass", "url": "https://pokeapi.co/api/v2/type/12/" } }, { "slot": 2, "type": { "name": "poison", "url": "https://pokeapi.co/api/v2/type/4/" } }], "height": 7, "species": { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon-species/1/" } }
};