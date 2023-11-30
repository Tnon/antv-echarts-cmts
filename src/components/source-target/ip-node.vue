<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-05 11:25:46
 * @LastEditTime: 2023-05-05 12:21:00
-->
<template>
  <div class="node">{{ nodeState.ip }}</div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'

const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive(GraphNode.data)
</script>

<style scoped lang="less">
.node {
  display: inline-block;
  width: 200px;
  height: 20px;
  border: 1px solid red;
}
</style>
