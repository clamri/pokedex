<template>
    <form id="surnameForm"
          class="team-form-surname"
          @submit.stop.prevent="updateSurname()">

        <base-input name="name"
                    :label="$t('team.formSurname.nameInputLabel')"
                    :placeholder="$t('team.formSurname.nameInputPlaceholder')"
                    v-model="surnameValue"
                    required />

        <base-button :label="$t('team.formSurname.submitButtonLabel')"
                     class="primary uppercase"
                     type="submit" />
    </form>
</template>

<script>
export default {
    data() {
        return {
            surnameValue: null,
        }
    },
    methods: {
        updateSurname() {
            if (this.surnameValue) {
                this.$emit('update', this.surnameValue);
            }
        },
        resetForm() {
            this.surnameValue = null;
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

    @media (max-width: $media-width-max-sm) {
        flex-direction: column;

        .field {
            margin-right: 0;
        }
    }
}
</style>