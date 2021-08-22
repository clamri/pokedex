import VueI18n from 'vue-i18n';

const i18n = new VueI18n({
    locales: [
        {
            code: 'en',
            iso: 'en-US',
            name: 'English'
        },
        {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français'
        }],
    defaultLocale: 'en',
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            en: require('../lang/en-US'),
            fr: require('../lang/fr-FR'),
        }
    }
});

// todo: fix display i18n in Storybook

export default i18n