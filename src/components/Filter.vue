<template>
    <div class="filter">
        <br/>
        <div class="filter__section">
            <p class="filter__title">Filter by type:</p>
            <input class="filter__radio"
                   id="filterByImage"
                   type="radio"
                   v-model="filterBy"
                   value="1"
                   @change="setFilterBy">
            <label class="filter__label"
                   for="filterByImage">Images</label>
        </div>
        <div class="filter__section">
            <input class="filter__radio"
                   id="filterByVideos"
                   type="radio"
                   v-model="filterBy"
                   value="2"
                   @change="setFilterBy">
            <label class="filter__label"
                   for="filterByVideos">Videos</label>
        </div>
        <br/>
        <div class="filter__section">
            <p class="filter__title">Filter by year:</p>
            <input class="filter__text"
                   id="filterByYear"
                   type="text"
                   v-model="filterByYear"
                   value=""
                   @input="setFilterByYear"
                   @keypress="allowNumbersOnly($event)">
        </div>
        <br/>
        <div class="filter__section">
            <p class="filter__title">Sort by id</p>
            <input class="filter__radio"
                   id="sortASC"
                   type="radio"
                   v-model="sortBy"
                   value="asc"
                   @change="setSortBy">
            <label class="filter__label"
                   for="sortASC">ASC</label>
        </div>
        <div class="filter__section">
            <input class="filter__radio"
                   id="sortDESC"
                   type="radio"
                   v-model="sortBy"
                   value="desc"
                   @change="setSortBy">
            <label class="filter__label"
                   for="sortDESC">DESC</label>
        </div>
        <br/>
    </div>
</template>

<script>
    export default  {
        data() {
            return {
                filterBy: this.$store.state.filterBy,
                filterByYear: this.$store.state.filterByYear,
                sortBy: this.$store.state.sortBy,
            }
        },
        computed: {
            videoSrc() {
                return this.$store.getters.videoSrc;
            },
        },
        methods: {
            setFilterBy() {
                this.$store.dispatch('setFilterValue', this.filterBy);
                this.paramsToUrl();
            },
            setSortBy() {
                this.$store.dispatch('setSortValue', this.sortBy);
                this.paramsToUrl();
            },
            setFilterByYear() {
                this.$store.dispatch('setFilterByYearValue', this.filterByYear);
                this.paramsToUrl();
            },
            allowNumbersOnly(e) {
                if (e.keyCode < 48 || e.keyCode > 57) {
                    e.preventDefault();
                }
            },
            paramsToUrl() {
                const location = '/?';
                const type = this.filterBy ? 'type=' + this.filterBy : '';
                const year = this.filterByYear ? '&year=' + this.filterByYear : '';
                const sort = this.sortBy ? '&sort=' + this.sortBy : '';
                const id = this.videoSrc ? '&id=' + this.videoSrc.id : '';
                const url = location + type + year + sort + id;
                history.pushState(null, null, url);
            },
        },
        watch: {
            videoSrc: function () {
                this.paramsToUrl();
            }
        },
        mounted() {
            this.paramsToUrl();
        }
    }
</script>

<style src="../assets/scss/filter.scss" lang="scss" scoped></style>