import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "../node_modules/vuetify/dist/vuetify.min.css";
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
