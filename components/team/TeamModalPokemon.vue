<template>
    <base-modal name="teamPokemonModal"
                class="team-modal-pokemon"
                @close="closePokemonModal()">
        <template slot="header">
            <h1
                v-html="$t('team.modalPokemon.titleLabel', { pokemonName: pokemon.surname ? pokemon.surname : pokemon.name })">
            </h1>
        </template>
        <template slot="body">
            <div class="pokemon-informations">
                <pokemon-card-button :pokemon="pokemon"
                                     disabled />
                <nuxt-link :to="`/${pokemon.name}`"
                           class="see-pokemon-link"
                           @click.native="closePokemonModal()">Voir le pokémon</nuxt-link>
            </div>

            <team-form-surname @update="updateSurname($event)" />
        </template>
        <template slot="footer">
            <base-button :label="$t('team.modalPokemon.removeFromTeamButtonLabel')"
                         color="primary"
                         size="small"
                         @click="removeFromTeam()" />

            <base-button :label="$t('team.modalPokemon.closeModalButtonLabel')"
                         color="secondary"
                         size="small"
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

.pokemon-informations {
    display: flex;
    flex-direction: column;
    align-items: center;

    .see-pokemon-link {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        text-decoration: underline;
    }
}

.team-form-surname {
    background-color: #f6f8fc;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 1rem;
}
</style>