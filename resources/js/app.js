

require('./bootstrap');

// import
window.Vue = require('vue');
// vue router
import VueRouter from 'vue-router';
import {routes} from "./routes";
import Vuex from 'vuex';

// End import
// Use
Vue.use(VueRouter);
Vue.use(Vuex);
import storeData from './store/index';
const store = new Vuex.Store({
    storeData
});
const router = new VueRouter({
    routes,
    mode:'history'
});
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home-component', require('./components/AdminMaster.vue').default);



const app = new Vue({
    el: '#app',
    router,
    store
});
