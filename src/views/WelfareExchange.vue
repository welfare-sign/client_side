<template>
  <div class="welfare-exchange">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <w-card class="item">
          <div class="item-content">
            <input
              class="w-radio"
              type="radio"
              name="select"
              :id="item.id"
              :checked="item.id === selected"
            />
            <label :class="['w-radio-next', {'checked': item.id === selected}]" :for="item.id">
              <w-merchant-item
                :name="item.name"
                :address="item.address"
                :desc="item.desc"
                :logo="item.logo"
              />
            </label>
          </div>
        </w-card>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @description 福利兑换（组件）
 * @author 顾超<beyondc@foxmail.com>
 */
// 组件
import WCard from '@/components/WCard'
import WMerchantItem from '@/components/WMerchantItem'
export default {
  name: 'WelfareExchange',
  components: {
    WCard,
    WMerchantItem
  },
  data() {
    return {
      selected: '1',
      list: [
        {
          id: '1',
          name: '西域狼烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/1.png')
        },
        {
          id: '2',
          name: '小付烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/2.png')
        },
        {
          id: '3',
          name: '新疆麦麦提烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/3.png')
        },
        {
          id: '4',
          name: '新疆麦麦提烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/4.png')
        },
        {
          id: '5',
          name: '新疆麦麦提烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/5.png')
        },
        {
          id: '6',
          name: '新疆麦麦提烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/6.png')
        },
        {
          id: '7',
          name: '新疆麦麦提烧烤（云南路店）',
          address: '云南南路100号',
          desc: '签到5天，即享30瓶啤酒',
          logo: require('@/assets/imgs/7.jpeg')
        }
      ]
    }
  },
  methods: {
    //   handleSelect() {
    //       /**
    //        * @description 单选框选中事件的返回函数
    //        * @return (void)
    //        */
    //       this.selected 
    //   }
  }
}
</script>
<style lang="less" scoped>
@import url('../styles/index');
.list {
  padding: @normal-gap;
  & > li + li {
    margin-top: @assist-gap;
  }
}
.item {
  padding: @assist-gap;
}
.item-content {
  display: flex;
  align-items: center;
}
.w-radio {
  width: 20px;
  height: 20px;
  opacity: 0;
  margin-right: 8px;
}
.w-radio-next {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 35px;
    left: -28px;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    // .linear-gradient-horizontal();
  }
  &.checked::before {
    border: none;
    // background: url('../assets/checked.png');
    background-origin: border-box;
    .linear-gradient-horizontal();
    box-shadow: 0px 0px 3px 3px rgba(255, 141, 0, 0.4);
  }
}
</style>