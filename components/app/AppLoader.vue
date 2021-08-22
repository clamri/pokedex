<template>
    <section>
        <div class="loading"></div>
        <p>{{ $t('app.loadingLabel') }}</p>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 2rem;

    @media (max-width: 991px) {
        padding: 5rem 0 2rem;
    }

    .loading {
        margin-bottom: 3rem;

        &::after {
            content: "";
            display: block;
            font-size: 1rem;
            width: 1rem;
            height: 1rem;
            animation: spinner 3s infinite linear;
            border-radius: 999px;
            box-shadow: $black 1.5rem 0 0 0, $black 1.1rem 1.1rem 0 0,
                $black 0 1.5rem 0 0, $black -1.1rem 1.1rem 0 0,
                $black -1.5rem 0 0 0, $black -1.1rem -1.1rem 0 0,
                $black 0 -1.5rem 0 0, $black 1.1rem -1.1rem 0 0;
        }
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>