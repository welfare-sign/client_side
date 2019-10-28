<template>
    <div class="aid-sign">
        <aid-sign-panel />
        <merchant-recommend/>
    </div>
</template>
<script>
/**
 * @description 签到助力页（分享入口页面）
 * @author 顾超<beyondc@foxmail.com>
 */
// 组件
import AidSignPanel from './Sign/AidSignPanel'
import MerchantRecommend from './Sign/MerchantRecommend'

export default {
    name: 'SignPage',
    components: {
        AidSignPanel,
        MerchantRecommend
    }
}
</script>
<style lang="less" scoped>
@import url('../styles/index');
.aid-sign {
    .linear-gradient-horizontal();
    padding: 20px @normal-gap;
    position: relative;
}
</style>