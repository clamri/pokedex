<template>
    <base-modal name="teamPokemonModal"
                class="team-modal-pokemon"
                @close="closePokemonModal()">
        <template slot="header">
            <h1>Que faire avec <span class="capitalize">{{ pokemon.name }}</span> ?</h1>
        </template>
        <template slot="body">
            <pokemon-card-button :pokemon="pokemon"
                                 disabled />
        </template>
        <template slot="footer">
            <base-button label="Enlever de mon équipe"
                         class="primary"
                         @click="removeFromTeam()" />

            <base-button label="Fermer"
                         class="secondary"
                         @click="closePokemonModal()" />
        </template>
    </base-modal>
</template>


<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        closePokemonModal() {
            this.$emit('close');
        },
        removeFromTeam() {
            this.$store.dispatch('team/removeOne', { index: this.index });
            this.closePokemonModal();
        }
    }
}
</script>

<style lang="scss" scoped>
.team-modal-pokemon {
    ::v-deep .modal-body {
        text-align: center;
    }
}
</style>