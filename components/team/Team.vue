<template>
    <div>
        <p v-if="team.length === 0">Aucun pokémon ajouté à l'équipe pour le moment !</p>
        <div v-for="(pokemon, index) in team"
             :key="index">{{ pokemon.name }}</div>
    </div>
</template>


<script>
export default {
    computed: {
        team() {
            return this.$store.state.team.list;
        }
    }
}
</script>