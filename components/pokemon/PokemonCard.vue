<template>
    <div>
        <nuxt-link :to="`/${pokemon.name}`"
                   class="pokemon-card">

            <img class="pokemon-sprite"
                 :src="pokemon.sprite"
                 alt="" />

            {{ pokemon.name }}
        </nuxt-link>

        <pokemon-to-team-button :pokemon="pokemon" />
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToTeam() {
            this.$store.dispatch('team/addOne', { pokemon: this.pokemon });
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
    min-height: 12rem;
    min-width: 28rem;

    .pokemon-sprite {
        position: absolute;
        top: -4rem;
        height: 8rem;
        width: 8rem;
        left: 50%;
        transform: translateX(-50%);
        object-fit: contain;
    }
}
</style>