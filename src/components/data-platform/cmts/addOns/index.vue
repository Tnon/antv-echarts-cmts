<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 18:58:31
 * @LastEditTime: 2023-05-30 15:39:57
-->
<template>
  <div class="addOns">
    <div class="label">{{ nodeState.title.label }}</div>
    <div class="round">
      <div class="node">
        <img :src="nodeState.insightsStores.icon" alt="" />
        <div class="text">{{ nodeState.insightsStores.label }}</div>
      </div>
      <div class="node">
        <img :src="nodeState.aiStores.icon" alt="" />
        <div class="text">{{ nodeState.aiStores.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Data_Source } from '../../type'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<{ [k: string]: I_Data_Source }>(GraphNode.data)
</script>

<style scoped lang="less">
.addOns {
  height: 370px;
  width: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .label {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 800;
    color: #388a6e;
  }
  .round {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed #388a6e;
    border-radius: 10px;
    .node {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      .text {
        font-size: 14px;
        font-weight: 600;
        color: #388a6e;
      }
      img {
        width: 80%;
      }
    }
  }
}
</style>
