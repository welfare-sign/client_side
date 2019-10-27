<template>
    <div class="sign-page">
        <sign-panel />
        <user-info/>
        <merchant-recommend/>
    </div>
</template>
<script>
/**
 * @description 签到页（入口页面）
 * @author 顾超<beyondc@foxmail.com>
 */
// 组件
import SignPanel from './Sign/SignPanel'
import UserInfo from './Sign/UserInfo'
import MerchantRecommend from './Sign/MerchantRecommend'

export default {
    name: 'SignPage',
    components: {
        SignPanel,
        UserInfo,
        MerchantRecommend
    }
}
</script>
<style lang="less" scoped>
@import url('../styles/variables.less');
.sign-page {
    padding-top: 72px;
    padding-left: @normal-gap;
    padding-right: @normal-gap;
    padding-bottom: 20px;
    position: relative;
}
</style>