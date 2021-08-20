<template>
    <form id="searchForm"
          @submit.stop.prevent="searchPokemon()">

        <base-input name="search"
                    label="Rechercher"
                    placeholder="Rechercher"
                    v-model="searchValue"
                    required />

        <base-button label="Chercher"
                     class="primary"
                     :isLoading="isSearching"
                     type="submit" />
    </form>
</template>

<script>
export default {
    data() {
        return {
            searchValue: null,
            isSearching: false,
        }
    },
    methods: {
        async searchPokemon() {
            try {
                if (this.searchValue) {
                    this.isSearching = true;
                    const searchingPokemon = await this.$store.dispatch('pokemons/getOne', { name: this.searchValue });
                    this.isSearching = false;
                    this.$emit('found', searchingPokemon);
                }
            } catch (e) {
                this.isSearching = false;
                this.$emit('error', e);
            }
        },
        resetForm() {
            this.searchValue = null;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>