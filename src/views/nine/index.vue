<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-13 15:27:01
 * @LastEditTime: 2023-06-07 11:48:42
-->
<template>
  <div class="container">
    <threat-map v-model:dataRange="dataRange" :attackData="attackData" />
  </div>
</template>

<script setup lang="ts">
import threatMap from '@/components/threatMap'
import capitalMap from '@/components/threatMap/capitalMap'
import type { I_AttackProps, I_Attack_Data } from '@/components/threatMap/cmts/echartsMap/type'
import { ref } from 'vue'

const attackData = ref<I_AttackProps[]>([
  {
    name: 'Web Attackers',
    selected: true,
    color: '#d65a6b',
    lineAreaColor: '#000',
    data: []
  },
  {
    name: 'DDos Attackers',
    selected: true,
    color: '#ffde82',
    lineAreaColor: '#7c6e48',
    data: []
  },
  {
    name: 'Indruders',
    selected: true,
    color: '#7fbef5',
    lineAreaColor: '#465e71',
    data: []
  },
  {
    name: 'Scanners',
    selected: true,
    color: '#7a7efc',
    lineAreaColor: '#484a72',
    data: []
  },
  {
    name: 'Anonyymizers',
    selected: true,
    color: '#9045e6',
    lineAreaColor: '#4c3665',
    data: []
  }
])
const mockData = (length: number) => {
  const randomData: I_Attack_Data[] = []
  for (let i = 0; i < length; i++) {
    const sourceIndex = Math.floor(Math.random() * capitalMap.length)
    randomData.push({
      from: [capitalMap[sourceIndex].lng, capitalMap[sourceIndex].lat],
      to: [
        capitalMap[Math.floor(Math.random() * capitalMap.length)].lng,
        capitalMap[Math.floor(Math.random() * capitalMap.length)].lat
      ],
      countryName: capitalMap[sourceIndex].en
    })
  }
  return randomData
}
setInterval(() => {
  attackData.value[0].data = mockData(Math.floor(Math.random() * 11 + 1))
  attackData.value[1].data = mockData(Math.floor(Math.random() * 10 + 1))
  attackData.value[2].data = mockData(Math.floor(Math.random() * 1 + 1))
  attackData.value[3].data = mockData(Math.floor(Math.random() * 2 + 1))
  attackData.value[4].data = mockData(Math.floor(Math.random() * 1 + 1))
}, 3000)

//dataRange  (hour/day/month)
const dataRange = ref('hour')
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>
