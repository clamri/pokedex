<template>
    <div>
        <app-header />
        <main>
            <base-pokeball />
            <team-section />

            <slot name="content" />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.pokeball {
    position: fixed !important;
    right: -8rem;
    top: -8rem;
    opacity: 0.5;
    transform: rotate(22deg);
}
</style>