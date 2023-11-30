<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-06 20:46:30
 * @LastEditTime: 2023-08-09 15:22:54
-->
<template>
  <gaugeAttack
    :topNodeData="topNodeData"
    :midNodeData="midNodeData"
    :bottomNodeData="bottomNodeData"
    :height="height"
    :width="width"
    :chartData="chartData"
    :attackSourceTargetData="attackSourceTargetData"
  />
  <!-- <button @click="open">aaa</button> -->
</template>

<script setup lang="ts">
import gaugeAttack from '@/components/gauge-earth'
import type {
  I_Statistics_Node,
  I_Chart_Data,
  I_Globe_Attack_Data
} from '@/components/gauge-earth/type'
import { ref } from 'vue'
import img1 from './imgs/1.png'
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'
import img4 from './imgs/4.png'
import img5 from './imgs/5.png'
// topData
const topNodeData = ref<I_Statistics_Node[]>([
  {
    label: 'topA',
    value: '1 / 2'
  },
  {
    label: 'topB',
    value: '1 / 2'
  },
  {
    label: 'topC',
    value: '1 / 2'
  },
  {
    label: 'topD',
    value: '1 / 2'
  },
  {
    label: 'topE',
    value: '1 / 2'
  }
])
//midNodeData
const midNodeData = ref<I_Statistics_Node[]>([
  {
    label: 'midA',
    value: '1233'
  },
  {
    label: 'midB',
    value: '3432'
  }
])
// topData
const bottomNodeData = ref<I_Statistics_Node[]>([
  {
    label: 'bottomA',
    value: '1 / 2'
  },
  {
    label: 'bottomB',
    value: '1 / 2'
  },
  {
    label: 'bottomC',
    value: '1 / 2'
  },
  {
    label: 'bottomD',
    value: '1 / 2'
  },
  {
    label: 'bottomE',
    value: '1 / 2'
  }
])

//width
const width = ref<number>(800)
//height
const height = ref<number>(800)

//charData
const chartData = ref<I_Chart_Data[]>([
  {
    label: '22/23',
    areaCount: 120,
    inSide: 11,
    outSide: 1,
    backgroundColor: '#01929f',
    icon: img1,
    fontColor: 'red'
  },
  {
    label: '10/23',
    inSide: 2,
    areaCount: 100,
    outSide: 2,
    backgroundColor: '#3a4e20',
    icon: img2,
    fontColor: 'blue'
  },
  {
    label: '10/23',
    inSide: 3,
    outSide: 6,
    areaCount: 90,
    backgroundColor: '#706a16',
    icon: img3,
    fontColor: 'yellow'
  },
  {
    label: '10/23',
    inSide: 5,
    outSide: 3,
    areaCount: 80,
    backgroundColor: '#6c2d18',
    icon: img4,
    fontColor: '#fff'
  },
  {
    label: '10/23',
    inSide: 5,
    outSide: 2,
    areaCount: 60,
    backgroundColor: '#381737',
    icon: img5,
    fontColor: 'green'
  },
  {
    label: '10/23',
    inSide: 5,
    outSide: 5,
    areaCount: 80,
    backgroundColor: 'blue',
    icon: img1,
    fontColor: '#12e56e'
  },
  {
    label: '10/213',
    inSide: 5,
    outSide: 4,
    backgroundColor: 'yellow',
    areaCount: 100,
    icon: img2,
    fontColor: '#aaa'
  }
])

//globe Data
const attackSourceTargetData = ref<I_Globe_Attack_Data[]>([
  {
    source: [138.252924, 36.204824],
    target: [104.195397, 35.86166],
    color: 'red'
  },
  {
    source: [15.827659, -0.228021],
    target: [104.195397, 35.86166],
    color: 'blue'
  },
  {
    source: [10.451526, 51.165691],
    target: [30.802498, 26.820553],
    color: 'green'
  }
])
//mock data
setInterval(() => {
  chartData.value[3].areaCount = chartData.value[3].areaCount + 5
  chartData.value[3].outSide = chartData.value[3].outSide + 1
  chartData.value[0].outSide = chartData.value[0].outSide + 1
  // chartData.value[3].areaCount = Math.random() * 10
  // chartData.value[2].areaCount = Math.random() * 10
}, 5000)

//mock data
setInterval(() => {
  attackSourceTargetData.value[0].color = ['#fff', 'red', 'blue'][Math.floor(Math.random() * 3)]
  attackSourceTargetData.value.push({
    source: [18.252924, 36.204824],
    target: [104.195397, 3.86166],
    color: 'red'
  })
}, 3000)
</script>

<style scoped></style>
