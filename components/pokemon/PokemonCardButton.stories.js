import PokemonCardButton from './PokemonCardButton.vue';

export default {
  title: 'Pokemon/PokemonCardButton',
  component: PokemonCardButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PokemonCardButton },
  template: '<pokemon-card-button @click="onClick" v-bind="$props" />',
});

export const Pikachu = Template.bind({});
Pikachu.args = {
  pokemon: {
    name: "pikachu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    defaultType: "electric"
  }
};

export const PikachuDisabled = Template.bind({});
PikachuDisabled.args = {
  pokemon: {
    name: "pikachu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    defaultType: "electric",
  },
  disabled: true
};