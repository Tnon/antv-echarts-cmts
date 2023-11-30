<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-13 15:29:16
 * @LastEditTime: 2023-05-26 14:39:23
-->
<template>
  <div class="mapContainer">
    <!-- select Attack Maps start -->
    <attack-select :attackData="attackData" />
    <!-- select Attack Maps end -->

    <!-- echarts map start -->
    <echarts-map :attackData="attackData" />
    <!-- echarts map end -->

    <!-- statistics  interval start-->
    <statistics-interval v-model:dataRange="dataRangeCmp" />
    <!-- statistics  interval end-->

    <!-- attack lines start -->
    <attack-lines :attackData="attackData" :dataRange="dataRange" />
    <!-- attack lines end -->
  </div>
</template>

<script setup lang="ts">
import echartsMap from './cmts/echartsMap'
import type { I_AttackProps } from './cmts/echartsMap/type'
import attackSelect from './cmts/attackSelect'
import attackLines from './cmts/attackLines'
import statisticsInterval from './cmts/statisticsInterval'
import { computed } from 'vue'
const props = defineProps<{
  attackData: I_AttackProps[]
  dataRange: string
}>()
const emit = defineEmits(['update:dataRange'])
const dataRangeCmp = computed({
  get: () => props.dataRange,
  set: (v) => emit('update:dataRange', v)
})
</script>

<style scoped>
.mapContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
