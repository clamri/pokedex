<template>
    <layout-default>
        <section class="container"
                 slot="content">
            <pokemon-form-search ref="form-search"
                                 @found="showPokemon($event)"
                                 @error="showError($event)" />

            <div v-if="displaySearchingResult"
                 class="pokemon-found">
                <pokemon-card-link v-if="searchingPokemon"
                                   :pokemon="searchingPokemon" />
                <p v-else>{{ $t('indexPage.searchSection.noneFoundLabel') }}</p>

                <base-button :label="$t('indexPage.searchSection.seeAllButtonLabel')"
                             class="show-all-button primary uppercase"
                             @click="showAll()" />
            </div>

            <template v-else>
                <ul class="pokemon-list">
                    <li v-for="pokemon in pokemons"
                        :key="pokemon.name">
                        <pokemon-card-link :pokemon="pokemon" />
                    </li>
                </ul>
            </template>

            <template v-if="$fetchState.error">
                <p>{{ $t('app.errorLabel') }}</p>
            </template>

            <app-loader v-else-if="$fetchState.pending || pokemonsAreLoading" />
        </section>
    </layout-default>
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
        },
        pokemonsAreLoading() {
            return !this.$store.state.pokemons.loaded;
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
.pokemon-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    @media (max-width: $media-width-max-sm) {
        li {
            width: 100%;
        }
    }

    ::v-deep .pokemon-card-link {
        margin: 5rem 2rem 3rem;

        @media (max-width: $media-width-max-sm) {
            margin: 1rem 0;
            width: 100%;
        }
    }
}

.pokemon-found {
    margin: 5rem 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .show-all-button {
        margin-top: 5rem;
    }
}
</style>