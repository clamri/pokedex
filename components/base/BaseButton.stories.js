import BaseButton from './BaseButton.vue';

export default {
  title: 'Base/BaseButton',
  component: BaseButton,
  argTypes: { onClick: { action: 'clicked' } },
};

const TemplatePrimary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button class="primary uppercase" @click="onClick" v-bind="$props" />',
});

export const Primary = TemplatePrimary.bind({});
Primary.args = {
  label: 'Mon bouton',
  isLoading: false
};

export const PrimaryLoading = TemplatePrimary.bind({});
PrimaryLoading.args = {
  label: 'Mon bouton',
  isLoading: true,
  loaderColor: "#fff"
};

export const PrimaryDisabled = TemplatePrimary.bind({});
PrimaryDisabled.args = {
  label: 'Mon bouton',
  disabled: true,
};

const TemplateSecondary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button class="secondary uppercase" @click="onClick" v-bind="$props" />',
});

export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  label: 'Mon bouton',
  isLoading: false
};
Secondary.parameters = {
  backgrounds: { default: 'white' }
};

export const SecondaryLoading = TemplateSecondary.bind({});
SecondaryLoading.args = {
  label: 'Mon bouton',
  isLoading: true,
  loaderColor: "#fff"
};
SecondaryLoading.parameters = {
  backgrounds: { default: 'white' }
};

export const SecondaryDisabled = TemplateSecondary.bind({});
SecondaryDisabled.args = {
  label: 'Mon bouton',
  disabled: true,
};
SecondaryDisabled.parameters = {
  backgrounds: { default: 'white' }
};
