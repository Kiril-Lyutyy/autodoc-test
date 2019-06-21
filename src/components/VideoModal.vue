<template>
    <div>
        <div class="modal__overlay"
             v-show="videoSrc"
             @click="closeModal">
        </div>
        <div class="modal__wrapper"
             v-if="videoSrc">
        <span class="modal__close_btn"
              @click="closeModal"></span>
            <div class="modal__content">
                <video class="modal__video"
                       :src="videoSrc.src"
                       autoplay
                       loop>
                </video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            videoSrc() {
                return this.$store.getters.videoSrc;
            },
        },
        methods: {
            closeModal() {
                this.$store.dispatch('closeModal');
            }
        },
        mounted: function () {

        }
    }
</script>

<style src="../assets/scss/modal.scss" lang="scss" scoped></style>