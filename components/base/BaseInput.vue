<template>
    <div class="field">
        <label :for="name">{{ label }}{{ $attrs.required !== null ? `${$t('base.input.requiredLabel')}` : '' }}</label>

        <input v-bind="$attrs"
               :id="name"
               :type="type"
               :aria-label="label"
               :placeholder="placeholder"
               :value="value"
               @input="$emit('input', $event.target.value)"
               @click="$emit('click')"
               @keyup="$emit('keyup', $event)"
               @keyup.tab="$emit('tab')"
               @keyup.enter="$emit('enter')"
               @blur="$emit('blur')" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            required: true
        },
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        },
    },
};
</script>

<style lang="scss" scoped>
.field {
    margin: 0 0 1.8rem;
    position: relative;

    label {
        color: rgba(0, 0, 0, 0.87);
        opacity: 0.6;
        font-size: 1.2rem;
        letter-spacing: 0.4px;
        margin-left: 1.2rem;
    }

    input {
        display: block;
        width: 100%;
        border: none;
        padding: 1rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        flex: 1;
        background-color: $white;

        &:focus {
            outline: none;
        }

        &:read-only {
            background-color: rgba(0, 0, 0, 0.05);
            color: rgb(84, 84, 84);
        }
    }

    &::after {
        content: "";
        position: absolute;
        height: 0.2rem;
        left: 2rem;
        bottom: -0.2rem;
        transform: scaleX(0);
        transform-origin: center left;
        transition: transform 0.5s;
        width: 70%;
        background: $primary-color;
    }

    &:focus-within {
        label {
            color: $primary-color;
            opacity: 1;
        }

        &::after {
            transform: scaleX(1);
        }
    }
}
</style>
