<template>
    <nuxt-link :to="`/${pokemon.name}`"
               class="pokemon-card">{{ pokemon.name }}</nuxt-link>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.pokemon-card {
    position: relative;
    background-color: white;
    border-radius: 2rem;
    padding: 4rem 2rem 2rem;
    margin: 3rem 2rem;
    min-height: 12rem;
    min-width: 28rem;
}
</style>