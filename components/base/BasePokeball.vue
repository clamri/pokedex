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
        height: ($size/14);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: $background-color;
    }

    &:after {
        content: "";
        display: block;
        width: $size/5;
        height: $size/5;
        background: $white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0 0 0 ($size/14) $background-color;
    }
}
</style>