<template>
    <button type="button"
            class="pokemon-card-button hovered-border"
            :class="[`background-color-${pokemon.defaultType}-medium-opacity`, `border-color-${pokemon.defaultType}`]"
            @click="click(pokemon)">

        <img class="pokemon-sprite"
             :src="pokemon.sprite"
             alt="" />

        <div class="pokemon-name capitalize">{{ pokemon.surname ? pokemon.surname : pokemon.name }}</div>
    </button>
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
        click(pokemon) {
            this.$emit('click', pokemon);
        }
    }
}
</script>

<style lang="scss" scoped>
.pokemon-card-button {
    background-color: $white;
    border-radius: 2rem;
    padding: 1rem;
    min-width: 10rem;

    @extend %background-color-type-medium-opacity;

    .pokemon-sprite {
        height: 5rem;
        width: 5rem;
        object-fit: contain;
        transition: all 0.5s;
    }

    .pokemon-name {
        font-weight: bold;
        color: $white;
        font-size: 1.8rem;
        text-align: center;
    }
}
</style>