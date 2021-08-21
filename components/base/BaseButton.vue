<template>
    <button :type="type"
            :disabled="isLoading"
            @click="click()">
        <span class="label"
              :data-state="isLoading ? 'hidden' : ''">
            <span>{{ label }}</span>
        </span>

        <base-loader v-if="isLoading"
                     class="loading"
                     :color="loaderColor" />
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        loaderColor: {
            type: String
        },
        type: {
            type: String,
            default: "button"
        },
    },
    methods: {
        click() {
            this.$emit("click");
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    position: relative;

    [data-state="hidden"] {
        visibility: hidden;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading {
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &.primary,
    &.secondary {
        border-radius: 1rem;
        font-weight: 600;
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 2px transparent;

        :disabled {
            background-color: #eeeeee;
            color: $black;
            cursor: not-allowed;
        }

        &:hover,
        &:focus {
            outline: none;
        }
    }

    &.primary {
        background-color: $primary-color;
        color: $white;

        &:hover,
        &:focus {
            border-color: $dark-primary-color;
        }
    }

    &.secondary {
        background-color: $background-color;

        &:hover,
        &:focus {
            border-color: $primary-color;
        }
    }
}
</style>
