import PokemonFormSearch from './PokemonFormSearch.vue';

import store from '@/.storybook/store';
import i18n from '@/.storybook/i18n';

export default {
  title: 'Pokemon/PokemonFormSearch',
  component: PokemonFormSearch,
  argTypes: { onFound: { action: 'found' }, onError: { action: 'error' } },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PokemonFormSearch },
  template: '<pokemon-form-search @found="onFound" @error="onError" v-bind="$props" />',
  store: store,
  i18n: i18n
});

export const Default = Template.bind({});
Default.args = {
};