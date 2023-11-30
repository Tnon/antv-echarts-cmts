<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-11 18:59:36
 * @LastEditTime: 2023-05-12 10:13:08
-->
<template>
  <div class="total">
    <div class="circle">
      <count-to :endVal="total" />
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import countTo from '@/components/count-to'
defineProps<{
  total: number
  label: string
}>()
</script>

<style scoped lang="less">
.total {
  width: 300px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dc4444;
    font-size: 35px;
    margin-bottom: 20px;
  }
  .label {
    font-size: 30px;
  }
}
</style>
