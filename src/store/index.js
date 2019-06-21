import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        results: [],
        filterBy: 1,
        filterByYear: '',
        sortBy: 'asc',
        videoSrc: null,
    },
    getters: {
        results(state) {
            const filterResults = state.results.filter((item) => {
                if ( (item.type == state.filterBy && state.filterByYear.trim() == '') || (item.type == state.filterBy && state.filterByYear.trim() == item.date.split('-')[0]) ) {
                    return item;
                }
            });
            switch (state.sortBy) {
                case 'asc':
                    return filterResults.sort((a, b) => (
                        a.id - b.id
                    ));
                case 'desc':
                    return filterResults.sort((a, b) => (
                        b.id - a.id
                    ))
            }
        },
        videoSrc(state) {
            return state.videoSrc;
        },
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    actions: {
        getData({ commit }) {
            const url = '/nba.json';
            axios.get(url).then(response => {
                const servResp = response.data;
                const results = [];
                for (let key in servResp) {
                    results.push(servResp[key]);
                }
                commit('set', { type: 'results', items: results });
            }).catch(error => {
                console.log(error);
            })
        },
        setFilterValue({ commit }, newValue) {
            commit('set', { type: 'filterBy', items: newValue });
        },
        setFilterByYearValue({ commit }, newValue) {
            commit('set', { type: 'filterByYear', items: newValue });
        },
        setSortValue({ commit }, newValue) {
            commit('set', { type: 'sortBy', items: newValue });
        },
        openModal({ commit }, src) {
            commit('set', { type: 'videoSrc', items: src });
        },
        closeModal({ commit }) {
            commit('set', { type: 'videoSrc', items: null });
        },
    }
});

export default store;