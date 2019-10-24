import Vue from 'vue'
import { XButton, WechatPlugin, AjaxPlugin } from 'vux'

Vue.component('x-button', XButton)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)