<template>
  <div class="top5">
    <div class="title">
      {{ dataSource.title }}
    </div>
    <template v-for="item in dataSource.data" :key="item.name">
      <div class="node" :style="{ color: dataSource.themeColor }">
        <div class="label">
          <img class="logo" v-if="item.code" :src="modules[item.code]" />
          <span>{{ item.name }}</span>
        </div>
        <div class="value">{{ item.percent }}</div>
        <div
          class="percent"
          :style="{ backgroundColor: dataSource.themeColor, width: item.percent }"
        ></div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { I_Top_Five } from './type'
import modules from '@/assets/map/imgs'

defineProps<{
  dataSource: I_Top_Five
}>()
</script>

<style scoped lang="less">
.top5 {
  padding: 16px 16px;
  .title {
    font-size: 14px;
    color: #fff;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .node {
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
    position: relative;
    font-size: 12px;
    padding: 2px 0;
    .label {
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 14px;
        margin-right: 10px;
      }
    }
    .percent {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      opacity: 0.2;
      background-color: rgb(25, 152, 168);
    }
  }
}
</style>
