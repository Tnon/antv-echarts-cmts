<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 18:45:49
 * @LastEditTime: 2023-05-26 11:29:26
-->
<template>
  <div class="sourceNode" @click="showChildren">
    <img class="backImg uns" :src="unselectBg" alt="" />
    <img class="backImg sel" v-if="actived" :src="selectBg" alt="" />
    <img class="logo" :src="modules[state.logo]" />
    <div class="count">{{ nFormatter(state.count) }}</div>
    <div class="label">{{ state.country }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject, ref } from 'vue'
import type { I_Source_Country } from '../../type'
import unselectBg from './imgs/Source-unSelect.png'
import selectBg from './imgs/Source-Select.png'
import countries from '@/assets/map/countries'
import modules from '@/assets/map/imgs'
import { nFormatter } from '@/tools/format'

const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_Source_Country & { openSourceChildren: Function; y: number }>(
  GraphNode.data
)
const actived = ref(false)
const state = reactive({
  logo: '',
  count: 0,
  country: '',
  y: 0
})
const renderData = (nodeState: I_Source_Country & { y: number }) => {
  const result = (countries as any)[nodeState.countryCode]
  state.logo = nodeState.countryCode
  state.country = result.en
  state.count = nodeState.count
  state.y = nodeState.y!
}
renderData(nodeState)

const showChildren = () => {
  state.count &&
    nodeState.openSourceChildren('source_' + nodeState.countryCode, state.y, state.count)
}
GraphNode?.on(
  'change:data',
  ({ current }: { current: I_Source_Country & { actived?: boolean; y: number } }) => {
    if (current.actived !== undefined) {
      actived.value = current.actived
    }
    renderData(current)
  }
)
</script>

<style scoped lang="less">
.sourceNode {
  cursor: pointer;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .logo {
    width: 40px;
    height: 26px;
  }
  .count {
    color: #fff;
    margin-top: 6px;
    font-size: 12px;
    font-weight: 600;
  }
  .label {
    position: absolute;
    color: rgba(255, 255, 255, 0.55);
    bottom: -25px;
    width: 100%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .backImg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: rotate 2s linear infinite;
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
