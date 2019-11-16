<template>
    <div class="login" @click="handleLogin">登录页</div>
</template>
<script>
// 接口
import { wx_config, login } from '@/api/index'
// 方法
import { wxAuthority } from '@/plugins/wechat-sdk'

// 依赖
import Qs from 'qs'
import Cookies from 'js-cookie'
const location = window.location
const wx_authrity_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?'
export default {
    name: 'Login',
    data() {
        return {
            options: {}
        }
    },
    computed: {
        code () {
            return this.$route.query && this.$route.query.code
        }
    },
    created() {
        this.initLogin()
    },
    methods: {
        initLogin() {
            const url = location.href
            wx_config({ url }).then(({ data }) => {
                this.options = data
            })
        },
        handleLogin() {
            const _this = this
            if (!this.code) {
                const searchObj = {
                    appid: this.options.appid,
                    redirect_uri: location.origin,
                    scope: 'snsapi_userinfo'
                }
                const searchStr = Qs.stringify(searchObj)
                const url = wx_authrity_url + searchStr
                console.log(url)
                window.open(url)
            } else {
                wxAuthority(this.options).then(
                    () => {
                        const params = {
                            code: _this.code
                        }
                        login(params).then(({data}) => {
                            Cookies.set('Authorization', data)
                            this.$router.push({ name: 'sign_page' })
                        })
                    },
                    err => {
                        this.$vux.toast.show({
                            text: '微信授权失败'
                        })
                    }
                )
            }
        }
    }
}
</script>