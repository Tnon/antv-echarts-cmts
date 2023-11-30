<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 09:26:07
 * @LastEditTime: 2023-05-26 10:41:39
-->

<template>
  <div class="greenBox">
    <div class="box" :style="{ width: width + 'px', height: height + 'px' }">
      <div class="topBar">
        <template v-for="(item, index) in topNodeData" :key="item.label">
          <div
            class="text_div"
            :class="{ topleft: !index, topright: index === topNodeData.length - 1 }"
          >
            <div class="text1">{{ item.label }}</div>
            <div class="number1">{{ item.value }}</div>
          </div>
        </template>
      </div>
      <div class="circleBar">
        <template v-for="{ label, value } in midNodeData" :key="label">
          <div class="text_div">
            <div class="text1">{{ label }}</div>
            <div class="number1">{{ value }}</div>
          </div>
        </template>
      </div>
      <div ref="chartRef" class="charts"></div>
      <earth-attack
        class="earthAttack"
        :attackSourceTargetData="attackSourceTargetData"
        :height="height"
        :width="width"
      />
      <div class="bottomBar">
        <template v-for="(item, index) in bottomNodeData" :key="item.label">
          <div
            class="text_div"
            :class="{ bottomleft: !index, bottomright: index === bottomNodeData.length - 1 }"
          >
            <div class="text1">{{ item.label }}</div>
            <div class="number1">{{ item.value }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, watchEffect } from 'vue'
import { useECharts } from '@/tools/useECharts'
import earthAttack from '@/components/earth-attack'
import img1 from './imgs/1.png'
import type { I_Chart_Data, I_Globe_Attack_Data, I_Statistics_Node } from './type'
import type { EChartsOption } from 'echarts'
const props = defineProps<{
  topNodeData: I_Statistics_Node[]
  midNodeData: I_Statistics_Node[]
  bottomNodeData: I_Statistics_Node[]
  height: number
  width: number
  chartData: I_Chart_Data[]
  attackSourceTargetData: I_Globe_Attack_Data[]
}>()
// dom
const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

const gaugeOptions: EChartsOption = {
  series: [
    // 外层
    {
      type: 'gauge',
      startAngle: 210,
      endAngle: -30,
      center: ['50%', '50%'],
      splitNumber: 100,
      radius: '100%',
      itemStyle: {
        opacity: 1
      },
      // 指针设置
      pointer: {
        show: true,
        icon: 'circle',
        length: props.width / 2,
        width: 10,
        offsetCenter: [0, -props.width / 4 + 10],
        itemStyle: {
          color: 'rgba(237, 46, 46, 1)'
          // shadowColor: 'rgba(237, 46, 46, 1)',
          // shadowOffsetX: 1,
          // shadowOffsetY: 1,
          // shadowBlur: 10
        }
      },
      // 刻度线设置
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 20,
          color: [[1, '#1A2626']]
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
      },
      data: []
    },
    // 中间数据层
    {
      type: 'gauge',
      startAngle: 210,
      endAngle: -30,
      center: ['50%', '50%'],
      splitNumber: 100,
      radius: props.width / 2 - 20,
      pointer: {
        show: false
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 90,
          color: []
        }
      },

      axisLabel: {
        distance: 0,
        // position: 'insideTopLeft',
        rich: {}
      },

      title: {
        show: false
      },
      detail: {
        show: false
      }
    },

    {
      type: 'gauge',
      startAngle: 210,
      endAngle: -30,
      center: ['50%', '50%'],
      splitNumber: 10,
      radius: props.width / 2 - 111,
      itemStyle: {
        opacity: 1
      },
      // 指针设置
      pointer: {
        show: true,
        icon: 'circle',
        length: props.width / 2,
        width: 10,
        offsetCenter: [0, -props.width / 4 + 121],
        itemStyle: {
          color: 'rgba(237, 46, 46, 1)'
        }
      },
      // 刻度线设置
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 20,
          color: [[1, '#1A2626']]
        }
      },
      axisTick: {
        show: true,
        distance: -25,
        length: 5,
        lineStyle: {
          color: '#666',
          width: 1
        }
      },
      splitLine: {
        show: true,
        distance: -35,
        length: 10,
        lineStyle: {
          color: '#666',
          width: 1
        }
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
      },
      data: []
    }
  ]
}
setOptions(gaugeOptions)

watchEffect(() => {
  let totalCount = 0
  props.chartData.forEach((ele) => {
    totalCount += ele.areaCount
  })

  const colorArray: [number, string][] = []
  const startCountArr: number[] = []
  const outSideCountArr: number[] = []
  const inSideCountArr: number[] = []
  const pieArea: number[] = []
  props.chartData.forEach((ele, index) => {
    colorArray.push([
      index ? ele.areaCount / totalCount + colorArray[index - 1][0] : ele.areaCount / totalCount,
      ele.backgroundColor!
    ])
    pieArea.push((ele.areaCount / totalCount) * 100)
    startCountArr.push(colorArray[index][0] * 100)
    const sigleOut = (ele.areaCount / totalCount / (ele.outSide + 1)) * 100
    for (let i = 0; i < ele.outSide; i++) {
      outSideCountArr.push(sigleOut * (i + 1) + (index ? startCountArr[index - 1] : 0))
    }

    const sigleIns = (ele.areaCount / totalCount / (ele.inSide + 1)) * 100
    for (let i = 0; i < ele.inSide; i++) {
      inSideCountArr.push(sigleIns * (i + 1) + (index ? startCountArr[index - 1] : 0))
    }
  })
  //   console.log(pieArea)
  //   console.log(startCountArr)
  ;(gaugeOptions.series as any)[1].axisLabel.formatter = (value: number) => {
    for (let i = 0; i < startCountArr.length; i++) {
      if (value === Math.floor(startCountArr[i] - pieArea[i] / 2)) {
        return '{Img' + i + '|}\n{Color' + i + '|' + props.chartData[i].label + '}'
      }
    }
  }

  for (let i = 0; i < startCountArr.length; i++) {
    ;(gaugeOptions.series as any)[1].axisLabel.rich['Img' + i] = {
      backgroundColor: {
        image: props.chartData[i].icon ?? img1
      },
      height: 45,
      width: 45,
      align: 'center'
    }
    ;(gaugeOptions.series as any)[1].axisLabel.rich['Color' + i] = {
      color: props.chartData[i].fontColor,
      align: 'center'
    }
  }
  if (gaugeOptions.series) {
    ;(gaugeOptions.series as any)[1].axisLine.lineStyle.color = colorArray
    ;(gaugeOptions.series as any)[0].data = outSideCountArr
    ;(gaugeOptions.series as any)[2].data = inSideCountArr
  }

  setOptions(gaugeOptions, false)
})
</script>

<style scoped lang="less">
.greenBox {
  width: 100vw;
  height: 100vh;
  display: inline-block;
  background: #333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  display: inline-block;
  .text_div {
    margin: 0 4px;
    flex: calc(20% - 8px) 0 0;
    padding: 16px 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: linear-gradient(180deg, #0f2655 0%, #0f0f0f 98%);
    box-sizing: border-box;
    border-image: linear-gradient(180deg, #1a3567 0%, rgba(26, 53, 103, 0) 100%) 2;
    border: 1px solid rgba(26, 53, 103);
    .text1 {
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.55);
    }
    .number1 {
      font-weight: 600;
      margin-top: 8px;
      font-size: 14px;
    }
  }
  .topBar {
    display: flex;
    position: absolute;
    width: 120%;
    top: calc(0% - 100px);
    left: -10%;
    justify-content: center;
  }
  .bottomBar {
    display: flex;
    position: absolute;
    width: 120%;
    bottom: 0;
    left: -10%;
    justify-content: center;
  }
  .circleBar {
    position: absolute;
    width: 120%;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: -10%;
    .text_div {
      background: linear-gradient(180deg, #0f2655 0%, rgba(19, 38, 75, 0) 100%);
      border-image: linear-gradient(180deg, #1a3567 0%, rgba(26, 53, 103, 0.2) 96%);
      border-radius: 50px;
      flex: 100px 0 0;
      height: 100px;
    }
  }
  .charts {
    width: 100%;
    height: 100%;
    // position: absolute;
    top: 0;
    left: 0;
  }
  .earthAttack {
    position: absolute;
    top: 0;
    left: 0;
    // top: calc(50% - 80px);
    // left: calc(50% - 170px);
  }
  .topleft {
    border-radius: 80px 0 0 0;
  }
  .topright {
    border-radius: 0 80px 0 0;
  }
  .bottomleft {
    border-radius: 0 0 0 80px;
  }
  .bottomright {
    border-radius: 0 0 80px 0;
  }
}
</style>
