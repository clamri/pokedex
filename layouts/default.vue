<template>
    <div>
        <Nuxt />
        <app-modal-hello />
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('shared/showHelloModal');
        }, 25000);
    },
}
</script>