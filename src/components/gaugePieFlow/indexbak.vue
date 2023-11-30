<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 20:49:02
 * @LastEditTime: 2023-05-11 18:43:48
-->
<template>
  <div class="container">
    <div class="charts">
      <div ref="gaugeRef" :style="{ width: size.width + 'px', height: size.height + 'px' }"></div>
      <div
        class="outSideBorder"
        :style="{
          width: size.width - 70 + 'px',
          height: (size.height - 70) / 2 + Math.sqrt(Math.pow((size.height - 70) / 2, 2) / 2) + 'px'
        }"
      >
        <div
          class="bottom"
          :style="{ width: size.width - 70 + 'px', height: size.height - 70 + 'px' }"
        ></div>
      </div>
      <div
        class="inSideBorder"
        :style="{ width: size.width - 250 + 'px', height: size.height - 250 + 'px' }"
      >
        73
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import type { EChartsOption } from 'echarts'
import { reactive, ref, type Ref } from 'vue'

const size = reactive({
  width: 500,
  height: 500
})
const flag = [
  {
    begin: 0,
    end: 20,
    label: 'LOW'
  },
  {
    begin: 30,
    end: 50,
    label: 'MID'
  },
  {
    begin: 70,
    end: 90,
    label: 'HIGH'
  }
]
// dom
const gaugeRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(gaugeRef as Ref<HTMLDivElement>)
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
          color: [[1, '#d0ffdf']]
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
      radius: size.width / 2 - 35,
      pointer: {
        width: 6,
        icon: 'rect',
        length: 90,
        offsetCenter: [0, -120],
        itemStyle: {
          color: '#d0ffdf',
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
          color: '#d0ffdf',
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
      //   detail: {
      //     valueAnimation: true,
      //     fontSize: 80,
      //     offsetCenter: [0, '70%']
      //   },
      detail: {
        show: false
      },
      data: [
        {
          value: 73,
          itemStyle: {
            color: '#dc4444'
          }
        }
      ]
    }
  ]
}
flag.forEach((ele) => {
  // ;(gaugeOptions.series as any)[1].data.push(ele.begin, ele.end)
  ;(gaugeOptions.series as any)[1].axisLine.lineStyle.color.push(
    [ele.begin / 100, 'none'],
    [
      ele.end / 100,
      {
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
            color: '#d1ffde' // 100% 处的颜色
          }
        ]
      }
    ]
  )
})
;(gaugeOptions.series as any)[1].axisLine.lineStyle.color.push([1, 'none'])
// console.log((gaugeOptions.series as any)[1].axisLine.lineStyle.color)
;(gaugeOptions.series as any)[1].axisLabel.formatter = (value: number) => {
  for (let i = 0; i < flag.length; i++) {
    if (value === Math.floor((flag[i].end - flag[i].begin) / 2 + flag[i].begin)) {
      return flag[i].label
    }
  }
}
setOptions(gaugeOptions)
// setTimeout(() => {

//   setOptions(gaugeOptions, false)
// }, 2000)
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
        box-shadow: 0px 0px 10px #fff inset, 0px 0px 50px #d1ffde inset;
        border-radius: 50%;
        border: 5px solid #d1ffde;
      }
    }
    .inSideBorder {
      position: absolute;
      box-shadow: 0px 0px 10px #fff, 0px 0px 50px #d1ffde;
      border-radius: 50%;
      top: 125px;
      left: 125px;
      border: 5px solid #d1ffde;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
    }
  }
}
</style>
