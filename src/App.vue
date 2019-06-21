<template>
    <div id="app">
        <div class="container content">
            <h1>Test assigment</h1>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <h2>Filter</h2>
                    <filter-component></filter-component>
                </div>
                <div class="col-lg-8 col-md-12">
                    <h2>Results</h2>
                    <show-result></show-result>
                </div>
            </div>
        </div>
        <video-modal></video-modal>
    </div>
</template>

<script>
    import Filter from './components/Filter';
    import ShowResult from './components/ShowResult';
    import VideoModal from './components/VideoModal';

    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components: {
            'filter-component': Filter,
            'show-result': ShowResult,
            'video-modal': VideoModal,
        },
        /*methods: {

        },
        mounted() {

        }*/
    }
</script>

<style lang="scss">
    @import '../node_modules/vuejs-noty/dist/vuejs-noty.css';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

<style src="./assets/scss/app.scss" lang="scss"></style>
