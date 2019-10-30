import Vue from 'vue'
import VueRouter from 'vue-router'
import SignPage from '@/views/SignPage'
import AidSign from '@/views/AidSign'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'sign_page',
		component: SignPage
	},
	{
		path: '/aid_sign',
		name: 'aid_sign',
		component: AidSign
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/Login')
	},
	{
		path: '/my_welfare',
		name: 'my_welfare',
		component: () => import('@/views/MyWelfare')
	},
	{
		path: '/store_list',
		name: 'store_list',
		component: () => import('@/views/StoreList')
	},
	{
		path: '/welfare_exchange',
		name: 'welfare_exchange',
		component: () => import('@/views/WelfareExchange')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
