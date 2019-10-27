<template>
  <w-card class="sign-panel">
    <header>
      <x-img :default-src="avatar" class="avatar" />
      <div class="content">
        <span class="user">James：</span>
        <h2>“在福利签薅羊毛，一起签到领啤酒”</h2>
      </div>
    </header>
    <main>
      <ul class="sign-list">
        <w-sign-item
          v-for="item in list"
          :signed="item.signed"
          :missed="item.missed"
          :final="item.final"
          :label="item.label"
          :key="item.id"
        />
      </ul>
      <x-button type="primary">签到助力</x-button>
    </main>
  </w-card>
</template>
<script>
/**
 * @description 助力签到板（组件）
 * @author 顾超<beyondc@foxmail.com>
 */
// 组件
import WCard from '@/components/WCard'
import WSignItem from '@/components/WSignItem'
export default {
  name: 'SignPanel',
  components: {
    WCard,
    WSignItem
  },
  data() {
    return {
        avatar: require('@/assets/avatar.jpg'),
      list: [
        {
          id: '1',
          signed: true,
          missed: false,
          final: false,
          label: '第1天'
        },
        {
          id: '2',
          signed: false,
          missed: true,
          final: false,
          label: '第2天'
        },
        {
          id: '3',
          signed: false,
          missed: false,
          final: false,
          label: '第3天'
        },
        {
          id: '4',
          signed: false,
          missed: false,
          final: false,
          label: '第4天'
        },
        {
          signed: false,
          missed: false,
          final: true,
          label: '第5天'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../styles/variables');
.sign-panel {
  //   margin-top: 72px;
  padding: 20px @normal-gap;
  background: #fff;
}
header {
  display: flex;
  padding: 8px 0;
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
}
.user {
    font-size: @assist-font-size;
}
.sign-list {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>