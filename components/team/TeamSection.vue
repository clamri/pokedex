<template>
    <section class="team-section">
        <h2 class="team-title">Mon équipe</h2>

        <client-only>
            <p v-if="team.length === 0"
               class="information">Aucun pokémon ajouté à l'équipe pour le moment !</p>
            <ul class="pokemon-list">
                <li v-for="(pokemon, index) in team"
                    :key="index"
                    class="pokemon-card">
                    <pokemon-card-button :pokemon="pokemon"
                                         @click="openPokemonModal($event, index)" />
                </li>
            </ul>
        </client-only>

        <team-modal-pokemon v-if="showPokemonModal"
                            :pokemon="selectedPokemonForModal"
                            :index="selectedPokemonIndex"
                            @close="closePokemonModal()" />
    </section>
</template>


<script>
export default {
    computed: {
        team() {
            return this.$store.state.team.list;
        }
    },
    data() {
        return {
            showPokemonModal: false,
            selectedPokemonForModal: null,
            selectedPokemonIndex: null,
        }
    },
    methods: {
        openPokemonModal(pokemon, index) {
            this.selectedPokemonForModal = pokemon;
            this.selectedPokemonIndex = index;
            this.showPokemonModal = true;
        },
        closePokemonModal() {
            this.showPokemonModal = false;
            this.selectedPokemonForModal = null;
            this.selectedPokemonIndex = null;
        },
    }
}
</script>

<style lang="scss" scoped>
.team-section {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;

    .team-title {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 1rem;
    }
}

.information {
    font-style: italic;
    margin: 1rem;
}

.pokemon-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.pokemon-card-button {
    margin: 1rem;
}
</style>