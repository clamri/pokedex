<template>
    <base-button label="Ajouter à mon équipe"
                 class="pokemon-to-team-button uppercase hovered-border"
                 :class="[`border-color-${pokemon.types[0].type.name}`]"
                 @click="addToTeam()" />
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
            this.$store.dispatch('team/addOne', { pokemon: { id: this.pokemon.id, name: this.pokemon.name } });
        }
    }
}
</script>

<style lang="scss" scoped>
.pokemon-to-team-button {
    border-radius: 1rem;
    font-weight: 600;
    padding: 1rem 3rem;
    justify-content: center;
    white-space: nowrap;
    font-size: 1.2rem;
    background-color: $white;
}
</style>