import { mount } from '@vue/test-utils';

import { i18n } from '@/.test/config';

import BaseButton from './BaseButton.vue';
import { Default, Primary, PrimarySmall, PrimaryLoading, Secondary, Info } from './BaseButton.stories';

it('renders the button in the default state', () => {
    const wrapper = mount(BaseButton, {
        propsData: Default.args,
    });
    const notExpected = ['button', 'button--primary', 'button--secondary', 'button--info', 'button--small', 'button--medium', 'button--loading', 'uppercase'];
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});

it('renders the button in the primary state', () => {
    const wrapper = mount(BaseButton, {
        propsData: Primary.args,
        i18n
    });
    const expected = ['button', 'button--primary', 'button--medium', 'uppercase'];
    const notExpected = ['button--secondary', 'button--info', 'button--small', 'button--loading'];
    expect(wrapper.classes()).toEqual(expect.arrayContaining(expected));
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});

it('renders the button in the primary loading state', () => {
    const wrapper = mount(BaseButton, {
        propsData: PrimaryLoading.args,
        i18n
    });
    const expected = ['button', 'button--primary', 'button--medium', 'button--loading', 'uppercase'];
    const notExpected = ['button--secondary', 'button--info', 'button--small'];
    expect(wrapper.classes()).toEqual(expect.arrayContaining(expected));
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});

it('renders the button in the primary small state', () => {
    const wrapper = mount(BaseButton, {
        propsData: PrimarySmall.args,
        i18n
    });
    const expected = ['button', 'button--primary', 'button--small', 'uppercase'];
    const notExpected = ['button--secondary', 'button--info', 'button--medium', 'button--loading'];
    expect(wrapper.classes()).toEqual(expect.arrayContaining(expected));
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});

it('renders the button in the secondary state', () => {
    const wrapper = mount(BaseButton, {
        propsData: Secondary.args,
        i18n
    });
    const expected = ['button', 'button--secondary', 'button--medium', 'uppercase'];
    const notExpected = ['button--primary', 'button--info', 'button--small', 'button--loading'];
    expect(wrapper.classes()).toEqual(expect.arrayContaining(expected));
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});

it('renders the button in the info state', () => {
    const wrapper = mount(BaseButton, {
        propsData: Info.args,
        i18n
    });
    const expected = ['button', 'button--info', 'button--medium', 'uppercase'];
    const notExpected = ['button--primary', 'button--secondary', 'button--small', 'button--loading'];
    expect(wrapper.classes()).toEqual(expect.arrayContaining(expected));
    expect(wrapper.classes()).toEqual(expect.not.arrayContaining(notExpected));
});