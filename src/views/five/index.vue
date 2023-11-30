<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-06 09:19:48
 * @LastEditTime: 2023-05-26 11:49:24
-->
<template>
  <div class="container">
    <earth-attack :attackSourceTargetData="attackSourceTargetData" :height="1500" :width="1500" />
  </div>
</template>

<script setup lang="ts">
import earthAttack from '@/components/earth-attack'
import type { I_Globe_Attack_Data } from '@/components/gauge-earth/type'
import { ref } from 'vue'
//globe Data
const attackSourceTargetData = ref<I_Globe_Attack_Data[]>([
  {
    source: [138.252924, 36.204824],
    target: [104.195397, 35.86166],
    color: 'red'
  },
  {
    source: [15.827659, -0.228021],
    target: [104.195397, 35.86166],
    color: 'blue'
  },
  {
    source: [10.451526, 51.165691],
    target: [30.802498, 26.820553],
    color: 'green'
  }
])
</script>

<style scoped>
.container {
  background-color: #12273d;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
}
</style>
