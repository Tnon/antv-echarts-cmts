<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-11 17:55:35
 * @LastEditTime: 2023-05-12 10:11:24
-->
<template>
  <div class="node">
    <div class="count1">{{ nFormatter(nodeState.inSideCount) }}</div>
    <img :src="bgSvg" :style="style" alt="" />
    <span class="label">{{ nodeState.label }}</span>
    <span class="value" :style="{ color }">
      <count-to :endVal="nodeState.outSideCount" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { E_DangerLevel, type I_NodeData } from '@/views/eight/type'
import bgSvg from './G-01.svg'
import countTo from '@/components/count-to'
import { inject, reactive, watchEffect, ref } from 'vue'
import { nFormatter } from '@/tools/format'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_NodeData>(GraphNode.data)

const style = reactive({ filter: '' })
const color = ref('')
watchEffect(() => {
  color.value = nodeState.level === E_DangerLevel.Danger ? '#dc4444' : '#d0ffdf'
  style.filter = `drop-shadow(${color.value} -300px 0px 0px)`
})

GraphNode?.on('change:data', ({ current }: any) => {
  Object.assign(nodeState, current)
})
</script>

<style scoped lang="less">
.node {
  display: flex;
  align-items: center;
  height: 40px;
  width: 200px;
  color: #fff;
  position: relative;
  img {
    height: 40px;
    transform: translateX(300px);
    margin-left: -2px;
    flex: 60px 0 0;
  }
  .count1 {
    position: absolute;
    left: 5px;
    top: 0px;
    font-size: 20px;
    height: 40px;
    width: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label {
    margin: 0 30px;
    font-size: 18px;
  }
  .value {
    font-size: 14px;
  }
}
</style>
