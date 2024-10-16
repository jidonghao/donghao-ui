<script setup>
import {defineEmits, defineProps} from 'vue'

const emits = defineEmits(['click'])

defineProps({
  content: {
    type: String,
    default: '没有更多了，点击重新加载'
  },
  type: {
    type: String,
    default: "normal"
  },
  color: {
    type: String,
    default: "grey"
  }
})

function click() {
  emits('click')
}

</script>

<template>
  <view class="no-other" @click="click">
    <image v-if="type==='noNetwork'" mode="heightFix" src="./no-network.png"/>
    <image v-else mode="heightFix" src="./no-other.png"/>
  </view>
</template>

<style scoped lang="scss">
.no-other {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 32rpx;
  color: v-bind(color);

  image {
    width: 100%;
  }
}
</style>