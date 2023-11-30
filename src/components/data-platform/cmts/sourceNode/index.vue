<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 15:23:22
 * @LastEditTime: 2023-06-01 18:24:27
-->
<template>
  <div class="dataNode">
    <div class="gifContainer">
      <img :src="nodeState.icon" alt="" />
    </div>
    <div class="label">{{ nodeState.label }}</div>
    <div class="circle"></div>
    <img class="loading" :src="loadingGif" />
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
.dataNode {
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .gifContainer {
    width: 80px;
    flex: 80px 0 0;
    border: 1px dashed #5a19ae;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 60px;
    }
  }
  .label {
    font-size: 18px;
    color: #9277b8;
  }
  .circle {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #5a19ae;
    right: 32px;
    top: 37px;
  }
  .loading {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 25px;
    top: 30px;
  }
}
</style>
