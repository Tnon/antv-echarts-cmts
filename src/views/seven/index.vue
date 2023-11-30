<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-06 10:10:10
 * @LastEditTime: 2023-06-07 10:39:36
-->
<template>
  <div class="box">
    <pointMap
      :pointDataArray="pointDataArray"
      :size="size"
      :period="period"
      :scale="scale"
      :leftTopStatic="leftTopStatic"
    />
  </div>
</template>

<script setup lang="ts">
import pointMap from '@/components/pointMap/index.vue'
import worldJson from './capitalMap'
import img1 from './imgs/1.png'
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'
import { ref } from 'vue'
import type { I_Data_Node } from './type'
const size = {
  width: 2000,
  height: 1000
}
const pointDataArray = ref<I_Data_Node[]>([])
//mock data
for (let k in worldJson) {
  if (pointDataArray.value.length < 40) {
    pointDataArray.value.push({
      latAndLong: (worldJson as any)[k],
      color: ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)],
      img: [img1, img2, img3, '', ''][Math.floor(Math.random() * 5)],
      size: Math.floor(Math.random() * 30)
    })
  }
}

const period = ref(1) //1s duration

const scale = ref(5) //1 is off

//leftTop Static
const leftTopStatic = ref([
  {
    label: 'LabelName1',
    value: Math.floor(Math.random() * 10000)
  },
  {
    label: 'LabelName2',
    value: Math.floor(Math.random() * 10000)
  },
  {
    label: 'LabelName3',
    value: Math.floor(Math.random() * 10000)
  },
  {
    label: 'LabelName4',
    value: Math.floor(Math.random() * 10000)
  }
])

setInterval(() => {
  pointDataArray.value = []
  for (let k in worldJson) {
    if (pointDataArray.value.length < Math.floor(Math.random() * 30)) {
      pointDataArray.value.push({
        latAndLong: (worldJson as any)[k],
        color: ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)],
        img: [img1, img2, img3, '', ''][Math.floor(Math.random() * 5)],
        size: Math.floor(Math.random() * 30)
      })
    }
  }
}, 5000)
</script>

<style scoped>
.box {
  background-color: #000;
  width: 100vw;
  height: 100vh;
}
</style>
