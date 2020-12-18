import Vue from 'vue';
import VueSwal from 'vue-swal';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(VueSwal).use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
