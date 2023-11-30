<template>
  <div class="lineContainer" :class="{ hide: !showLine }">
    <template v-for="item in attackData" :key="item.name">
      <div class="lineNode">
        <c-line :attackType="item" :xData="xData" :yData="yDataMap[item.name]" />
      </div>
    </template>
    <div class="now"></div>
    <div class="toogleShow" @click="showLine = !showLine">
      <span class="icon" v-if="showLine">X</span>
      <span>{{ showLine ? 'COLLAPSE' : 'OPEN TIMELINE' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { I_AttackProps } from '../echartsMap/type'
import cLine from './line.vue'
import { getXdata, getNewXData } from '.'
import { onUnmounted } from 'vue'
import { reactive } from 'vue'
const props = defineProps<{
  attackData: I_AttackProps[]
  dataRange: string
}>()
let timer: any = 0
const showLine = ref(true)
const randomData = (number: number, length: number) => {
  const arr: number[] = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * number))
  }
  return arr
}
//x
const xData = ref<string[]>([])
//y
const yDataMap = reactive<{ [k: string]: number[] }>({})
props.attackData.forEach((ele) => {
  yDataMap[ele.name] = randomData(10, 720)
})
const renderData = () => {
  xData.value = getXdata(props.dataRange)
  //mock Y data

  for (let k in yDataMap) {
    yDataMap[k] = randomData(20, 720)
  }
  timer = setInterval(
    () => {
      xData.value.shift()
      xData.value.push(getNewXData(props.dataRange))

      for (let k in yDataMap) {
        yDataMap[k].shift()
        yDataMap[k].push(Math.floor(Math.random() * 20))
      }
    },
    props.dataRange === 'hour' ? 5000 : props.dataRange === 'day' ? 1000 * 2 * 60 : 1000 * 60 * 60
  )
}
renderData()

watch(
  () => props.dataRange,
  () => {
    clearInterval(timer)
    renderData()
  }
)
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped lang="less">
.lineContainer {
  position: absolute;
  transition: all 0.3s;
  left: 0;
  bottom: 0;
  width: calc(100vw - 450px);
  border: 1px solid #007680;
  border-left: none;
  border-bottom: none;
  border-radius: 8px;
  padding: 20px 50px;
  .lineNode {
    display: flex;
    align-items: center;
  }
  .now {
    position: absolute;
    color: #2bb0bc;
    font-size: 14px;
    width: 2px;
    height: 100%;
    background-color: #007680;
    top: 0;
    bottom: 0;
    right: 216px;
    &::before {
      content: 'Now';
      position: absolute;
      left: -30px;
      top: 10px;
    }
  }
  .toogleShow {
    padding: 8px 16px;
    border: 1px solid #007680;
    border-radius: 8px 8px 0 0;
    border-bottom: none;
    position: absolute;
    top: -40px;
    right: 20px;
    font-size: 14px;
    color: #007680;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 10px;
    }
    cursor: pointer;
  }
}
.hide {
  bottom: -170px;
}
</style>
