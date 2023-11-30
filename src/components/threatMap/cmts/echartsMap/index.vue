<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-13 15:32:55
 * @LastEditTime: 2023-05-17 15:38:15
-->
<template>
  <div class="echartsMap" ref="echartsMap"></div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import type { EChartsOption } from 'echarts'
import { ref, watch, type Ref } from 'vue'
import worldJson from './map/world.json'
import { addRegions } from '.'
import type { I_AttackProps } from './type'
const props = defineProps<{
  attackData: I_AttackProps[]
}>()
//chart 元素
const echartsMap = ref<HTMLDivElement | null>(null)
const { setOptions, echarts, getInstance } = useECharts(echartsMap as Ref<HTMLDivElement>)
echarts.registerMap('world', worldJson as any)

const option: EChartsOption = {
  geo: {
    id: 'geoId',
    map: 'world',
    roam: 'move',
    // center: [54.3773438, 24.453884],
    // zlevel: 1,
    itemStyle: {
      color: '#0b1115',
      borderWidth: 1,
      borderColor: '#1e6c76'
    },
    regions: []
  },
  series: {
    type: 'lines',
    colorBy: 'data',
    coordinateSystem: 'geo',
    effect: {
      show: true,
      delay: 0,
      trailLength: 0.8, //特效尾迹长度[0,1]值越大，尾迹越长重
      period: 5,
      symbol: 'arrow',
      loop: false,
      //箭头图标
      symbolSize: 3
    },
    lineStyle: {
      width: 0,
      opacity: 0,
      //尾迹线条透明度
      curveness: 0.2 //尾迹线条曲直度
    },
    data: [
      {
        coords: [[], []],
        lineStyle: {
          color: ''
        }
      }
    ]
  }
}

setOptions(option as EChartsOption)

watch(
  () => props.attackData.map((ele) => ({ selected: ele.selected })),
  () => {
    getInstance()?.setOption(
      {
        geo: {
          regions: []
        }
      },
      false
    )
  }
)
watch(
  () => props.attackData.map((ele) => ({ data: ele.data })),
  () => {
    const regionsMap: any = { regions: [], dataMap: [] }
    props.attackData.forEach((ele) => {
      const appendData = ele.data.length > 100 ? ele.data.slice(0, 100) : ele.data
      appendData.forEach((data: any) => {
        ele.selected && regionsMap.regions.push(addRegions(data.countryName, ele.color))
        ele.selected &&
          regionsMap.dataMap.push({
            coords: [data.from, data.to],
            lineStyle: {
              color: ele.color
            }
          })
      })
    })
    getInstance()?.setOption(
      {
        // series: {
        //   data: []
        // },
        geo: {
          regions: regionsMap.regions
        }
      },
      false
    )

    getInstance()?.appendData({
      seriesIndex: 0,
      data: regionsMap.dataMap
    })

    regionsMap.regions.forEach((ele: any) => {
      getInstance()!.dispatchAction(
        {
          type: 'highlight',
          geoId: 'geoId',
          name: ele.name
        },
        false
      )
      setTimeout(() => {
        getInstance()!.dispatchAction(
          {
            type: 'downplay',
            geoId: 'geoId',
            name: ele.name
          },
          false
        )
      }, 300)
    })
  },
  {
    deep: true
  }
)
</script>

<style scoped>
.echartsMap {
  width: calc(100vw - 400px);
  height: calc(100vh - 200px);
}
</style>
