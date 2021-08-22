import BaseModal from './BaseModal.vue';

export default {
    title: 'Base/BaseModal',
    component: BaseModal,
    argTypes: {
        onClose: { action: 'close' },
    }
};

const modalHeader = `<template slot="header"><h1>Mon header</h1></template>`;
const modalBody = `<template slot="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></template>`;
const modalFooter = `<template slot="footer"><base-button label="Fermer" class="secondary" @click="onClose" /></template>`;

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseModal },
    template: `<base-modal @close="onClose" v-bind="$props">${modalHeader}${modalBody}${modalFooter}</base-modal>`,
});

export const Default = Template.bind({});
Default.args = {
    name: "default",
};

export const DefaultNotClosable = Template.bind({});
DefaultNotClosable.args = {
    name: "notClosable",
    isClosable: false
};