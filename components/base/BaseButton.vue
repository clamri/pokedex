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

    &.primary {
        background-color: var(--primary-color);
        color: var(--white);
        border-radius: 999px;
        text-transform: uppercase;
        font-weight: 600;
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        min-width: 20rem;
        justify-content: center;
        letter-spacing: 0.1rem;

        &:disabled {
            background-color: #eeeeee;
            color: var(--black);
            cursor: not-allowed;
        }

        &:hover {
            box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.25);
        }
    }
}
</style>
