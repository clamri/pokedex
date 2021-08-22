<template>
    <header>
        <h1 class="uppercase">
            <base-link-hovered-underline to="/"
                                         label="Pokédex" />
        </h1>
    </header>
</template>

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
}
</style>