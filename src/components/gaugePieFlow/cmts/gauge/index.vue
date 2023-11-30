<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 20:49:02
 * @LastEditTime: 2023-05-12 10:12:29
-->
<template>
  <div class="container">
    <div class="charts">
      <div
        ref="gaugeRef"
        :style="{ width: nodeState.size.width + 'px', height: nodeState.size.height + 'px' }"
      ></div>
      <div
        class="outSideBorder"
        :style="{
          width: nodeState.size.width - 70 + 'px',
          height:
            (nodeState.size.height - 70) / 2 +
            Math.sqrt(Math.pow((nodeState.size.height - 70) / 2, 2) / 2) +
            'px'
        }"
      >
        <div
          class="bottom"
          :style="{
            width: nodeState.size.width - 70 + 'px',
            height: nodeState.size.height - 70 + 'px',
            'box-shadow': '0px 0px 50px ' + nodeState.gaugeThemeColor + ' inset',
            border: '5px solid ' + nodeState.gaugeThemeColor
          }"
        ></div>
      </div>
      <div
        class="inSideBorder"
        :style="{
          width: nodeState.size.width - 250 + 'px',
          height: nodeState.size.height - 250 + 'px',
          'box-shadow': ' 0px 0px 50px' + nodeState.gaugeThemeColor,
          border: '5px solid ' + nodeState.gaugeThemeColor
        }"
      >
        <count-to :endVal="nodeState.gaugeScore" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import type { I_Range } from '@/views/eight/type'
import type { EChartsOption } from 'echarts'
import countTo from '@/components/count-to'
import { reactive, ref, inject, type Ref } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive(GraphNode.data)
//       gaugeThemeColor: props.gaugeThemeColor,
//       gaugeDataRange: props.gaugeDataRange

// dom
const gaugeRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(gaugeRef as Ref<HTMLDivElement>)

const renderData = (boolean: boolean) => {
  const gaugeOptions: EChartsOption = {
    series: [
      // 外层
      {
        type: 'gauge',
        startAngle: 218,
        endAngle: -38,
        center: ['50%', '50%'],
        radius: '100%',
        itemStyle: {
          opacity: 1
        },

        // 指针设置
        pointer: {
          show: false
        },
        // 刻度线设置
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 5,
            color: [[1, nodeState.gaugeThemeColor]]
          }
        },
        // 小刻度线设置
        axisTick: {
          show: false
        },
        // 大刻度线设置
        splitLine: {
          show: false
        },
        // 刻度label
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        // 数据显示详情设置
        detail: {
          show: false
        }
      },

      // 中间数据层
      {
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        center: ['50%', '50%'],
        splitNumber: 100,
        max: 100,
        radius: nodeState.size.width / 2 - 35,
        pointer: {
          width: 6,
          icon: 'rect',
          length: 90,
          offsetCenter: [0, (-nodeState.size.width + 250) / 2],
          itemStyle: {
            color: nodeState.gaugeThemeColor,
            shadowBlur: 10
          }
        },
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 90,
            color: []
          }
        },

        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          distance: -90,
          length: 10,
          lineStyle: {
            color: nodeState.gaugeThemeColor,
            width: 2
          }
        },
        axisLabel: {
          distance: 125,
          rotate: 'tangential',
          align: 'center',
          color: '#fff'
        },

        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: nodeState.gaugeScore
          }
        ]
      }
    ]
  }
  nodeState.gaugeDataRange.forEach((ele: I_Range<any>) => {
    ;(gaugeOptions.series as any)[1].axisLine.lineStyle.color.push(
      [ele.begin / 100, 'none'],
      [
        ele.end / 100,
        ele.color ?? {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 1.2,
          colorStops: [
            {
              offset: 0.2,
              color: '#000' // 0 ~ 20%处的颜色
            },
            {
              offset: 1,
              color: nodeState.gaugeThemeColor // 100% 处的颜色
            }
          ]
        }
      ]
    )
  })
  ;(gaugeOptions.series as any)[1].axisLine.lineStyle.color.push([1, 'none'])
  // console.log((gaugeOptions.series as any)[1].axisLine.lineStyle.color)
  ;(gaugeOptions.series as any)[1].axisLabel.formatter = (value: number) => {
    for (let i = 0; i < nodeState.gaugeDataRange.length; i++) {
      if (
        value ===
        Math.floor(
          (nodeState.gaugeDataRange[i].end - nodeState.gaugeDataRange[i].begin) / 2 +
            nodeState.gaugeDataRange[i].begin
        )
      ) {
        return nodeState.gaugeDataRange[i].label
      }
    }
  }
  setOptions(gaugeOptions, boolean)
}
renderData(true)

GraphNode?.on('change:data', ({ current }: any) => {
  Object.assign(nodeState, current)
  renderData(false)
})
</script>

<style scoped lang="less">
.container {
  .charts {
    position: relative;
    .outSideBorder {
      position: absolute;
      top: 35px;
      left: 35px;
      overflow: hidden;
      .bottom {
        width: 100%;
        background: none;
        position: absolute;
        // box-shadow: 0px 0px 10px #fff inset, 0px 0px 50px #d1ffde inset;
        border-radius: 50%;
      }
    }
    .inSideBorder {
      position: absolute;

      border-radius: 50%;
      top: 125px;
      left: 125px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
    }
  }
}
</style>
