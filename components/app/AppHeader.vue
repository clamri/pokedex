<template>
    <header>
        <h1>Pokédex</h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--primary-color);
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    height: var(--header-height);

    h1 {
        letter-spacing: 0.1rem;
        padding: 1.3rem 2rem;
        font-size: 2rem;
        line-height: 2rem;
        color: white;
    }
}
</style>