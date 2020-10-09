import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/andt-design-vue'
import 'ant-design-vue/dist/antd.css';
import './plugins/vue-lazyload'
import './plugins/infinite-loading'
import './filters'
import './directives'
import './assets/css/index.less'
import { errorCaptured } from './utils/assist'

Vue.prototype.$errorCaptured = errorCaptured
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
