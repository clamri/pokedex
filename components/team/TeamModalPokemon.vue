<template>
    <base-modal name="teamPokemonModal"
                class="team-modal-pokemon"
                @close="closePokemonModal()">
        <template slot="header">
            <h1>Que faire avec <span class="capitalize">{{ pokemon.surname ? pokemon.surname : pokemon.name }}</span> ?
            </h1>
        </template>
        <template slot="body">
            <pokemon-card-button :pokemon="pokemon"
                                 disabled />

            <team-form-surname @update="updateSurname($event)" />
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
        updateSurname(surname) {
            this.$store.dispatch('team/updateOne', { index: this.index, pokemon: { ...this.pokemon, surname: surname } });
            this.closePokemonModal();
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

.team-form-surname {
    background-color: #f6f8fc;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 1rem;
}
</style>