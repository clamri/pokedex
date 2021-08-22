import BasePokeball from './BasePokeball.vue';

export default {
    title: 'Base/BasePokeball',
    component: BasePokeball,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BasePokeball },
    template: '<base-pokeball v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
};