<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 18:29:38
 * @LastEditTime: 2023-06-02 11:45:55
-->
<template>
  <div class="dataVis">
    <div class="label">{{ nodeState.label }}</div>
    <div class="round">
      <img :src="nodeState.icon" alt="" />
      <div class="circle"></div>
      <img class="loading" :src="loadingGif" />
      <div class="squre"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Data_Source } from '../../type'
import loadingGif from './imgs/loading.gif'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Data_Source>(GraphNode.data)
</script>

<style scoped lang="less">
.dataVis {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  .label {
    font-size: 16px;
    color: #388a6e;
    text-align: right;
    flex: 1;
    margin-right: 10px;
  }
  .round {
    width: 60px;
    flex: 60px 0 0;
    border: 1px dashed #388a6e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
      height: 80%;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #0b8a5e;
      bottom: -5px;
      left: 85px;
      position: absolute;
    }
    .loading {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 80px;
      bottom: -10px;
      animation: rotate 2s linear infinite;
    }
    .squre {
      width: 10px;
      height: 14px;
      position: absolute;
      right: -5px;
      bottom: 23px;
      background-color: #388a6e;
    }
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
