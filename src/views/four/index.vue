<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-05 16:16:52
 * @LastEditTime: 2023-05-09 16:51:56
-->
<template>
  <div class="box">
    <!-- <tools-score :val="score" /> -->
    <!-- <gauge-g6 :width="1500" :height="600" /> -->
    <gauge-green
      :gaugeTitle="gaugeTitle"
      :height="size.height"
      :width="size.width"
      :total="300"
      :current="gaugeGreenScore"
      axisLabelColor="#000"
      :back-ground-color="linerColor"
      label-text="per second"
    />

    <gauge3 :score="gauge3Score" />

    <gauge4 :score="gauge4Score" />
  </div>
</template>

<script setup lang="ts">
import gaugeGreen from '@/components/gauge-green'
import gauge3 from '@/components/gauge-3'
import gauge4 from '@/components/gauge-4'
import { reactive, ref } from 'vue'

const size = reactive({
  width: 500,
  height: 500
})
const linerColor = {
  type: 'radial',
  x: 0.5,
  y: 0.6,
  r: 0.6,
  colorStops: [
    {
      offset: 0.2,
      color: 'rgba(1, 147, 160, 1)' // 0 ~ 20%处的颜色
    },
    {
      offset: 1,
      color: 'rgba(1, 89, 116, 1)' // 100% 处的颜色
    }
  ]
}
const gaugeTitle = ref('GUAGE TITLE')
const gaugeGreenScore = ref(20)
const gauge3Score = ref(10)

const gauge4Score = ref(20)
</script>

<style scoped lang="less">
.box {
  height: 100vh;
  overflow: auto;
  background-color: #aaa;
  /* text-align: center; */
  :deep(.charts) {
    justify-content: center;
    // margin: 100px auto;
    margin: 200px;
  }
  :deep(.container) {
    margin: 200px;
  }
}
</style>
