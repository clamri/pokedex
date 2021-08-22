import BaseInput from './BaseInput.vue';

import i18n from '@/.storybook/i18n';

export default {
  title: 'Base/BaseInput',
  component: BaseInput,
  argTypes: {
    onInput: { action: 'input' },
    onClick: { action: 'click' },
    onKeyup: { action: 'keyup' },
    onTab: { action: 'tab' },
    onEnter: { action: 'enter' },
    onBlur: { action: 'blur' },
  },
};

const model = "texte";

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  data: () => ({ model }),
  template: '<base-input v-model="model" @input="onInput" @click="onClick" @keyup="onKeyup" @tab="onTab" @enter="onEnter" @blur="onBlur" v-bind="$props" />',
  i18n: i18n,
});

export const Default = Template.bind({});
Default.args = {
  name: 'input',
  label: 'Mon label',
  placeholder: 'Mon placeholder'
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
  name: 'input',
  label: 'Mon label',
  placeholder: 'Mon placeholder',
  required: true
};

export const DefaultReadonly = Template.bind({});
DefaultReadonly.args = {
  name: 'input',
  label: 'Mon label',
  placeholder: 'Mon placeholder',
  readonly: true
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  name: 'input',
  label: 'Mon label',
  placeholder: 'Mon placeholder',
  disabled: true
};
