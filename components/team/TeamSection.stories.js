import TeamSection from './TeamSection.vue';

import store from '@/.storybook/store';

export default {
  title: 'Pokemon/TeamSection',
  component: TeamSection,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TeamSection },
  template: '<team-section v-bind="$props" />',
  store: store,
});

export const Default = Template.bind({});
Default.args = {
};