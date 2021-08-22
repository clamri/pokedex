<template>
    <div>
        <app-header />
        <main>
            <base-pokeball />
            <team-section v-if="showTeam" />

            <slot name="content" />

            <app-button-scroll-top />
            <base-snackbar />
        </main>
    </div>
</template>

<script>
export default {
    props: {
        showTeam: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.pokeball {
    position: fixed !important;
    right: -8rem;
    top: -8rem;
    opacity: 0.5;
    transform: rotate(22deg);
}
</style>