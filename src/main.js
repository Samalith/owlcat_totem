import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import store from './store';
import router from './router';
//import Web3 from 'web3/dist/web3.min.js'

Vue.config.productionTip = false;
//const web3 = new Web3(Web3.givenProvider || 'wss://some.local-or-remote.node:8546');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


