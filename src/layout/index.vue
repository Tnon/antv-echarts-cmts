<template>
  <Layout class="layout">
    <LayoutSider class="layout-sider80" :trigger="null">
      <aside-menu />
    </LayoutSider>
    <LayoutContent class="layout-content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </LayoutContent>
  </Layout>
</template>

<script lang="ts" setup>
import AsideMenu from './menu/index.vue'
import { Layout, LayoutSider, LayoutContent } from 'ant-design-vue'
</script>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
}
</style>
