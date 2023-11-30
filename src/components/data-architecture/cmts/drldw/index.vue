<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 15:23:22
 * @LastEditTime: 2023-08-10 15:01:45
-->
<template>
  <div class="dataNode" :style="{ width: nodeState.width + 'px', height: nodeState.height + 'px' }">
    <img :src="nodeState.icon" alt="" />
    <div class="label">{{ nodeState.label }}</div>
    <div class="circleT" v-if="nodeState.flag"></div>
    <div class="circleB" v-if="nodeState.flag"></div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Data_Source } from '../../type'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Data_Source & { width: number; height: number; flag: boolean }>(
  GraphNode.data
)
</script>

<style scoped lang="less">
.dataNode {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: calc(100% - 20px);
    width: calc(100% - 20px);
  }
  .label {
    font-size: 16px;
    color: #01bea3;
    font-weight: 800;
    word-break: keep-all;
    width: 200px;
    text-align: center;
  }
  .circleT {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #01bea3;
    border-radius: 50%;
    left: 30px;
    top: -50px;
  }
  .circleB {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #01bea3;
    border-radius: 50%;
    left: 30px;
    bottom: -80px;
  }
}
</style>
