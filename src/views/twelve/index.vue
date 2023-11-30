<template>
  <flow-diagram
    :fRowImg="fRowImg"
    :sRowImg="sRowImg"
    :tRowImg="tRowImg"
    :midData="midData"
    :labelText="labelText"
    :ruleLabel="ruleLabel"
    :resultLabel="resultLabel"
  />
</template>

<script setup lang="ts">
import baiduImg from './imgs/baidu.png'
import douyuImg from './imgs/douyu.png'
import huaweiImg from './imgs/huawei.png'
import biliImg from './imgs/bilibili.png'
import meizuImg from './imgs/meizu.png'
import miImg from './imgs/mi.png'
import zhiImg from './imgs/zhi.png'
import weiboImg from './imgs/weibo.png'
import momoImg from './imgs/momo.png'
import midImg from './imgs/mid.png'
import flowDiagram from '@/components/flow-diagram'
import { ref, reactive } from 'vue'

const fRowImg = ref([baiduImg, douyuImg, huaweiImg])
const sRowImg = ref([biliImg, meizuImg, miImg])
const tRowImg = ref([zhiImg, weiboImg, momoImg])

const midData = reactive({
  img: midImg,
  label: 'Custom'
})

const labelText = reactive({
  top: 'Top',
  mid: 'Middle',
  bottom: 'Bottom'
})

const ruleLabel = reactive({
  bottom: 'Rule1',
  middle: 'Rule2'
})

const resultLabel = reactive({
  fi: 'Label1',
  se: 'Label2',
  th: 'Label3',
  fo: 'Label4'
})
</script>

<style scoped></style>
