<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 19:44:41
 * @LastEditTime: 2023-05-18 13:57:28
-->
<template>
  <div class="centerNode">
    <img :src="hostImg" class="hostImg" alt="" />
    <div class="ip">{{ state.ip }}</div>
    <div class="label">{{ state.label }}</div>
    <img class="backLine" :src="lineImg" alt="" />
    <img class="backLight" :src="lightImg" alt="" />
    <img class="backDaimond" :src="diamondImg" alt="" />
    <div class="sourceImg" :style="sourceStyle">
      <img :src="sourceImg" alt="" />
      <div class="text">Source</div>
    </div>
    <div class="targetImg" :style="targetStyle">
      <div class="point"></div>
      <div class="text">Destination</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue'
import type { I_Center_Host, T_Dirction } from '../../type'
import hostImg from './imgs/host.svg'
import lineImg from './imgs/line.svg'
import lightImg from './imgs/light.png'
import diamondImg from './imgs/diamond.svg'
import sourceImg from './imgs/Source.svg'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Center_Host & { dirction: T_Dirction }>(GraphNode.data)
const sourceStyle = reactive<any>({})
const targetStyle = reactive<any>({})
if (nodeState.dirction === 'lr') {
  sourceStyle.left = '45px'
} else {
  sourceStyle.right = '45px'
}
if (nodeState.dirction === 'lr') {
  targetStyle.right = '45px'
} else {
  targetStyle.left = '45px'
}
const state = reactive<I_Center_Host & { dirction: T_Dirction }>(nodeState)
GraphNode?.on('change:data', ({ current }: { current: I_Center_Host }) => {
  Object.assign(state, current)
})
</script>

<style scoped lang="less">
.centerNode {
  width: 300px;
  height: 300px;
  position: relative;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .hostImg {
    width: 32px;
    height: 18px;
    position: relative;
    z-index: 20;
  }
  .ip {
    color: #fff;
    font-size: 16px;
    margin-top: 4px;
    position: relative;
    z-index: 20;
  }
  .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.25);
    position: relative;
    z-index: 20;
  }
  .backLine {
    width: 300px;
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .backDaimond {
    width: 180px;
    position: absolute;
    height: 180px;
    top: 60px;
    left: 60px;
    z-index: 3;
  }
  .backLight {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    animation: rotate 2s linear infinite;
    z-index: 2;
  }
  .sourceImg {
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: column;
    .text {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 4px;
    }
  }
  .targetImg {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    height: 10px;
    width: 10px;
    .point {
      height: 10px;
      width: 10px;
      flex: 10px 0 0;
      background-color: #f82c30;
      border-radius: 50%;
    }
    .text {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 12px;
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
