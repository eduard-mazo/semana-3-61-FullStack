import Vue from 'vue';
import VueSwal from 'vue-swal';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueSwal).use(BootstrapVue);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
