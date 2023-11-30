<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-10 09:54:17
 * @LastEditTime: 2023-08-10 15:54:54
-->
<template>
  <div class="encry">
    <div class="extra" v-if="nodeState.title">{{ nodeState.title }}</div>
    <img class="arrow" src="./imgs/arrowb.gif" alt="" />
    <div class="label" v-if="nodeState.label">{{ nodeState.label }}</div>
    <div class="flag">
      <img src="./imgs/flag.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = ref<{ title: string; label: string }>(GraphNode.data)
</script>

<style scoped lang="less">
.encry {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .extra {
    color: #01bea3;
  }
  .arrow {
    width: 50px;
    // height: 12px;
  }
  .label {
    color: rgba(0, 0, 0, 0.85);
  }
  .flag {
    position: absolute;
    right: -5px;
    bottom: -20px;
    img {
      width: 30px;
      height: 20px;
    }
  }
}
</style>
