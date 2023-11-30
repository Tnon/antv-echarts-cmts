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
      startAngle: -180,
      endAngle: 0,
      splitNumber: 4,
      zlevel: 5,
      radius: '80%',
      axisLine: {
        lineStyle: {
          width: 15,
          color: [
            [0.25, '#C12026'],
            [0.5, '#D57758'],
            [0.75, '#99B46D'],
            [1, '#4AAB42']
          ]
        }
      },
      pointer: { show: false },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['100%', '15%'],
        fontSize: 20,
        color: '#4AAB42'
      },
      data: [
        {
          name: 'Extrem\nGreed'
        }
      ],
      splitLine: {
        distance: -15,
        length: 15,
        lineStyle: {
          color: '#f2f2f2',
          width: 3
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        distance: 25,
        color: '#B8B8BA',
        fontSize: 20,
        formatter: function (value: number) {
          if (value === 50 || value === 0 || value === 100) {
            return value
          }
          return ''
        }
      }
    },

    {
      type: 'gauge',
      min: 0,
      max: 100,
      z: 112,
      splitNumber: 4,
      startAngle: -180,
      endAngle: 0,
      center: ['50%', '63%'],
      radius: '96%',
      axisLine: {
        lineStyle: {
          color: [[1, '#F4F2F3']],
          width: '67%'
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
    },

    {
      type: 'gauge',
      min: 0,
      max: 100,
      splitNumber: 4,
      startAngle: 195,
      endAngle: -15,
      zlevel: 2,
      radius: '100%',
      // markPoint: {
      //   symbol: 'circle',
      //   itemStyle: {
      //     color: '#C12026'
      //   },
      //   data: [
      //     {
      //       name: '某个屏幕坐标',
      //       x: '18%',
      //       y: 50,
      //       value: 16
      //     }
      //   ]
      // },
      axisLine: {
        lineStyle: {
          color: [[1, '#F4F2F3']],
          width: '70%'
        }
      },
      splitLine: {
        distance: -18,
        length: 18,
        lineStyle: {
          color: '#f00'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      anchor: {
        showAbove: true,
        show: true,
        size: 40,
        itemStyle: {
          color: '#eee',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10
        }
      },
      pointer: {
        length: '90%',
        itemStyle: {
          color: '#515153'
        }
      },
      // pointer: {
      //   width: 2,
      //   icon: 'rect',
      //   length: 90,
      //   offsetCenter: [0, -120],
      //   itemStyle: {
      //     color: '#d0ffdf',
      //     shadowBlur: 10
      //   }
      // },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['-80%', '15%'],
        fontSize: 20,
        color: '#C12026'
      },
      data: [
        {
          value: props.score,
          name: 'Extrem\nFear'
        }
      ]
    },
    {
      type: 'gauge',
      min: 0,
      max: 100,
      splitNumber: 4,
      startAngle: 180,
      endAngle: 0,
      zlevel: 2,
      radius: '100%',
      axisLine: {
        show: false
      },
      splitLine: {
        distance: -10,
        length: 40,
        lineStyle: {
          color: '#fff',
          width: 2
        }
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
    ;(opetions.series as any)[2].data[0].value = props.score
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
