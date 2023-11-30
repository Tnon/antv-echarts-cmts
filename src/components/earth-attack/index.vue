<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-06 09:20:49
 * @LastEditTime: 2023-05-23 15:19:49
-->
<template>
  <div
    class="earthContainer"
    :style="{ width: width + 'px', height: height + 'px' }"
    ref="earthRef"
  ></div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import { ref, watch, type Ref } from 'vue'
import eg from './imgs/earth_green.jpg'
import e from './imgs/earthE.jpg'
import type { EChartsOption } from 'echarts'
import type { I_Globe_Attack_Data } from '../gauge-earth/type'
const props = defineProps<{
  width: number
  height: number
  attackSourceTargetData: I_Globe_Attack_Data[]
}>()

const option = {
  globe: {
    baseTexture: e,
    heightTexture: eg,
    width: props.width - 260,
    height: props.height - 260,
    left: 'center',
    top: 'center',
    viewControl: {
      autoRotate: true,
      projection: 'orthographic',
      orthographicSize: 250, // 控制地图大小
      //初始定位
      // targetCoord: [54.3773438, 24.453884],
      autoRotateSpeed: 20,
      animation: false /*开启过渡动画*/
      // animationDurationUpdate: 1500 /*过渡时长*/,
      // animationEasingUpdate: 'linear'
    }
  },
  series: [
    {
      type: 'lines3D',
      coordinateSystem: 'globe',
      effect: {
        show: true,
        trailWidth: 5,
        trailLength: 0.2
        // symbol: 'circle',
        // symbolSize: 19,
        // color: 'red',
        // roundTrip: true
      },
      label: {
        fontSize: 24,
        show: true,
        position: 'right',
        formatter: '{b}'
      },
      blendMode: 'lighter',
      lineStyle: {
        width: 1.5,
        color: '#E26115',
        opacity: 0.6
      },
      data: props.attackSourceTargetData.map((ele) => {
        return {
          coords: [ele.source, ele.target],
          lineStyle: {
            color: ele.color
          }
        }
      })
    },
    {
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      symbolSize: 12,
      itemStyle: {
        color: 'red',
        opacity: 1
      },
      data: props.attackSourceTargetData.map((ele) => {
        return {
          value: ele.source,
          itemStyle: {
            color: ele.color
          }
        }
      })
    }
  ]
}
//chart 元素
const earthRef = ref<HTMLDivElement | null>(null)
const { setOptions, getInstance } = useECharts(earthRef as Ref<HTMLDivElement>)
setOptions(option as EChartsOption)

watch(
  () => props.attackSourceTargetData,
  () => {
    getInstance()?.setOption(
      {
        series: [
          {
            data: props.attackSourceTargetData.map((ele) => {
              return {
                coords: [ele.source, ele.target],
                lineStyle: {
                  color: ele.color
                }
              }
            })
          },
          {
            data: props.attackSourceTargetData.map((ele) => {
              return {
                value: ele.source,
                itemStyle: {
                  color: ele.color
                }
              }
            })
          }
        ]
      },
      false
    )
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
