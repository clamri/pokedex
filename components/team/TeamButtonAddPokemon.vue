<template>
    <base-button class="pokemon-to-team-button hovered-border"
                 color="info"
                 size="small"
                 :label="$t('team.buttonAddPokemon.label')"
                 :class="[`border-color-${pokemon.defaultType}`]"
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
            this.$store.dispatch('team/addOne', { pokemon: { id: this.pokemon.id, name: this.pokemon.name, sprite: this.pokemon.sprite, defaultType: this.pokemon.types[0].type.name } });
        }
    }
}
</script>