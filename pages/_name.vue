<template>
    <div>
        <app-header />
        <main>
            <h2>Bienvenue</h2>

            <team />

            <template v-if="$fetchState.error">
                <p>Une erreur est survenue</p>
            </template>

            <template v-else-if="$fetchState.pending ">
                <p>Chargement en cours</p>
            </template>

            <template v-else>
                <p>Ok !</p>
                <h3>{{ pokemon.name }}</h3>

                <img class="pokemon-sprite"
                     :src="pokemon.sprite"
                     alt="" />

                <!-- todo: display more information -->

                <pokemon-to-team-button :pokemon="pokemon" />
            </template>
        </main>
    </div>
</template>

<script>
export default {
    async fetch() {
        this.pokemon = await this.$store.dispatch('pokemons/getOne', { name: this.$route.params.name });
    },
    data() {
        return {
            pokemon: null,
        }
    }
}
</script>


<style lang="scss" scoped>
main {
    background-color: $background-color;
    padding: 5rem;
    min-height: calc(100vh - #{$header-height});
}
</style>