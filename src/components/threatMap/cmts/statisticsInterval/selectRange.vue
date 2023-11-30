<template>
  <div class="selCon">
    <div class="title">STATISTICS INTERVAL</div>
    <div class="ipt" @click="changeOption()">
      <div class="text">{{ showText }}</div>
      <div class="icon">></div>
      <div class="options" v-if="showOption">
        <div
          class="node"
          @click.stop="changeOption(item.value)"
          v-for="item in options"
          :key="item.label"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  dataRange: string
}>()
const emit = defineEmits(['update:dataRange'])
const options = ref([
  {
    label: '1 hour',
    value: 'hour'
  },
  {
    label: '24 hours',
    value: 'day'
  },
  {
    label: '1 month',
    value: 'month'
  }
])
const showOption = ref(false)

const showText = computed(() => {
  let text = ''
  options.value.forEach((ele) => {
    if (ele.value === props.dataRange) {
      text = ele.label
    }
  })
  return text
})

const changeOption = (value?: string) => {
  showOption.value = !showOption.value
  value && emit('update:dataRange', value)
}
</script>

<style scoped lang="less">
.selCon {
  padding: 16px;
  border-bottom: 1px solid #007680;
  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #1998a8;
  }
  .ipt {
    display: flex;
    position: relative;
    border: 1px solid #007680;
    padding: 8px 16px;
    align-items: center;
    width: 150px;
    border-radius: 8px;
    cursor: pointer;
    justify-content: space-between;
    font-size: 12px;
    .text {
      color: #fff;
    }
    .icon {
      color: #fff;
      transform: rotate(90deg);
    }
    .options {
      position: absolute;
      z-index: 11;
      width: 100%;
      top: 36px;
      border: 1px solid #007680;
      border-top: none;
      background-color: #000;
      left: 0;
      .node {
        padding: 8px;
        cursor: pointer;
        color: #fff;
        &:hover {
          background-color: #007680;
        }
      }
    }
  }
}
</style>
