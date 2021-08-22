<template>
    <base-modal v-if="isVisible"
                name="teamHelloModal"
                class="team-modal-hello"
                @close="closeHelloModal()">
        <template slot="header">
            <h1>{{ $t('app.modalHello.titleLabel') }}</h1>
        </template>
        <template slot="body">
            <p>{{ $t('app.modalHello.contentLabel') }}</p>
        </template>
        <template slot="footer">
            <base-button :label="$t('app.modalHello.closeButtonLabel')"
                         class="secondary"
                         @click="closeHelloModal()" />
        </template>
    </base-modal>
</template>


<script>
export default {
    computed: {
        isVisible() {
            return this.$store.state.shared.helloModal.isVisible;
        },
    },
    methods: {
        closeHelloModal() {
            this.$store.dispatch('shared/hideHelloModal');
        },
    }
}
</script>

<style lang="scss" scoped>
.team-modal-hello {
    ::v-deep .modal-body {
        text-align: center;
    }
}

.hello-informations {
    display: flex;
    flex-direction: column;
    align-items: center;

    .see-hello-link {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        text-decoration: underline;
    }
}

.team-form-surname {
    background-color: #f6f8fc;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 1rem;
}
</style>