<!--
 * @Author: dailuxin
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-04 19:00:43
 * @LastEditTime: 2023-05-09 16:51:06
-->
<template>
  <div class="container" :style="{ width: width + 'px', height: height + 'px' }">
    <div class="gaugetitle">{{ gaugeTitle }}</div>
    <div
      ref="chartRef"
      class="chartsRef"
      :style="{ width: width + 'px', height: height - 100 + 'px' }"
    ></div>
    <div class="gaugeBottom">
      <div class="count">{{ current }}</div>
      <div class="label">{{ labelText }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watch } from 'vue'
import { useECharts } from '@/tools/useECharts'
import type { EChartsOption } from 'echarts'
const props = defineProps<{
  width: number
  height: number
  total: number
  current: number
  axisLabelColor?: string
  backGroundColor?: any
  gaugeTitle?: string
  labelText?: string
}>()
// dom
const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)
const options: EChartsOption = {
  series: [
    {
      type: 'gauge',
      startAngle: 210,
      endAngle: -30,
      radius: (props.height - 100) / 2 - 30,
      center: ['50%', '50%'],
      min: 0,
      max: props.total,
      splitNumber: 10,
      pointer: {
        show: true,
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '120%',
        width: 16,
        itemStyle: {
          color: '#ffffff'
        }
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: (props.width * 0.8) / 2,
          color: [[1, props.backGroundColor ?? 'green']]
        }
      },

      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        distance: 20
      },
      axisLabel: {
        show: true,
        distance: -60,
        color: props.axisLabelColor ?? '#000'
      },
      title: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: props.current
        }
      ]
    }
  ]
}
setOptions(options)

watch(
  () => props.current,
  () => {
    ;(options.series as any)[0].data[0].value = props.current
    setOptions(options as any, false)
  }
)
</script>

<style scoped lang="less">
.container {
  position: relative;
  display: inline-block;
  .chartsRef {
    position: absolute;
    top: 100px;
    left: 0;
  }
  .gaugetitle {
    height: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    color: #fff;
  }
  .gaugeBottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    bottom: 0px;
    .count {
      font-size: 60px;
      color: #fff;
    }
    .label {
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
