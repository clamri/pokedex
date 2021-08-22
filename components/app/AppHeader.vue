<template>
    <header>
        <h1 class="uppercase">
            <base-link-hovered-underline to="/"
                                         :label="$t('app.header.titleLabel')" />
        </h1>

        <div class="lang-switcher">
            <base-link-hovered-underline v-for="locale in availableLocales"
                                         :key="locale.code"
                                         :to="switchLocalePath(locale.code)"
                                         :label="locale.code.toUpperCase()" />
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
        },
    },
}
</script>

<style lang="scss" scoped>
header {
    background-color: $background-color;
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: $header-height;

    h1 {
        font-size: 2rem;
        margin-top: 1rem;
        z-index: 1;

        a {
            padding: 1.3rem 2rem;
        }
    }

    .lang-switcher {
        position: absolute;
        right: 3rem;
        z-index: 1;
        top: calc(50% + 0.5rem);
        transform: translateY(-50%);

        @media (max-width: $media-width-max-sm) {
            right: 0rem;
        }

        a {
            padding: 1.3rem 2rem;
        }
    }
}
</style>