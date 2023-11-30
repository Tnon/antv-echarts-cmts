<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-09 17:59:15
 * @LastEditTime: 2023-08-09 19:57:33
-->
<template>
  <div class="listContainer" :class="{ animate }" :style="{ height: nodeStateCount * 30 + 'px' }">
    <template v-for="item in arr" :key="item">
      <div class="node"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { inject, onUnmounted, ref, watchEffect } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeStateCount = ref<number>(GraphNode.data)
const arr = ref<number[]>([])
const animate = ref(false)
watchEffect(() => {
  for (let i = 0; i < nodeStateCount.value; i++) {
    arr.value.push(i)
  }
})
let timer: any = 0
timer = setInterval(() => {
  animate.value = !animate.value
}, 6000)
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped lang="less">
.animate {
  animation: rotate 2s ease-in-out;
}
.listContainer {
  width: 20px;
  padding: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  .node {
    width: 100%;
    height: 10px;
    margin-bottom: 10px;
    background-color: #01bea3;
  }
}
@keyframes rotate {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(2);
    opacity: 0.2;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  }
  90% {
    transform: scale(1.2);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
