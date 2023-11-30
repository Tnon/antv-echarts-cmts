<template>
  <div
    ref="lineRef"
    class="line"
    :style="{ height: attackType.name === 'Web Attackers' ? '40px' : '20px' }"
  ></div>

  <div
    class="label"
    :style="{
      color: attackType.color,
      'align-self': attackType.name === 'Web Attackers' ? 'end' : ''
    }"
  >
    {{ attackType.name }}
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { I_AttackProps } from '../echartsMap/type'
import { useECharts } from '@/tools/useECharts'
import type { EChartsOption } from 'echarts'
import { watch } from 'vue'

const props = defineProps<{
  attackType: I_AttackProps
  xData: string[]
  yData: number[]
}>()
// const randomData = (number: number, length: number) => {
//   const arr: number[] = []
//   for (let i = 0; i < length; i++) {
//     arr.push(Math.floor(Math.random() * number))
//   }
//   return arr
// }
const lineRef = ref<any>([])

const baseOption = {
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: props.attackType.name === 'Web Attackers' ? '20px' : 0
  },
  xAxis: {
    // show: false,
    boundaryGap: false,
    position: 'top',
    type: 'category',
    axisLabel: {
      interval: 240,
      fontSize: 14,
      color: '#2bb0bc'
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 2,
        color: '#007680'
      }
    },
    data: props.xData
  },
  yAxis: {
    show: false,
    type: 'value',
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: 'line',
      showSymbol: false,
      step: true,
      data: props.yData,
      lineStyle: {},
      areaStyle: {},
      markPoint: {
        data: [
          {
            value: props.yData[props.yData.length - 1],
            x: '100%',
            symbol: 'circle',
            symbolSize: 7,
            itemStyle: {
              color: ''
            }
          }
        ]
      }
    }
  ]
}
const { setOptions, getInstance } = useECharts(lineRef as Ref<HTMLDivElement>)
baseOption.series[0].lineStyle = {
  color: props.attackType.color,
  width: 1
}
baseOption.series[0].areaStyle = {
  color: props.attackType.lineAreaColor
}
baseOption.series[0].markPoint.data[0].itemStyle = {
  color: props.attackType.color
}
setOptions(baseOption as EChartsOption)

watch(
  () => props.xData,
  () => {
    getInstance()!.setOption({
      xAxis: {
        data: props.xData
      },
      series: [
        {
          data: props.yData,
          markPoint: {
            data: [
              {
                yAxis: props.yData[props.yData.length - 1],
                x: '100%',
                symbol: 'circle',
                symbolSize: 7,
                itemStyle: {
                  color: props.attackType.color
                }
              }
            ]
          }
        }
      ]
    })
  },
  {
    deep: true
  }
)
</script>

<style scoped>
.line {
  flex: 1;
  height: 30px;
  width: 100%;
}
.label {
  font-size: 14px;
  flex: 150px 0 0;
  margin-left: 20px;
}
</style>
