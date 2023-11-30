<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-06 10:10:10
 * @LastEditTime: 2023-05-10 17:19:41
-->
<template>
  <div class="mapc" ref="mapRef"></div>
</template>

<script setup lang="ts">
import { useECharts } from '@/tools/useECharts'
import { ref } from 'vue'
import worldJson from './map/world.json'
const mapRef = ref()
const { setOptions, echarts } = useECharts(mapRef as any)
echarts.registerMap('world', worldJson as any)
const optionLiMap = {
  geo3D: {
    map: 'world',
    shading: 'realistic',
    silent: true,
    // environment: '#333',
    realisticMaterial: {
      roughness: 0.8,
      metalness: 0
    },
    postEffect: {
      enable: true
    },
    groundPlane: {
      show: false
    },
    light: {
      main: {
        intensity: 1,
        alpha: 30
      },
      ambient: {
        intensity: 0
      }
    },
    viewControl: {
      distance: 70,
      alpha: 89,
      panMouseButton: 'left',
      rotateMouseButton: 'right'
    },
    itemStyle: {
      color: '#000'
    },
    regionHeight: 0.5
  },
  series: [
    {
      type: 'lines3D',
      coordinateSystem: 'geo3D',
      effect: {
        show: true,
        trailWidth: 1,
        trailOpacity: 0.5,
        trailLength: 0.2,
        constantSpeed: 5
      },
      blendMode: 'lighter',
      lineStyle: {
        width: 0.2,
        opacity: 0.05
      },
      data: [
        [
          [104.195397, 35.86166],
          [108.277199, 14.058324]
        ],
        [
          [104.195397, 35.86166],
          [138.252924, 36.204824]
        ],
        [
          [104.195397, 35.86166],
          [108.277199, 14.058324]
        ],
        [
          [104.195397, 35.86166],
          [15.827659, -0.228021]
        ],
        [
          [104.195397, 35.86166],
          [10.451526, 51.165691]
        ],
        [
          [104.195397, 35.86166],
          [108.277199, 14.058324]
        ],

        [
          [104.195397, 35.86166],
          [12.354722, 7.369721999999999]
        ],
        [
          [104.195397, 35.86166],
          [33.429859, 35.126413]
        ],
        [
          [104.195397, 35.86166],
          [10.451526, 51.165691]
        ],
        [
          [104.195397, 35.86166],
          [30.802498, 26.820553]
        ],
        [
          [104.195397, 35.86166],
          [108.277199, 14.058324]
        ],
        [
          [104.195397, 35.86166],
          [84.12400799999999, 28.394857]
        ],
        [
          [104.195397, 35.86166],
          [30.217636, 12.862807]
        ],
        [
          [104.195397, 35.86166],
          [100.992541, 15.870032]
        ],
        [
          [104.195397, 35.86166],
          [48.516388, 15.552727]
        ],
        [
          [104.195397, 35.86166],
          [103.846656, 46.862496]
        ],
        [
          [104.195397, 35.86166],
          [-95.712891, 37.09024]
        ],
        [
          [104.195397, 35.86166],
          [104.195397, 35.86166]
        ],
        [
          [104.195397, 35.86166],
          [-95.712891, 37.09024]
        ]
      ]
    }
  ]
}

setOptions(optionLiMap as any)
</script>

<style scoped>
.mapc {
  width: 100vw;
  height: 100vh;
  background: #0a3047;
}
</style>
