<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-11 09:44:00
 * @LastEditTime: 2023-08-11 09:54:35
-->
<template>
  <div class="con">
    <div class="label">{{ nodeState.label }}</div>
    <div class="c">
      <img :src="nodeState.icon1" alt="" />
      <img :src="nodeState.icon2" alt="" />
    </div>
    <div class="sque" v-if="nodeState.index === 0"></div>
    <div class="sque2" v-if="nodeState.index === 2"></div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<any>(GraphNode.data)
</script>

<style scoped lang="less">
.con {
  width: 300px;
  position: relative;
  height: 200px;
  .label {
    font-size: 16px;
    font-weight: 600;
    color: #01bea3;
    text-align: center;
  }
  .c {
    border: 2px dashed #01bea3;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    img {
      width: 120px;
    }
  }
  .sque {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #01bea3;
    position: absolute;
    left: -20px;
    bottom: 60px;
  }
  .sque2 {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #01bea3;
    position: absolute;
    left: -20px;
    top: 60px;
  }
}
</style>
