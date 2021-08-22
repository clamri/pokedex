<template>
    <div class="snackbar"
         :class="{ 'is-visible': isVisible }">{{ label }}</div>
</template>

<script>
export default {
    computed: {
        isVisible() {
            return this.$store.state.shared.snackbar.isVisible;
        },
        label() {
            return this.$store.state.shared.snackbar.label;
        }
    },
    watch: {
        isVisible(newVal) {
            if (newVal) {
                setTimeout(() => {
                    this.$store.dispatch("shared/hideSnackbar");
                }, 3000);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.snackbar {
    visibility: hidden;
    width: fit-content;
    max-width: 80vw;
    background-color: #333;
    color: $white;
    text-align: center;
    border-radius: 1rem;
    padding: 1.5rem 3rem;
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3rem;

    &.is-visible {
        visibility: visible;
        animation: fadein 0.5s, fadeout 0.5s 2.6s;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 3rem;
        opacity: 1;
    }
}

@keyframes fadeout {
    from {
        bottom: 3rem;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
}
</style>
