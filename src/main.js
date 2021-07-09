import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin, rtdbPlugin } from 'vuefire'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
// eslint-disable-next-line no-unused-vars


Vue.use(firestorePlugin);
Vue.use(rtdbPlugin);
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
