<template>
    <form id="searchForm"
          @submit.stop.prevent="searchPokemon()">

        <base-input name="search"
                    label="Rechercher"
                    placeholder="Rechercher"
                    v-model="searchValue"
                    required />

        <base-button label="Chercher"
                     class="primary uppercase"
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
                    const searchingPokemon = await this.$store.dispatch('pokemons/getOne', { name: this.searchValue.toLowerCase() });
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
form {
    display: flex;
    align-items: center;

    .field {
        margin-right: 2rem;
        flex: 1;

        &:focus-within ::v-deep label {
            opacity: 0;
        }

        ::v-deep label {
            opacity: 0;
        }

        ::v-deep input {
            border-radius: 1rem;
            min-width: 20rem;
        }
    }
}
</style>