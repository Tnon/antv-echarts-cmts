<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-12 10:35:05
 * @LastEditTime: 2023-05-26 11:56:05
-->
<template>
  <div class="container" :style="{ width: size.width + 'px', height: size.height + 'px' }">
    <div class="leftStatic">
      <template v-for="(item, index) in leftTopStatic" :key="item.label">
        <div class="node" :class="['node' + (index + 1)]">
          <div class="label">{{ item.label }}</div>
          <div class="count">{{ nFormatter(item.value) }}</div>
          <div class="border" :class="['border' + (index + 1)]"></div>
        </div>
      </template>
    </div>
    <div ref="chartRef" :style="{ width: size.width + 'px', height: size.height + 'px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import { ref, watch } from 'vue'
import { nFormatter } from '@/tools/format'
import worldJson from './map/world.json'
import type { EChartsOption } from 'echarts'
import type { I_Data_Node } from '@/views/seven/type'
const props = defineProps<{
  pointDataArray: I_Data_Node[]
  size: { width: number; height: number }
  period?: number
  scale?: number
  leftTopStatic: { label: string; value: number }[]
}>()
const chartRef = ref()
const option: EChartsOption = {
  geo: {
    map: 'world',
    roam: true,
    itemStyle: {
      areaColor: '#333',
      borderColor: '#eee'
    },
    emphasis: {
      itemStyle: {
        color: '#fff'
      }
    }
    // silent: true
  },
  series: [
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      rippleEffect: {
        number: 1,
        period: props.period ?? 1,
        scale: props.scale ?? 1
      },
      data: props.pointDataArray.map((ele) => {
        return {
          value: ele.latAndLong,
          symbolSize: ele.size,
          label: {
            show: true,
            formatter: '{a|}',

            rich: ele.img
              ? {
                  a: {
                    backgroundColor: {
                      image: ele.img
                    },
                    align: 'center',
                    width: 40,
                    height: 40
                  }
                }
              : {
                  a: {}
                }
          },
          itemStyle: {
            color: ele.color
          }
        }
      })
    }
  ]
}
const { setOptions, echarts, getInstance } = useECharts(chartRef)
echarts.registerMap('world', worldJson as any)
setOptions(option)

watch(
  () => props.pointDataArray,
  () => {
    getInstance()?.setOption({
      series: [
        {
          data: props.pointDataArray.map((ele) => {
            return {
              value: ele.latAndLong,
              symbolSize: ele.size,
              label: {
                show: true,
                formatter: '{a|}',

                rich: ele.img
                  ? {
                      a: {
                        backgroundColor: {
                          image: ele.img
                        },
                        align: 'center',
                        width: 40,
                        height: 40
                      }
                    }
                  : {
                      a: {}
                    }
              },
              itemStyle: {
                color: ele.color
              }
            }
          })
        }
      ]
    })
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="less">
.container {
  position: relative;
  .leftStatic {
    position: absolute;
    width: 600px;
    height: 100px;
    top: 20px;
    left: 20px;
    border-radius: 10px;
    overflow: hidden;
    .label {
      font-size: 12px;
    }
    .count {
      font-size: 30px;
      font-weight: 600;
    }
    .border {
      width: 0;
      height: 0;
      border-top: 50px solid transparent;
      border-left: 15px solid;
      border-bottom: 50px solid transparent;
      position: absolute;
      top: 0;
      right: -15px;
    }
    .border1 {
      border-left-color: #fff;
    }
    .border2 {
      border-left-color: #eee;
    }
    .border3 {
      border-left-color: #ddd;
    }
    .border4 {
      display: none;
    }
    .node {
      position: absolute;
      height: 100px;
      top: 0;
      left: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .node1 {
      width: 150px;
      background-color: #fff;
      z-index: 4;
    }
    .node2 {
      width: 150px;
      background-color: #eee;
      z-index: 3;
      left: 150px;
    }
    .node3 {
      width: 150px;
      background-color: #ddd;
      z-index: 2;
      left: 300px;
    }
    .node4 {
      width: 150px;
      background-color: red;
      z-index: 1;
      left: 450px;
      color: #fff;
    }
  }
}
</style>
