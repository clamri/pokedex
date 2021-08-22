<template>
    <div class="pokeball"></div>
</template>

<style lang="scss" scoped>
$size: 30rem;

.pokeball {
    width: $size;
    height: $size;
    border-radius: $size;
    position: relative;
    background: $white;

    &:before {
        content: "";
        display: block;
        width: $size;
        height: ($size/15);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: $background-color;
    }

    &:after {
        content: "";
        display: block;
        width: $size/3;
        height: $size/3;
        background: $white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: ($size/15) solid $background-color;
    }
}
</style>