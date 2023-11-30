<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-14 15:45:10
 * @LastEditTime: 2023-06-07 13:45:45
-->
<template>
  <div class="container">
    <div class="energy-flow" ref="energyFlowRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { energyFlow } from '.'
const energyFlowRef = ref()

onMounted(() => {
  energyFlow(energyFlowRef.value, {
    particles: 200,
    duration: 5,
    jiggle: 15,
    colors: ['#0E80C0', '#53C1B0', '#52A6DD'],
    size: { width: 1000, height: 100 }
  })
})
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
}
</style>
