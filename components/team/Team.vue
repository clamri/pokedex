<template>
    <div class="team">
        <h2 class="team-title">Mon équipe</h2>

        <p v-if="team.length === 0"
           class="information">Aucun pokémon ajouté à l'équipe pour le moment !</p>
        <ul class="pokemon-list">
            <li v-for="(pokemon, index) in team"
                :key="index"
                class="pokemon-card">
                <button type="button"
                        class="pokemon-button hovered-border"
                        :class="[`background-color-${pokemon.defaultType}-medium-opacity`, `border-color-${pokemon.defaultType}`]"
                        @click="doSomething(pokemon)">

                    <img class="pokemon-sprite"
                         :src="pokemon.sprite"
                         alt="" />

                    <div class="pokemon-name">{{ pokemon.name }}</div>
                </button>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    computed: {
        team() {
            return this.$store.state.team.list;
        }
    },
    methods: {
        doSomething(pokemon) {
            // todo: open modal in which pokemon can be removed from team
            console.log('pokemon', pokemon);
        }
    }
}
</script>

<style lang="scss" scoped>
.team {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;

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

.pokemon-card {
    position: relative;
    display: inline-block;
    margin: 1rem;

    .pokemon-button {
        background-color: $white;
        border-radius: 2rem;
        padding: 1rem;
        min-width: 10rem;

        @extend %background-color-type-medium-opacity;

        .pokemon-sprite {
            height: 5rem;
            width: 5rem;
            object-fit: contain;
            transition: all 0.5s;
        }

        .pokemon-name {
            font-weight: bold;
            color: $white;
            text-transform: capitalize;
            font-size: 1.8rem;
            text-align: center;
        }
    }
}
</style>