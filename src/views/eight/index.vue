<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 20:47:42
 * @LastEditTime: 2023-06-07 11:14:33
-->
<template>
  <div class="all">
    <gaugePieFlow
      :gaugeScore="score"
      :gaugeDataRange="dataRange"
      :gaugeThemeColor="gaugeThemeColor"
      :gaugeSize="gaugeSize"
      :containerSize="containerSize"
      :nodeListData="nodeListData"
    />
  </div>
</template>

<script setup lang="ts">
import gaugePieFlow from '@/components/gaugePieFlow'
import { reactive, ref } from 'vue'
import type { I_NodeData, I_Range } from './type'
const score = ref(77)
const gaugeThemeColor = ref('#1EF9A1')
const dataRange = ref<I_Range<any>[]>([
  {
    begin: 0,
    end: 20,
    label: 'LOW',
    color: {
      type: 'radial',
      x: 0.6,
      y: 0.5,
      r: 1.2,
      colorStops: [
        {
          offset: 0,
          color: '#000' // 0 ~ 20%处的颜色
        },
        {
          offset: 1,
          color: '#58FFBC' // 100% 处的颜色
        }
      ]
    }
  },
  {
    begin: 30,
    end: 50,
    label: 'MID',
    color: {
      type: 'radial',
      x: 0.6,
      y: 0.5,
      r: 1.2,
      colorStops: [
        {
          offset: 0,
          color: '#000' // 0 ~ 20%处的颜色
        },
        {
          offset: 1,
          color: '#58FFBC' // 100% 处的颜色
        }
      ]
    }
  },
  {
    begin: 70,
    end: 90,
    label: 'HIGH'
  }
])
const gaugeSize = reactive({
  width: 400,
  height: 400
})

//
const containerSize = reactive({
  width: 1600,
  height: 1000
})
const nodeListData = ref<I_NodeData[]>([])

for (let i = 0; i < 15; i++) {
  nodeListData.value.push({
    level: Math.floor(Math.random() * 2),
    inSideCount: Math.floor(Math.random() * 10000),
    outSideCount: Math.floor(Math.random() * 100),
    label: 'LabelName' + i,
    id: i + ''
  })
}
// setTimeout(() => {
//   score.value = 68
//   dataRange.value[0].begin = 10
//   dataRange.value[0].end = 20
//   dataRange.value[0].label = 'LOW1'
// }, 2000)
//mock data
setInterval(() => {
  nodeListData.value = []
  for (let i = 0; i < 15; i++) {
    nodeListData.value.push({
      level: Math.floor(Math.random() * 2),
      inSideCount: Math.floor(Math.random() * 10000000),
      outSideCount: Math.floor(Math.random() * 100),
      label: 'LabelName' + i,
      id: i + ''
    })
  }
  score.value = Math.floor(Math.random() * 100)
}, 8000)
</script>

<style scoped>
.all {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
