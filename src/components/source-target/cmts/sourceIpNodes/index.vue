<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-18 15:45:55
 * @LastEditTime: 2023-05-18 17:37:41
-->
<template>
  <div class="ipNode">
    <img :src="virusImg" class="virusImg" alt="" />
    <span class="ip">{{ nodeState.ip }}</span>
    <div
      class="tooltip"
      :style="{ [nodeState.dirction === 'lr' ? 'left' : 'right']: '-331px' }"
      :class="{ first: nodeState.index === 0, lasted: nodeState.index === nodeState.length - 1 }"
    >
      <div class="title">
        <div class="label">External Actor</div>
        <div class="val">{{ nodeState.external }}</div>
      </div>
      <div class="node">
        <div class="label">IP:</div>
        <div class="val">{{ nodeState.ip }}</div>
      </div>
      <div class="node">
        <div class="label">Reputation:</div>
        <div class="val">{{ nodeState.reputation }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { I_Source_Ip, T_Dirction } from '../../type'
import virusImg from './imgs/Virus.svg'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Source_Ip & { index: number; length: number; dirction: T_Dirction }>(
  GraphNode.data
)

GraphNode?.on(
  'change:data',
  ({ current }: { current: I_Source_Ip; index: number; length: number; dirction: T_Dirction }) => {
    Object.assign(nodeState, current)
  }
)
</script>

<style scoped lang="less">
.ipNode {
  border: 1px solid #66282a;
  border-radius: 16px;
  width: 180px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #f82c30;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  &:hover {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(248, 44, 48, 0) 10%,
      rgba(248, 44, 48, 0.2) 89%
    );
    .tooltip {
      display: block;
    }
  }
  .virusImg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  .tooltip {
    background: #1b1313;
    min-height: 130px;
    display: none;
    border: 1px solid #66282a;
    border-radius: 8px;
    width: 320px;
    padding: 20px 16px;
    position: absolute;

    z-index: 1111;
    .title {
      margin-bottom: 12px;
      align-items: baseline;
      display: flex;
      .label {
        color: #fff;
        font-size: 14px;
        margin-right: 10px;
      }
      .val {
        color: #f82c30;
        font-size: 12px;
      }
    }
    .node {
      margin: 8px 0;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      .label {
        margin-right: 10px;
      }
    }
  }
  .first {
    top: 0;
  }
  .lasted {
    bottom: 0;
  }
}
</style>
