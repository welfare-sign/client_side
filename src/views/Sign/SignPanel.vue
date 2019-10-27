<template>
  <w-card class="sign-panel">
    <header>
      <h1>现在开始福利签</h1>
      <span>签到规则</span>
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
      <x-button type="primary">签 到</x-button>
    </main>
  </w-card>
</template>
<script>
/**
 * @description 签到板（组件）
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
  padding: 20px @normal-gap;
  background: #fff;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}
.sign-list {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>