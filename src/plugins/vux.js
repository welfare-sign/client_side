import Vue from 'vue'
import { XButton, Group, CellBox, XImg, WechatPlugin, AjaxPlugin } from 'vux'

Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('cell-box', CellBox)
Vue.component('x-img', XImg)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)