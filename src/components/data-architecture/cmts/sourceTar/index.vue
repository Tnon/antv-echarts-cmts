<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 15:23:22
 * @LastEditTime: 2023-08-09 19:08:14
-->
<template>
  <div class="dataNode" :style="{ width: nodeState.width + 'px', height: nodeState.height + 'px' }">
    <img :src="nodeState.icon" alt="" />
    <div class="label">{{ nodeState.label }}</div>
    <div class="circle"></div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Data_Source } from '../../type'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Data_Source & { width: number; height: number }>(GraphNode.data)
</script>

<style scoped lang="less">
.dataNode {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: calc(100% - 20px);
    width: calc(100% - 20px);
  }
  .label {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.85);
  }
  .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #01bea3;
    border-radius: 50%;
    right: -30px;
    bottom: 30px;
  }
}
</style>
