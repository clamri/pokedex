<template>
    <button :type="type"
            :disabled="isLoading"
            :class="classes"
            @click="click()">
        <span class="label">{{ label }}</span>

        <base-loader v-if="isLoading"
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
        type: {
            type: String,
            default: "button",
            validator: function (value) {
                return ['button', 'submit'].indexOf(value) !== -1
            }
        },
        color: {
            type: String,
            validator: function (value) {
                // future other possibilities: success, error, warning
                return ['primary', 'secondary', 'info'].indexOf(value) !== -1;
            },
        },
        size: {
            type: String,
            validator: function (value) {
                // future other possibilities: large
                return ['small', 'medium'].indexOf(value) !== -1;
            },
        },
        loaderColor: {
            type: String
        },
    },

    computed: {
        classes() {
            return {
                'button': this.color,
                ...(this.color && { [`button--${this.color}`]: true }),
                ...(this.color && { 'uppercase': true }),
                ...((this.color || this.size) && { [`button--${this.size ? this.size : 'medium'}`]: true }),
                'button--loading': this.isLoading
            };
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

    .label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:disabled {
        cursor: default;
    }

    &.button {
        border-radius: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 2px transparent;
        white-space: nowrap;

        &:disabled {
            filter: grayscale(0.5);
        }

        &:hover,
        &:focus {
            outline: none;
        }
    }

    &.button--loading {
        .label {
            visibility: hidden;
        }
    }

    &.button--primary {
        background-color: $primary-color;
        color: $white;

        &:hover:not(:disabled),
        &:focus:not(:disabled) {
            border-color: $dark-primary-color;
        }
    }

    &.button--secondary {
        background-color: $background-color;

        &:hover:not(:disabled),
        &:focus:not(:disabled) {
            border-color: $primary-color;
        }

        &:disabled {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    &.button--info {
        background-color: $white;

        &:disabled {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    &.button--small {
        padding: 1rem 3rem;
        font-size: 1.2rem;
    }

    &.button--medium {
        padding: 0.75rem 2rem;
        font-size: 1.5rem;
    }
}
</style>
