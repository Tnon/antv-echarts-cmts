<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-11 09:17:33
 * @LastEditTime: 2023-08-11 09:24:40
-->
<template>
  <div class="con">
    <img class="arr" src="./imgs/arrowb.gif" />
    <img src="./imgs/flag.png" v-if="nodeState.flag" alt="" />
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<{ flag: boolean }>(GraphNode.data)
</script>

<style scoped lang="less">
.con {
  position: reactive;
  .arr {
    width: 30px;
  }
}
</style>
