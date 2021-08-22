<template>
    <div :id="name"
         class="modal-container"
         @click="closeOnClickOutside($event)">
        <div class="modal">
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
            <div class="modal-footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        isClosable: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        closeOnClickOutside(event) {
            if (this.isClosable && event.target.id === this.name) {
                this.$emit('close');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .modal {
        background-color: $white;
        position: fixed;
        top: 5vh !important;
        left: 50%;
        transform: translateX(-50%) !important;
        padding: 1rem;
        min-width: 30rem;
        border-radius: 2rem;
        z-index: 11;
        max-height: 90vh;
        overflow: auto;
        max-width: 90vw;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        width: 60rem;

        .modal-header {
            padding: 0.5rem 1.5rem 1.5rem;

            h1 {
                font-size: 1.8rem;
                text-align: center;
            }
        }

        .modal-body {
            padding: 2rem 1.4rem 2rem;
        }

        .modal-footer {
            padding: 0.5rem 1.5rem 1.5rem;
            display: flex;
            justify-content: space-between;

            @media (max-width: $media-width-max-sm) {
                flex-direction: column;

                button:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000000;
        opacity: 0.5;
        z-index: 10;
    }
}
</style>
