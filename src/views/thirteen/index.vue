<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 14:40:53
 * @LastEditTime: 2023-06-02 12:04:14
-->
<template>
  <div class="container">
    <data-platform
      :size="size"
      :dataSource="dataSource"
      :dataLoader="dataLoader"
      :rawData="rawData"
      :trustedData="trustedData"
      :serviceData="serviceData"
      :cataLog="cataLog"
      :disCovery="disCovery"
      :lineAge="lineAge"
      :dataLake="dataLake"
      :dataShare="dataShare"
      :dataVisualization="dataVisualization"
      :mlDevelopment="mlDevelopment"
      :addOn="addOn"
    />
  </div>
</template>

<script setup lang="ts">
import dataPlatform from '@/components/data-platform'
import type { I_Data_Source } from '@/components/data-platform/type'
import { reactive, ref } from 'vue'
import dbGif from './imgs/db.gif'
import lsGif from './imgs/ls.gif'
import saGif from './imgs/sa.gif'
import appGif from './imgs/app.gif'
import fileGif from './imgs/file.gif'
import wsGif from './imgs/ws.gif'
import insSGif from './imgs/inls.gif'
import davisGif from './imgs/davis.gif'
import dcenGif from './imgs/dcen.gif'
import aiGif from './imgs/ai.gif'

import dataGif from './imgs/data.gif'
import sapSvg from './imgs/SAP.svg'
import xmlSvg from './imgs/XML.svg'
import excelSvg from './imgs/EXCEL.svg'
import apiSvg from './imgs/API.svg'
import Salesforce from './imgs/Salesforce.svg'
import clGif from './imgs/catlog.gif'
import lineageGif from './imgs/lineage.gif'
import discGif from './imgs/disc.gif'
import dataLakeGif from './imgs/datalake.gif'
import mlGif from './imgs/ml.gif'
import dsGif from './imgs/ds.gif'

import rdGif from './imgs/rd.gif'
import sdGif from './imgs/sd.gif'
import tdGif from './imgs/td.gif'
const size = reactive({
  width: 1200,
  height: 800
})
const dataSource = ref<I_Data_Source[]>([
  {
    label: 'Databases',
    icon: dbGif,
    lineIcon: dataGif
  },
  {
    label: 'Legacy Systems',
    icon: lsGif,
    lineIcon: sapSvg
  },
  {
    label: 'SaaS Apps',
    icon: saGif,
    lineIcon: Salesforce
  },
  {
    label: 'Applications',
    icon: appGif,
    lineIcon: apiSvg
  },
  {
    label: 'Web Services',
    icon: wsGif,
    lineIcon: xmlSvg
  },
  {
    label: 'Files',
    icon: fileGif,
    lineIcon: excelSvg
  }
])

const dataLoader = reactive<I_Data_Source>({
  label: 'Data Loaders',
  icon: dcenGif
})

const rawData = reactive<I_Data_Source>({
  label: 'Raw  Data',
  icon: rdGif
})
const trustedData = reactive<I_Data_Source>({
  label: 'Trusted Data',
  icon: tdGif
})
const serviceData = reactive<I_Data_Source>({
  label: 'Service Data',
  icon: sdGif
})
const cataLog = reactive<I_Data_Source>({
  label: 'Catalog',
  icon: clGif
})
const disCovery = reactive<I_Data_Source>({
  label: 'Discovery',
  icon: discGif
})
const lineAge = reactive<I_Data_Source>({
  label: 'Lineage',
  icon: lineageGif
})
const dataLake = reactive<I_Data_Source>({
  label: 'Data Lake',
  icon: dataLakeGif
})
const dataShare = reactive<I_Data_Source>({
  label: 'Data Sharing',
  icon: dsGif
})
const dataVisualization = reactive<I_Data_Source>({
  label: 'Data Visualization',
  icon: davisGif
})
const mlDevelopment = reactive<I_Data_Source>({
  label: 'M.L Development',
  icon: mlGif
})
const addOn = reactive<{ [k: string]: I_Data_Source }>({
  title: {
    label: 'Add-ons',
    icon: ''
  },
  insightsStores: {
    label: 'Insights Stores',
    icon: insSGif
  },
  aiStores: {
    label: 'A.I.Store',
    icon: aiGif
  }
})
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
