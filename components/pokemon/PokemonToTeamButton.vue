<template>
    <base-button label="Ajouter à mon équipe"
                 class="primary add-button"
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