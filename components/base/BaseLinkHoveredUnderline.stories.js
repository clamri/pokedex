import BaseLinkHoveredUnderline from './BaseLinkHoveredUnderline.vue';

export default {
    title: 'Base/BaseLinkHoveredUnderline',
    component: BaseLinkHoveredUnderline,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseLinkHoveredUnderline },
    template: '<base-link-hovered-underline v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'Lien',
    to: "/"
};