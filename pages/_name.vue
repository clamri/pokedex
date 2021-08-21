<template>
    <div>
        <app-header />
        <main>
            <team-section />

            <section>
                <template v-if="$fetchState.error">
                    <p>Une erreur est survenue</p>
                </template>

                <template v-else-if="$fetchState.pending ">
                    <p>Chargement en cours</p>
                </template>

                <template v-else>
                    <article class="pokemon-article">
                        <section class="main-informations"
                                 :class="[`background-color-${pokemon.defaultType}-medium-opacity`]">
                            <h2 class="pokemon-name capitalize">{{ pokemon.name }}</h2>

                            <img class="pokemon-sprite"
                                 :src="pokemon.sprite"
                                 alt="" />

                            <team-button-add-pokemon :pokemon="pokemon" />
                        </section>

                        <!-- todo: display more information -->

                        <section class="more-informations">
                            <h3 class="section-title uppercase">Évolutions</h3>
                            <pokemon-evolutions :evolution-chain="evolution_chain" />
                        </section>
                    </article>
                </template>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    async fetch() {
        this.pokemon = await this.$store.dispatch('pokemons/getOne', { name: this.$route.params.name.toLowerCase() });
        const speciesData = await this.$store.dispatch('pokemons/getFromUrl', { url: this.pokemon.species.url });
        this.species = { evolution_chain: speciesData.evolution_chain, habitat: speciesData.habitat, shape: speciesData.shape };
        this.evolution_chain = (await this.$store.dispatch('pokemons/getFromUrl', { url: this.species.evolution_chain.url })).chain;

        console.log(JSON.stringify(this.evolution_chain));
    },
    data() {
        return {
            pokemon: null,
            species: null,
            evolution_chain: null,
        }
    },
}
</script>


<style lang="scss" scoped>
.pokemon-article {
    background-color: white;
    margin-top: 2rem;
    border-radius: 2rem;

    section {
        padding: 4rem 2rem;

        .section-title {
            font-size: 1.8rem;
            text-align: center;
        }
    }

    .main-informations {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2rem;
        @extend %background-color-type-medium-opacity;

        .pokemon-name {
            font-size: 2.5rem;
            text-align: center;
            color: white;
        }

        .pokemon-sprite {
            height: 20rem;
            width: 20rem;
            object-fit: contain;
            margin-bottom: 2rem;
        }
    }

    .more-informations {
        background-color: white;
    }
}
</style>