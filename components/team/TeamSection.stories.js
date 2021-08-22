import TeamSection from './TeamSection.vue';

import store from '@/.storybook/store';
import i18n from '@/.storybook/i18n';

export default {
  title: 'Pokemon/TeamSection',
  component: TeamSection,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TeamSection },
  template: '<team-section v-bind="$props" />',
  store: store,
  i18n: i18n
});

export const Default = Template.bind({});
Default.args = {
};