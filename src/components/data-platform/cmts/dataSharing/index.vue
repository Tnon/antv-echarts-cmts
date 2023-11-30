<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 18:10:07
 * @LastEditTime: 2023-06-02 12:04:42
-->
<template>
  <div class="dataSharing">
    <div class="label">{{ nodeState.label }}</div>
    <div class="border">
      <img :src="nodeState.icon" alt="" />
      <div class="circle"></div>
      <img class="loading" :src="loadingGif" />
    </div>
  </div>
</template>

<script setup lang="ts">
import loadingGif from './imgs/loading.gif'
import { reactive, inject } from 'vue'
import type { I_Data_Source } from '../../type'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Data_Source>(GraphNode.data)
</script>

<style scoped lang="less">
.dataSharing {
  width: 170px;
  height: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  .label {
    font-size: 20px;
    font-weight: 800;
    color: #0b8a5e;
    align-items: flex-end;
  }
  .border {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px dashed #0b8a5e;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60%;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #0b8a5e;
      bottom: -5px;
      left: 20px;
      position: absolute;
    }
    .loading {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 15px;
      bottom: -10px;
      animation: rotate 2s linear infinite;
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
