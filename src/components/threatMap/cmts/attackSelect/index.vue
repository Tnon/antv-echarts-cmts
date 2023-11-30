<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-16 11:09:39
 * @LastEditTime: 2023-05-26 14:37:29
-->
<template>
  <div class="container">
    <div class="title">Attack Types</div>

    <div class="select">
      <template v-for="(item, index) in attackData" :key="item.name">
        <div class="node" @click="selected(index)">
          <span class="check" :style="{ background: item.color }">
            <span class="icon" v-show="item.selected">✓</span>
          </span>
          <span class="label">{{ item.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { I_AttackProps } from '../echartsMap/type'

const props = defineProps<{
  attackData: I_AttackProps[]
}>()
const selected = (index: number) => {
  props.attackData[index].selected = !props.attackData[index].selected
}
</script>

<style scoped lang="less">
.container {
  display: inline-block;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 99;
  .title {
    font-size: 14px;
    color: #007680;
    margin-bottom: 12px;
  }
  .select {
    border: 1px solid #007680;
    border-radius: 8px;
    padding: 8px 16px;
    padding-right: 80px;

    .node {
      margin: 12px 0;
      display: flex;
      cursor: pointer;
      align-items: center;
      .check {
        width: 20px;
        height: 20px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        font-weight: 600;
        margin-right: 12px;
        .icon {
          flex: 1;
          text-align: center;
          color: #000;
        }
      }

      .label {
        font-size: 12px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
}
</style>
