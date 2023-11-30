<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 18:45:49
 * @LastEditTime: 2023-05-18 14:22:05
-->
<template>
  <div class="sourceNode">
    <img class="backImg uns" :src="unselectBg" alt="" />
    <img class="backImg sel" :src="selectBg" alt="" />
    <img class="logo" :src="modules[state.logo]" />
    <div class="label">{{ state.ip }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue'
import type { I_Target_Country } from '../../type'
import unselectBg from './imgs/Destination-unSelect.svg'
import selectBg from './imgs/Destination-Select.svg'
import modules from '@/assets/map/imgs'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Target_Country>(GraphNode.data)
const state = reactive({
  logo: '',
  ip: ''
})
const renderData = (nodeState: I_Target_Country) => {
  state.logo = nodeState.countryCode
  state.ip = nodeState.ip
}
renderData(nodeState)
GraphNode?.on('change:data', ({ current }: { current: I_Target_Country }) => {
  renderData(current)
})
</script>

<style scoped lang="less">
.sourceNode {
  cursor: pointer;
  width: 156px;
  height: 94px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .logo {
    width: 40px;
    height: 26px;
  }
  .label {
    color: #fff;
    margin-top: 6px;
    font-weight: 600;
    font-size: 12px;
  }

  .backImg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .sel {
    display: none;
  }
  &:hover {
    .sel {
      display: block;
    }
  }
}
</style>
