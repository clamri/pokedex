import BaseLoader from './BaseLoader.vue';

import i18n from '@/.storybook/i18n';

export default {
  title: 'Base/BaseLoader',
  component: BaseLoader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseLoader },
  template: '<base-loader v-bind="$props" />',
  i18n: i18n,
});

export const Default = Template.bind({});
Default.args = {
};