<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 17:04:02
 * @LastEditTime: 2023-05-26 11:44:39
-->
<template>
  <div class="container">
    <sourceTarget
      :dirction="dirction"
      :size="size"
      :sourceAttack="sourceAttack"
      :centerNode="centerNode"
      :targetAttack="targetAttack"
    />
  </div>
</template>

<script setup lang="ts">
import sourceTarget from '@/components/source-target'
import { ref } from 'vue'
import type {
  I_Center_Host,
  I_Source_Country,
  I_Target_Country,
  T_Dirction
} from '@/components/source-target/type'
import countries from '@/assets/map/countries'
//the view's size
const size = {
  width: 2000,
  height: 1200
}
//The dirction of Attack  lr=left to right  rl=right to left
const dirction = ref<T_Dirction>('lr')
//The country and count of attacker
const sourceAttack = ref<I_Source_Country[]>([])

//mock data source
for (let i = 0; i < 8; i++) {
  sourceAttack.value.push({
    countryCode: Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)],
    count: Math.floor(Math.random() * 30)
  })
}

//mock data center
const centerNode = ref<I_Center_Host>({
  ip: Math.floor(Math.random() * 255) + '.1.2.' + Math.floor(Math.random() * 255),
  label: 'Host'
})

//mock data target
const targetAttack = ref<I_Target_Country[]>([])
//mock data source
for (let i = 0; i < 4; i++) {
  targetAttack.value.push({
    countryCode: Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)],
    ip: Math.floor(Math.random() * 255) + '.1.2.' + Math.floor(Math.random() * 255)
  })
}
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: auto;
}
</style>
