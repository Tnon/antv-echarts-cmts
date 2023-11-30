<template>
  <div ref="gaugeRef" class="charts"></div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import { ref, watch } from 'vue'
const props = defineProps<{
  score: number
}>()
const gaugeRef = ref()
const opetions = {
  series: [
    {
      type: 'gauge',
      min: 0,
      max: 100,
      zlevel: 4,
      startAngle: 180,
      endAngle: 0,
      radius: '25%',
      axisLine: {
        lineStyle: {
          shadowColor: '#ddd',
          shadowBlur: 50,
          color: [[1, '#f2f2f2']],
          width: '15%'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      center: ['50%', '50%'],
      pointer: {
        offsetCenter: [0, '-115%'],
        length: '180%',
        itemStyle: {
          color: '#000'
        }
      },

      detail: {
        fontSize: 50,
        offsetCenter: [0, '-38%'],
        valueAnimation: false,

        color: '#83D0C6'
      },

      data: [
        {
          value: props.score
        }
      ]
    },
    {
      type: 'gauge',
      min: 0,
      max: 100,
      zlevel: 0,
      startAngle: 180,
      endAngle: 0,
      radius: '94%',
      axisLine: {
        lineStyle: {
          color: [[1, '#f2f2f2']],
          width: 360
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      center: ['50%', '53%']
    },

    {
      type: 'gauge',
      zlevel: 3,
      min: 0,
      max: 100,
      startAngle: 180,
      endAngle: 0,
      splitNumber: 8,
      radius: '94%',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },

      axisLabel: {
        color: '#B0B0B0',
        fontSize: 20,
        distance: 25,
        rotate: 'tangential',
        formatter: function (value: number) {
          if (value === 12.5) {
            return 'extreme \n fear'
          } else if (value === 37.5) {
            return 'fear'
          } else if (value === 62.5) {
            return '{a|greed}'
          } else if (value === 87.5) {
            return 'extreme \ngreed'
          }
          return ''
        },
        rich: {
          a: {
            color: '#000',
            fontSize: 20
          }
        }
      }
    },
    {
      type: 'gauge',
      zlevel: 2,
      min: 0,
      max: 100,
      startAngle: 180,
      endAngle: 0,
      splitNumber: 4,
      radius: '94%',
      axisLine: {
        lineStyle: {
          color: [
            [0.25, '#EAEAEA'],
            [0.5, '#EAEAEA'],
            [0.75, '#8AD2CF'],
            [1, '#EAEAEA']
          ],

          width: 120
        }
      },
      splitLine: {
        distance: -120,
        length: 120,
        lineStyle: {
          color: '#f2f2f2',
          width: 4
        }
      },
      axisTick: {
        distance: 20,
        length: 1,
        lineStyle: {
          color: '#000',
          width: 1
        }
      },
      axisLabel: {
        show: false
      }
    },
    {
      type: 'gauge',
      zlevel: 1,
      min: 0,
      max: 100,
      startAngle: 180,
      endAngle: 0,
      splitNumber: 4,
      radius: '62%',
      axisLine: {
        lineStyle: {
          color: [[1, '#F2F2F2']],
          width: '74%'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    }
  ]
}
const { setOptions } = useECharts(gaugeRef)
setOptions(opetions as any)

watch(
  () => props.score,
  () => {
    ;(opetions.series as any)[0].data[0].value = props.score
    setOptions(opetions as any, false)
  }
)
</script>

<style scoped>
.charts {
  width: 500px;
  height: 500px;
}
</style>
