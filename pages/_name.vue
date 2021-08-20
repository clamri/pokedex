<template>
    <div>
        <app-header />
        <main>
            <h2>Bienvenue</h2>

            <template v-if="$fetchState.error">
                <p>Une erreur est survenue</p>
            </template>

            <template v-else-if="$fetchState.pending ">
                <p>Chargement en cours</p>
            </template>

            <template v-else>
                <p>Ok !</p>
                <p>{{ pokemon.name }}</p>
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
    background-color: #f6f8fc;
    padding: 5rem;
}

.pokemon-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    .pokemon-card {
        position: relative;
        background-color: white;
        border-radius: 2rem;
        padding: 4rem 2rem 2rem;
        margin: 3rem 2rem;
        min-height: 12rem;
        min-width: 28rem;
    }
}
</style>