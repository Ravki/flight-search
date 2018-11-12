import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './pages/home-page.vue';
import SearchResults from './pages/results-page.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/results',
            name: 'results',
            component: SearchResults
        }
    ]
});