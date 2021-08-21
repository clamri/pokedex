import BaseLoader from './BaseLoader.vue';

export default {
  title: 'Base/BaseLoader',
  component: BaseLoader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseLoader },
  template: '<base-loader v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
};