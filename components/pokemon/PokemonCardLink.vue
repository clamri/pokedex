<template>
    <div class="pokemon-card">
        <nuxt-link :to="`/${pokemon.name}`"
                   class="pokemon-link hovered-border"
                   :class="[`background-color-${pokemon.defaultType}-medium-opacity`, `border-color-${pokemon.defaultType}`]">

            <img class="pokemon-sprite"
                 :src="pokemon.sprite"
                 alt="" />

            <div class="pokemon-informations">
                <div class="pokemon-id uppercase">#{{ ('' + pokemon.id).padStart(3, '0') }}
                </div>
                <div class="pokemon-name capitalize">{{ pokemon.name }}</div>

                <div class="pokemon-types">
                    <span v-for="type in pokemon.types"
                          :key="type.type.name"
                          class="pokemon-type uppercase"
                          :class="`background-color-${type.type.name}`">{{ type.type.name }}</span>
                </div>
            </div>
        </nuxt-link>

        <team-button-add-pokemon :pokemon="pokemon" />
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToTeam() {
            this.$store.dispatch('team/addOne', { pokemon: this.pokemon });
        }
    }
}
</script>

<style lang="scss" scoped>
.pokemon-card {
    position: relative;
    display: inline-block;

    .pokemon-link {
        background-color: $white;
        border-radius: 2rem;

        @extend %background-color-type-medium-opacity;

        @media (min-width: 992px) {
            padding: 4rem 2rem 7rem;
            min-width: 28rem;
        }

        @media (max-width: 991px) {
            display: flex;
            padding: 1rem;
        }

        .pokemon-sprite {
            object-fit: contain;
            transition: all 0.5s;

            @media (min-width: 992px) {
                height: 8rem;
                width: 8rem;
                position: absolute;
                top: -4rem;
                left: 50%;
                transform: translateX(-50%);
                transform-origin: bottom center;
            }

            @media (max-width: 991px) {
                height: 7rem;
                width: 7rem;
                margin-right: 1rem;
            }
        }

        .pokemon-id {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            color: $white;

            @media (max-width: 991px) {
                position: absolute;
                bottom: 0;
                right: 1rem;
                font-size: 5rem;
                opacity: 0.6;
                z-index: 1;
            }
        }

        .pokemon-name {
            font-weight: bold;
            color: $white;
            font-size: 2.5rem;

            @media (min-width: 992px) {
                text-align: center;
            }
        }

        .pokemon-types {
            margin-top: 2rem;
            position: relative;

            @media (min-width: 992px) {
                text-align: center;
            }

            @media (max-width: 991px) {
                margin-top: 0rem;
            }

            .pokemon-type {
                color: $white;
                padding: 0.5rem 1rem;
                font-size: 1.2rem;
                margin: 0.5rem;
                font-weight: bold;
                display: inline-block;
                border-radius: 0.6rem;

                @extend %background-color-type;

                @media (max-width: 991px) {
                    font-size: 1rem;
                }
            }
        }

        &:hover,
        &:focus {
            .pokemon-sprite {
                top: -5rem;
                transform: translateX(-50%) scale(1.2);
            }
        }
    }

    .pokemon-to-team-button {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 991px) {
            display: none;
        }
    }
}
</style>