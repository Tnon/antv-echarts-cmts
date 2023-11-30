<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 11:40:01
 * @LastEditTime: 2023-05-26 15:04:32
-->
<template>
  <div class="staContainer" :class="{ hide: !showLine }">
    <!-- select start -->
    <select-range v-model:dataRange="dataRangeCmp" />
    <!-- select end -->

    <div class="scrollContainer">
      <!-- top5 -->
      <template v-for="dataSource in dataTop5Arr" :key="dataSource.title">
        <top-five :dataSource="dataSource" />
        <div class="line"></div>
      </template>
      <!-- top5 -->

      <!-- top5 -->
      <template v-for="(dataSource, index) in dataRatio" :key="dataSource.title">
        <top-ratio :dataSource="dataSource" />
        <div class="line" v-if="index !== dataRatio.length - 1"></div>
      </template>
      <!-- top5 -->
    </div>
    <div class="toogleShow" @click="showLine = !showLine">
      <span class="icon" v-if="showLine">X</span>
      <span>{{ showLine ? 'COLLAPSE' : 'OPEN' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import selectRange from './selectRange.vue'
import topFive from './topFive.vue'
import topRatio from './topRation.vue'
import { computed, ref } from 'vue'
import type { I_Top_Five, I_Top_Ratio } from './type'
const props = defineProps<{
  dataRange: string
}>()
const emit = defineEmits(['update:dataRange'])
const showLine = ref(true)
const dataRangeCmp = computed({
  get: () => props.dataRange,
  set: (v) => emit('update:dataRange', v)
})

//top5 Array
const dataTop5Arr = ref<I_Top_Five[]>([
  {
    title: 'TOP ATTACKERS',
    data: [
      {
        name: 'United States',
        percent: '56%',
        code: 'US'
      },
      {
        name: 'United Kingdom',
        percent: '50%',
        code: 'GB'
      },
      {
        name: 'Russia',
        percent: '40%',
        code: 'RU'
      },
      {
        name: 'China',
        percent: '36%',
        code: 'CN'
      },
      {
        name: 'Netherlands',
        percent: '26%',
        code: 'NL'
      }
    ]
  },
  {
    title: 'TOP ATTACKED',
    data: [
      {
        name: 'United Kingdom',
        percent: '80%',
        code: 'GB'
      },
      {
        name: 'Russia',
        percent: '60%',
        code: 'RU'
      },
      {
        name: 'Netherlands',
        percent: '56%',
        code: 'NL'
      },
      {
        name: 'Netherlands',
        percent: '36%',
        code: 'NL'
      },
      {
        name: 'China',
        percent: '16%',
        code: 'CN'
      }
    ]
  },
  {
    title: 'TOP NETWORK ATTACK VECTORS',
    themeColor: 'rgb(255, 222, 130)',
    data: [
      {
        name: 'United Kingdom',
        percent: '80%',
        code: 'GB'
      },
      {
        name: 'Russia',
        percent: '60%',
        code: 'RU'
      },
      {
        name: 'Netherlands',
        percent: '56%',
        code: 'NL'
      },
      {
        name: 'Netherlands',
        percent: '36%',
        code: 'NL'
      },
      {
        name: 'China',
        percent: '16%',
        code: 'CN'
      }
    ]
  },
  {
    title: 'TOP APPLICATION VIOLATIONS',
    themeColor: 'rgb(214, 90, 107)',
    data: [
      {
        name: 'Cookie',
        percent: '80%'
      },
      {
        name: 'Access',
        percent: '56%'
      },

      {
        name: 'Injections',
        percent: '40%'
      },
      {
        name: 'Data theft',
        percent: '36%'
      },
      {
        name: 'Cross-site scripting',
        percent: '26%'
      }
    ]
  }
])

//top5 Ratio
const dataRatio = ref<I_Top_Ratio[]>([
  {
    title: 'TOP SCANNED UDP PORTS',
    themeColor: 'rgb(121, 126, 252)',
    data: [
      {
        label: '5060',
        counts: 1000
      },
      {
        label: '12234',
        counts: 900
      },
      {
        label: '3234',
        counts: 800
      },
      {
        label: '23341',
        counts: 700
      },
      {
        label: '50610',
        counts: 600
      },
      {
        label: '2360',
        counts: 500
      },
      {
        label: '1260',
        counts: 100
      }
    ]
  },
  {
    title: 'TOP SCANNED TCP PORTS',
    themeColor: 'rgb(121, 126, 252)',
    data: [
      {
        label: '5060',
        counts: 1000
      },
      {
        label: '12234',
        counts: 900
      },
      {
        label: '3234',
        counts: 800
      },
      {
        label: '23341',
        counts: 700
      },
      {
        label: '50610',
        counts: 600
      },
      {
        label: '2360',
        counts: 500
      },
      {
        label: '1260',
        counts: 100
      }
    ]
  }
])
</script>

<style scoped lang="less">
.staContainer {
  position: absolute;
  transition: all 0.3s;
  width: 400px;
  right: 0;
  top: 0;
  height: 100vh;
  border-left: 1px solid #007680;

  .scrollContainer {
    height: calc(100vh - 100px);
    overflow: auto;
  }
  .toogleShow {
    padding: 16px 8px;
    border: 1px solid #007680;
    border-radius: 8px 0 0 8px;
    border-right: none;
    position: absolute;
    top: 20px;
    left: -40px;
    font-size: 14px;
    color: #007680;
    display: flex;
    align-items: center;
    // transform: rotate(270deg);
    writing-mode: vertical-lr;
    .icon {
      margin-bottom: 10px;
    }
    cursor: pointer;
  }
}
.hide {
  right: -400px;
}
.line {
  height: 1px;
  width: 100%;
  background-image: linear-gradient(to right, #1e6c76, rgba(30, 108, 118, 0));
}
</style>
