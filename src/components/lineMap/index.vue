<template>
  <div ref="chartRef" class="charts"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import 'echarts/extension/bmap/bmap'
import { useECharts } from '@/tools/useECharts'
// import worldJson from './map/world.json';
// import worldZhJson from './map/world-zh.json';
import { data, geoCoordMap } from './index'

type DataType = {
  name: string
  value: string[]
  color: string
}

const convertData = function (data) {
  const res: DataType[] = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
        color: data[i].color
      })
    }
  }
  return res
}

const lineData = (data) => {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const dataItem = data[i]
    console.log(dataItem)
    const fromCoord = geoCoordMap[dataItem.name]
    const toCoord = [-60, 0]
    if (fromCoord && toCoord) {
      res.push([{ coord: toCoord }, { coord: fromCoord }])
    }
  }
  return res
}

const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

onMounted(() => {
  setOptions({
    // title: {
    //   text: '全国主要城市空气质量 - 百度地图',
    //   subtext: 'data from PM25.in',
    //   sublink: 'http://www.pm25.in',
    //   left: 'center',
    // },
    // tooltip: {
    //   trigger: 'item',
    // },
    bmap: {
      center: [30.114129, 20.550339],
      zoom: 2,
      roam: true,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#031628'
            }
          },
          {
            featureType: 'land',
            elementType: 'geometry',
            stylers: {
              color: '#000102'
            }
          },
          {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#000000'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.stroke',
            stylers: {
              color: '#0b3d51'
            }
          },
          {
            featureType: 'local',
            elementType: 'geometry',
            stylers: {
              color: '#000000'
            }
          },
          {
            featureType: 'railway',
            elementType: 'geometry.fill',
            stylers: {
              color: '#000000'
            }
          },
          {
            featureType: 'railway',
            elementType: 'geometry.stroke',
            stylers: {
              color: '#08304b'
            }
          },
          {
            featureType: 'subway',
            elementType: 'geometry',
            stylers: {
              lightness: -70
            }
          },
          {
            featureType: 'building',
            elementType: 'geometry.fill',
            stylers: {
              color: '#000000'
            }
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: {
              color: '#857f7f'
            }
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: {
              color: '#000000'
            }
          },
          {
            featureType: 'building',
            elementType: 'geometry',
            stylers: {
              color: '#022338'
            }
          },
          {
            featureType: 'green',
            elementType: 'geometry',
            stylers: {
              color: '#062032'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'all',
            stylers: {
              color: '#465b6c'
            }
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              color: '#022338'
            }
          },
          {
            featureType: 'label',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          }
        ]
      }
    },
    series: [
      {
        type: 'lines',
        coordinateSystem: 'bmap',
        effect: {
          show: true,
          symbol: 'arrow',
          symbolSize: 5,
          color: 'red',
          trailLength: 0,
          period: 4
        },
        lineStyle: {
          width: 2,
          opacity: 1,
          curveness: 0.2,
          color: 'red'
        },
        data: lineData(data)
      }
    ]
  })
})
</script>

<style scoped lang="less">
.charts {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
