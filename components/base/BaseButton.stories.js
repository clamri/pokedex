import BaseButton from './BaseButton.vue';

import i18n from '@/.storybook/i18n';

export default {
  title: 'Base/BaseButton',
  component: BaseButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button @click="onClick" v-bind="$props" />',
  i18n: i18n,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Mon bouton',
  isLoading: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Mon bouton',
  isLoading: false,
  color: "primary",
  loaderColor: "#fff",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  ...Primary.args,
  size: "small",
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  ...Primary.args,
  isLoading: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Mon bouton',
  isLoading: false,
  color: "secondary",
  loaderColor: "#fff"
};
Secondary.parameters = {
  backgrounds: { default: 'white' }
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  ...Secondary.args,
  isLoading: true,
};
SecondaryLoading.parameters = {
  backgrounds: { default: 'white' }
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true,
};
SecondaryDisabled.parameters = {
  backgrounds: { default: 'white' }
};

export const Info = Template.bind({});
Info.args = {
  label: 'Mon bouton',
  isLoading: false,
  color: "info",
  loaderColor: "#f6f8fc"
};

export const InfoLoading = Template.bind({});
InfoLoading.args = {
  ...Info.args,
  isLoading: true,
};

export const InfoDisabled = Template.bind({});
InfoDisabled.args = {
  ...Info.args,
  disabled: true,
};
