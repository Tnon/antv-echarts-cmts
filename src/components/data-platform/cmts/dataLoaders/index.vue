<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 15:23:22
 * @LastEditTime: 2023-06-02 12:56:03
-->
<template>
  <div class="dataLoaders">
    <div class="label">{{ nodeState.label }}</div>
    <div class="circle">
      <img :src="nodeState.icon" alt="" />
    </div>
    <img class="ru" :src="rightIcon" alt="" />
    <img class="ll" :src="loading" alt="" />
    <img class="rl" :src="loading" alt="" />
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue'
import type { I_Data_Source } from '../../type'
import rightIcon from './imgs/ri.gif'
import loading from './imgs/loading.gif'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Data_Source>(GraphNode.data)
</script>

<style scoped lang="less">
.dataLoaders {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .ru {
    position: absolute;
    width: 100px;
    height: 100px;
    right: -34px;
    top: 44px;
  }
  .ll {
    width: 40px;
    height: 40px;
    position: absolute;
    left: -4px;
    top: 72px;
  }
  .rl {
    width: 36px;
    height: 36px;
    position: absolute;
    position: absolute;
    right: -2px;
    top: 76px;
  }
  .label {
    font-size: 20px;
    font-weight: 600;
    color: #353e8c;
  }
  .circle {
    width: 120px;
    flex: 120px 0 0;
    border-radius: 50%;
    border: 1px dotted #353e8c;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 140px;
    }
  }
}
</style>
