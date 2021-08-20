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
                <ul class="pokemon-list">
                    <li v-for="pokemon in pokemons"
                        :key="pokemon.name"
                        class="pokemon-card">{{ pokemon.name }}</li>
                </ul>
            </template>
        </main>
    </div>
</template>

<script>
export default {
    async fetch() {
        await this.$store.dispatch('pokemons/getAll');
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