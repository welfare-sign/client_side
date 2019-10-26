import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 插件
import './plugins/vux'

// 样式
import 'reset-css'
import './styles/theme.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
