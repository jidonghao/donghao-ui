<script setup>
import {defineProps} from "vue"

defineProps({
  color: {
    type: String,
    default: "grey"
  }
})
</script>

<template>
  <view class="loading">
    <image mode="heightFix" src="./loading.png"/>
  </view>
</template>

<style scoped lang="scss">
.loading {
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