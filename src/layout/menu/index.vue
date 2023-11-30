<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-04 11:15:10
 * @LastEditTime: 2023-05-10 17:25:07
-->
<template>
  <Menu v-model:selectedKeys="selectedKeys" @click="clickMenuItem" mode="inline" class="leftmenu">
    <template v-for="item in allComponents" :key="item.name">
      <MenuItem>
        {{ item.meta?.title }}
      </MenuItem>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuItem } from 'ant-design-vue'
import { ref, watch } from 'vue'
import allComponents from '@/router/cmts'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = useRoute()

const selectedKeys = ref<string[]>([currentRoute.name as string])
const clickMenuItem = ({ key }: any) => {
  router.push({ name: key })
}
watch(
  () => currentRoute.fullPath,
  () => {
    selectedKeys.value = [currentRoute.name as string]
  }
)
</script>

<style scoped lang="less">
.ant-menu-inline {
  border: none;
}
.leftmenu {
  background-color: #001529;

  :deep(.ant-menu-item-selected) {
    color: #422ccc !important;
  }
  :deep(.ant-menu-item) {
    color: #fff;
    margin: 20px 0;
  }
}
</style>
