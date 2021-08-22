import BaseSnackbar from './BaseSnackbar.vue';

import store from '@/.storybook/store';

setTimeout(() => store.dispatch('shared/showSnackbar', "Ma snackbar"), 1000)

export default {
    title: 'Base/BaseSnackbar',
    component: BaseSnackbar,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseSnackbar },
    template: '<base-snackbar v-bind="$props" />',
    store: store
});

export const Default = Template.bind({});
Default.args = {
};