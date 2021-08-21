<template>
    <div class="pokemons-evolutions">
        <ul class="pokemon-varietes">
            <li v-for="(pokemon, index) in pokemonsVarieties"
                :key="index">
                <pokemon-card-link :pokemon="pokemon" />
            </li>
        </ul>

        <ul v-if="evolutionChain.evolves_to.length > 0"
            class="pokemon-evolutions-list">
            <li v-for="chain in evolutionChain.evolves_to"
                :key="chain.species.name">
                <pokemon-evolutions :evolution-chain="chain" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        evolutionChain: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            pokemonsVarieties: []
        }
    },
    async mounted() {
        // todo: handle errors
        const species = (await this.$axios.get(this.evolutionChain.species.url)).data;

        this.pokemonsVarieties = await this.$store.dispatch("pokemons/getDetailledPokemons", {
            results: species.varieties.map(_ => { return { url: _.pokemon.url } })
        });
    },
}
</script>

<style lang="scss" scoped>
.pokemons-evolutions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 992px) {
        padding-top: 5rem;
    }
}

ul {
    padding: 0;

    li {
        list-style: none;
    }
}

.pokemon-varietes {
    padding: 1rem;
    background-color: $background-color;
    display: flex;
    border-radius: 2rem;
    margin: 1rem;
    flex-wrap: wrap;

    @media (max-width: 991px) {
        flex-direction: column;
        width: 100%;
    }

    li {
        margin: 1rem;
        flex: 1;

        .pokemon-card-link {
            width: 100%;
        }
    }
}

.pokemon-evolutions-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    margin-top: 14rem;

    @media (max-width: 991px) {
        flex-direction: column;
        width: 100%;
        margin-top: 5rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: -10rem;
        height: 10rem;
        width: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: $background-color;

        @media (max-width: 991px) {
            top: -5rem;
            height: 5rem;
        }
    }
}
</style>