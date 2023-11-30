<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 15:23:22
 * @LastEditTime: 2023-06-02 11:34:33
-->
<template>
  <div class="centerNode">
    <div class="top">
      <div class="border"></div>
      <div class="leftCircle circle"></div>
      <div class="rightCircle circle"></div>
      <img class="loading" :src="loadingGif" />
      <div class="node">
        <img :src="nodeState.rawData.icon" alt="" />
        <div class="label">{{ nodeState.rawData.label }}</div>
      </div>
      <div class="node">
        <img :src="nodeState.trustedData.icon" alt="" />
        <div class="label">{{ nodeState.trustedData.label }}</div>
      </div>
      <div class="node">
        <img :src="nodeState.serviceData.icon" alt="" />
        <div class="label">{{ nodeState.serviceData.label }}</div>
      </div>
    </div>
    <div class="dataLake">
      <div class="label">{{ nodeState.dataLake.label }}</div>
      <img :src="nodeState.dataLake.icon" alt="" />
    </div>
    <div class="bottom">
      <div class="node">
        <img :src="nodeState.cataLog.icon" alt="" />
        <div class="label">{{ nodeState.cataLog.label }}</div>
      </div>
      <div class="node">
        <img :src="nodeState.disCovery.icon" alt="" />
        <div class="label">{{ nodeState.disCovery.label }}</div>
      </div>
      <div class="node">
        <img :src="nodeState.lineAge.icon" alt="" />
        <div class="label">{{ nodeState.lineAge.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Data_Source } from '../../type'
import loadingGif from './imgs/loading.gif'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<{ [k: string]: I_Data_Source }>(GraphNode.data)
</script>

<style scoped lang="less">
.centerNode {
  width: 480px;
  height: 300px;
  position: relative;
  .top {
    position: absolute;
    right: 40px;
    top: -10px;
    width: 310px;
    height: 160px;
    border: 1px dashed #353e8c;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 12;
    background-color: #fff;
    .node {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
      }
      .label {
        margin-top: 12px;
        color: #353e8c;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #353e8c;
      position: absolute;
    }
    .loading {
      position: absolute;
      width: 26px;
      z-index: 11;
      height: 26px;
      left: -13px;
      top: 67px;
      animation: rotate 2s linear infinite;
    }
    .border {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #353e8c;
      position: absolute;
      left: -7px;
      top: 73px;
    }
    .leftCircle {
      left: -5px;
      top: 75px;
    }
    .rightCircle {
      right: -5px;
      top: 75px;
    }
  }
  .dataLake {
    position: absolute;
    width: 80px;
    height: 110px;
    left: 0;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .label {
      font-weight: 800;
      font-size: 20px;
      color: #353e8c;
      line-height: 20px;
    }
    img {
      width: 80px;
    }
  }
  .bottom {
    display: flex;
    position: absolute;
    width: 390px;
    height: 140px;
    bottom: 30px;
    right: 0;
    border: 1px dashed #353e8c;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(./imgs/bolang.gif);
    background-size: 15px;
    background-repeat: repeat;
    .node {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
      }
      .label {
        margin-top: 0px;
        color: #353e8c;
        font-size: 14px;
        font-weight: 600;
      }
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
