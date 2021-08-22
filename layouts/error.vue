<template>
    <layout-default :show-team="false">
        <section slot="content">
            <p v-if="error.statusCode === 404">{{ $t('app.errorPage.content') }}</p>
            <p v-else>{{ app.errorLabel }}</p>
            <base-link-hovered-underline to="/"
                                         :label="$t('app.errorPage.backHomePageLinkLabel')" />
        </section>
    </layout-default>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error'
}
</script>

<style lang="scss" scoped>
section {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;

    p {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
}
</style>