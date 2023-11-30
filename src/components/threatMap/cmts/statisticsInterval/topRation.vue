<template>
  <div class="ratioContainer">
    <div class="title">{{ dataSource.title }}</div>
    <div class="chartContainer" ref="ratioRef"></div>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { I_Top_Ratio } from './type'
import { useECharts } from '@/tools/useECharts'
import { ref } from 'vue'
import { watchEffect } from 'vue'
const props = defineProps<{
  dataSource: I_Top_Ratio
}>()
const total = ref(0)
watchEffect(() => {
  props.dataSource.data.forEach((ele) => {
    total.value += ele.counts
  })
})
const ratioRef = ref()
const opetions: EChartsOption = {
  tooltip: {
    backgroundColor: props.dataSource.themeColor,
    textStyle: {
      color: '#000',
      fontWeight: 800
    },
    formatter: (info: any) => {
      return info.name + '·' + Math.floor((info.value / total.value) * 100) + '%'
    }
  },

  series: {
    type: 'treemap',
    // width: '100%',
    // height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    roam: false,
    nodeClick: false,
    itemStyle: {
      borderWidth: 1,
      borderColor: props.dataSource.themeColor
    },
    breadcrumb: {
      show: false
    },
    label: {
      show: true,
      fontSize: 30,
      fontWeight: 600,
      color: props.dataSource.themeColor,
      formatter: '{b}'
    },
    data: props.dataSource.data.map((ele) => ({
      value: ele.counts,
      name: ele.label,
      itemStyle: { color: '#000' }
    }))
  }
}
const { setOptions } = useECharts(ratioRef)
setOptions(opetions as EChartsOption)
</script>

<style scoped lang="less">
.ratioContainer {
  padding: 16px;
  .title {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 8px;
  }
  .chartContainer {
    width: 100%;
    height: 200px;
  }
}
</style>
