<template>
    <div class="items row no-gutters">
        <div :id="'item-' + item.id"
             class="item col-sm-12"
             v-for="(item, index) in results">
            <div class="row no-gutters item__wrapper">
                <div class="col-md-6 col-sm-12">
                    <h3 class="item__title">{{ item.title }}</h3>
                    <p class="item__date">date: {{ item.date }}</p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div v-if="item.src"
                         class="item__img_wrapper video"
                         @click="playVideo({ src : item.src, id : item.id })">
                        <img class="item__img"
                             :src="item.thumb"
                             :alt="item.title">
                    </div>
                    <div v-else
                         class="item__img_wrapper">
                        <img class="item__img"
                             :src="item.thumb"
                             :alt="item.title">
                    </div>
                </div>
            </div>
        </div>
        <p class="nothing_found"
           v-show="results.length === 0">Nothing found...</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            results() {
                return this.$store.getters.results;
            },
        },
        methods: {
            getItems() {
                this.$store.dispatch('getData');
            },
            playVideo(src) {
                this.$store.dispatch('openModal', src);
            }
        },
        mounted: function () {
            this.getItems();
        },
    }
</script>

<style src="../assets/scss/showResult.scss" lang="scss" scoped></style>