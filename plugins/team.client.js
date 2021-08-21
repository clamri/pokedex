export default async (ctx) => {
    const { store } = ctx;

    const team = localStorage.getItem('team');
    if (team) {
        await store.dispatch('team/initTeam', { pokemons: JSON.parse(team) });
    }
};
