<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-04 11:58:24
 * @LastEditTime: 2023-05-26 10:55:06
-->
<template>
  <div class="container">
    <lineCharts
      :title="title"
      :xAxis="xAxis"
      :series="series"
      :themeColor="themeColor"
      :bgColor="bgColor"
    />
  </div>
</template>

<script setup lang="ts">
import lineCharts from '@/components/line-charts'
import type { I_Line_Series } from '@/components/line-charts/type'
import { ref } from 'vue'
//line chart title
const title = ref<string>('Actions & Exfiltration')
//x
const xAxis = ref<string[]>([
  'Tue 15',
  'Tue 16',
  'Tue 17',
  'Tue 18',
  'Tue 19',
  'Tue 20',
  'Tue 21',
  'Tue 22'
])
//y(multiple)
const series = ref<I_Line_Series[]>([
  {
    color: 'red',
    data: [12, 23, 12, 43, 54, 21, 51, 15],
    name: 'Abnormal Parent / Child Process1'
  },
  {
    color: 'blue',
    data: [6, 13, 22, 23, 34, 12, 31, 35],
    name: 'Abnormal Paarent / Child Process2'
  }
])
//theme
const themeColor = ref<string>('red')
//backgroundColor
const bgColor = ref<string>('rgba(255, 0, 0,.2)')

//mock data
setInterval(() => {
  xAxis.value.shift()
  series.value[0].data.shift()
  series.value[1].data.shift()
  xAxis.value.push('aaa')
  series.value[0].data.push(Math.random() * 30)
  series.value[1].data.push(Math.random() * 50)
}, 2000)
</script>

<style scoped>
.container {
  background-color: #000;
  padding: 16px;
  overflow: auto;
  height: 100vh;
}
</style>
