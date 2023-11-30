<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-09 10:50:20
 * @LastEditTime: 2023-08-11 09:49:20
-->
<template>
  <div class="container">
    <data-architecture
      :size="size"
      :dataSource="dataStart"
      :centerData="centerData"
      :endData="endData"
    />
  </div>
</template>

<script setup lang="ts">
import dataArchitecture from '@/components/data-architecture'
import type { I_Data_Source } from '@/components/data-architecture/type'
import { reactive, ref } from 'vue'
import iotGif from './imgs/iot.gif'
import dbGif from './imgs/db.gif'
import wsGif from './imgs/ws.gif'
import drlGif from './imgs/drl.gif'
import dwGif from './imgs/dw.gif'
import dvboGif from './imgs/dvbo.gif'
const size = reactive({
  width: 2100,
  height: 800
})
//dataSource
const dataStart = ref<I_Data_Source[]>([
  {
    icon: iotGif,
    label: 'Internet of things'
  },
  {
    icon: dbGif,
    label: 'Databases'
  },
  {
    icon: iotGif,
    label: 'Files'
  },
  {
    icon: iotGif,
    label: 'Legacy Systems'
  },
  {
    icon: iotGif,
    label: 'Applications'
  },
  {
    icon: wsGif,
    label: 'Web Services'
  }
])
//centerData
const centerData = ref<I_Data_Source[]>([
  {
    icon: drlGif,
    label: 'Data Routing & Loading'
  },
  {
    icon: dwGif,
    label: 'Data Warehouse'
  }
])
const endData = ref([
  {
    label: 'Data Sharing',
    icon1: dvboGif,
    icon2: dvboGif
  },
  {
    label: 'Data Sharing',
    icon1: dvboGif,
    icon2: dvboGif
  },
  {
    label: 'Data Sharing',
    icon1: dvboGif,
    icon2: dvboGif
  }
])
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
