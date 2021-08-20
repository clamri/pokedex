<template>
    <div>
        <app-header />
        <main>
            <h2>Bienvenue</h2>

            <pokemon-form-search ref="form-search"
                                 @found="showPokemon($event)"
                                 @error="showError($event)" />

            <template v-if="$fetchState.error">
                <p>Une erreur est survenue</p>
            </template>

            <template v-else-if="$fetchState.pending ">
                <p>Chargement en cours</p>
            </template>

            <template v-else>
                <p>Ok !</p>

                <template v-if="displaySearchingResult">
                    <div v-if="searchingPokemon">
                        <pokemon-card :pokemon="searchingPokemon" />
                    </div>
                    <p v-else>Aucun pokémon de ce nom trouvé !</p>

                    <base-button label="Voir tous les pokémons"
                                 class="primary"
                                 @click="showAll()" />
                </template>

                <template v-else>
                    <ul class="pokemon-list">
                        <li v-for="pokemon in pokemons"
                            :key="pokemon.name">
                            <pokemon-card :pokemon="pokemon" />
                        </li>
                    </ul>
                </template>
            </template>
        </main>
    </div>
</template>

<script>
export default {
    async fetch() {
        await this.$store.dispatch('pokemons/getAll');
    },
    data() {
        return {
            displaySearchingResult: false,
            searchingPokemon: null,
        }
    },
    computed: {
        pokemons() {
            return this.$store.state.pokemons.list;
        }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            const position = window.innerHeight + window.scrollY;
            const percent = position * 100 / scrollHeight;

            if (percent > 70) {
                this.$store.dispatch('pokemons/getMore');
            }
        },
        showPokemon(pokemon) {
            this.searchingPokemon = pokemon;
            this.displaySearchingResult = true;
        },
        showError(error) {
            // todo: if error status !== 404, log it somewhere for debug and remove next line after
            console.log(error);
            this.displaySearchingResult = true;
        },
        showAll() {
            this.displaySearchingResult = false;
            this.$refs['form-search'].resetForm();
        }
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.handleScroll);
    }
}
</script>


<style lang="scss" scoped>
main {
    background-color: #f6f8fc;
    padding: 5rem;
}

.pokemon-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}
</style>