<template>
  <div class="total" :style="{ border: '1px solid' + themeColor, background: bgColor }">
    <div class="title" :style="{ color: themeColor }">{{ title }}</div>
    <div class="chartLegend">
      <div
        class="chartContainer"
        :style="{ width: width ?? 1500 + 'px', height: height ?? 200 + 'px' }"
        ref="lineChartRef"
      ></div>
      <div class="legend">
        <div class="title">
          <div>
            <span>Legend</span>
          </div>
          <template v-for="(item, index) in series" :key="item.name">
            <div
              class="legendItem"
              @click="switchLegend(item.name, index)"
              :class="{ notActived: !showHide[index] }"
            >
              <div class="dotted" :style="{ background: item.color }"></div>
              <span>{{ item.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import { ref, type Ref, watch } from 'vue'
const props = defineProps<{
  title: string
  width?: number
  height?: number
  themeColor: string
  bgColor: string
  xAxis: string[]
  series: {
    name: string
    data: number[]
    color: string
  }[]
}>()
//显示隐藏
const showHide = ref<boolean[]>([])
//chart 元素
const lineChartRef = ref<HTMLDivElement | null>(null)
const { setOptions, echarts } = useECharts(lineChartRef as Ref<HTMLDivElement>)
const options = {
  legend: {
    show: false
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xAxis
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Count',
      nameTextStyle: {
        // y轴name的样式调整
        color: '#fff',
        fontSize: 12,
        padding: [0, 0, 20, 40]
      },
      nameLocation: 'middle',
      nameRotate: 90, // y轴name旋转90度 使其垂直
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true
      },
      axisLine: {
        show: true //隐藏y轴
      },
      axisTick: {
        show: true
      }
    }
  ],
  //   background: linear-gradient(180deg, rgba(228,179,240,0.30) 0%, rgba(228,179,240,0.10) 100%);
  series: []
}
props.series.forEach((ele) => {
  ;(options.series as any).push({
    name: ele.name,
    type: 'line',
    symbol: 'none',
    areaStyle: {
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1.1,
        [
          {
            offset: 0,
            color: ele.color
          },
          {
            offset: 1,
            color: '#000'
          }
        ],
        false
      ),
      shadowColor: 'rgba(240, 80, 100, 0.08)',
      shadowBlur: 1200
    },
    lineStyle: {
      color: ele.color
    },
    data: ele.data
  })
  showHide.value.push(true)
})
setOptions(options as any)
const switchLegend = (name: string, index: number) => {
  setOptions(
    {
      legend: {
        selected: { [name]: !showHide.value[index] }
      }
    },
    false
  )
  showHide.value[index] = !showHide.value[index]
}

watch(
  () => props.series,
  () => {
    options.xAxis[0].data = props.xAxis
    props.series.forEach((ele, index) => {
      ;(options.series[index] as any).data = ele.data
    })
    setOptions(options as any, false)
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="less">
.total {
  padding: 10px 40px;
  .chartLegend {
    display: flex;
    .legend {
      color: #fff;
      .legendItem {
        cursor: pointer;
        margin: 15px 0;
        display: flex;
        align-items: center;
        .dotted {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin-right: 16px;
        }
      }
      .notActived {
        opacity: 0.5;
      }
    }
  }
}
</style>
