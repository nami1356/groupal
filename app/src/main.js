import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from './firebase'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, {locale});

Vue.use(firebase)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
