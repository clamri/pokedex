<template>
    <button type="button"
            class="app-button-scroll-top"
            :class="{ 'is-visible': showBackToTopButton }"
            aria-label="Retour en haut de la page"
            @click="scroll()">
        <i class="icon-chevron-up"
           aria-hidden></i>
    </button>
</template>

<script>
export default {
    data() {
        return {
            scrollElement: null,
            isScrolling: false,
            showBackToTopButton: false
        }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        scroll() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleScroll() {
            this.showBackToTopButton = window.scrollY > window.innerHeight;
        }
    },
    beforeDestroy() {
        this.scrollElement?.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
.app-button-scroll-top {
    border-radius: 999px;
    background-color: $primary-color;
    height: 4rem;
    width: 4rem;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    i {
        font-size: 2rem;
        margin-bottom: 0.2rem;
    }

    &.is-visible {
        visibility: visible;
        opacity: 0.8;
    }
}
</style>