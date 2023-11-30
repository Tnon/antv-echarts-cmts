<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 20:47:42
 * @LastEditTime: 2023-06-07 11:14:05
-->
<template>
  <div
    class="all"
    :style="{ width: containerSize.width + 'px', height: containerSize.height + 'px' }"
  >
    <div
      id="container"
      :style="{ width: containerSize.width - 300 + 'px', height: containerSize.height + 'px' }"
    ></div>
    <TeleportContainer />
    <total-static :total="123" label="TOTAL SCORE" />
  </div>
</template>

<script setup lang="ts">
import { Cell, EdgeView, Graph, Path, Vector } from '@antv/x6'
import { useTeleport } from '@antv/x6-vue-shape'
import gaugePie from './cmts/gauge/index.vue'
import rightNode from './cmts/node/index.vue'
import totalStatic from './cmts/static/index.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { E_DangerLevel, type I_NodeData, type I_Range } from '@/views/eight/type'
const props = defineProps<{
  gaugeScore: number
  gaugeDataRange: I_Range<unknown>[]
  gaugeThemeColor: string
  gaugeSize: { width: number; height: number }
  containerSize: { width: number; height: number }
  nodeListData: I_NodeData[]
}>()
const UNIQ_GRAPH_ID = 'UNIQ_GRAPH_ID'
const TeleportContainer = useTeleport(UNIQ_GRAPH_ID)
Graph.registerNode('gaugePie', {
  inherit: 'vue-shape',
  component: gaugePie
})
Graph.registerNode('rightNode', {
  inherit: 'vue-shape',
  component: rightNode
})

//实例
const graphInstance = ref<Graph>()
const edgesInstance = ref<any>([])
Graph.registerConnector(
  'algo-connector',
  (s, e) => {
    const offset = 12
    const deltaX = Math.abs(e.x - s.x)
    const control = Math.floor((deltaX / 4) * 2)
    const v1 = { x: s.x + offset + control, y: s.y }
    const v2 = { x: e.x - offset - control, y: e.y }
    return Path.normalize(
      `M ${s.x} ${s.y}
         L ${s.x} ${s.y}
         C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y}
         L ${e.x} ${e.y}
        `
    )
  },
  true
)
const renderData = () => {
  //先清空节点
  graphInstance.value!.clearCells()

  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'gaugePie',
    id: 'gaugePie',
    data: Object.assign(
      {},
      {
        size: props.gaugeSize,
        gaugeScore: props.gaugeScore,
        gaugeThemeColor: props.gaugeThemeColor,
        gaugeDataRange: props.gaugeDataRange
      }
    ),
    x: 0,
    y: props.containerSize.height - props.gaugeSize.height - 100,
    width: props.gaugeSize.width,
    height: props.gaugeSize.height
  })
  layout()
}
const layout = () => {
  edgesInstance.value = []
  props.nodeListData.forEach((ele, index) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'rightNode',
      id: ele.id,
      x: props.containerSize.width - 600,
      // y: (index * props.containerSize.height) / props.nodeListData.length,
      y: (props.containerSize.height / (props.nodeListData.length + 1)) * (index + 1),
      data: ele,
      width: 200,
      height: 40
    })
    edgesInstance.value.push(
      graphInstance.value!.addEdge({
        source: {
          cell: 'gaugePie',
          anchor: {
            name: 'right',
            args: {
              dy: (-props.nodeListData.length / 2) * 10 + 10 * index
            }
          },
          connectionPoint: 'anchor'
        },
        target: {
          cell: ele.id,
          anchor: {
            name: 'left'
          },
          connectionPoint: 'anchor'
        },
        attrs: {
          fill: {
            connection: true,
            strokeWidth: 2,
            fill: 'none',
            stroke: {
              type: 'linearGradient',
              stops: [
                { offset: '50%', color: '#717479' },
                {
                  offset: '100%',
                  color: ele.level === E_DangerLevel.Danger ? '#dc4444' : '#d0ffdf'
                }
              ]
            }
          }
        },
        markup: [
          {
            tagName: 'path',
            selector: 'fill'
          }
        ]
      })
    )
  })
}
let timer: any = 0
const sendToken = () => {
  timer = setInterval(() => {
    edgesInstance.value.forEach((animateEdge: any) => {
      const view = graphInstance.value!.findViewByCell(animateEdge) as EdgeView
      const token = Vector.create('circle', { r: 3, fill: '#feb662' })
      view.sendToken(token.node, 4000)
    })
  }, 4000)
}

onMounted(() => {
  //第一次计算宽度
  graphInstance.value = new Graph({
    container: document.getElementById('container')!,
    autoResize: true,
    interacting: {
      nodeMovable: false
    },
    connecting: {
      connector: 'algo-connector',
      connectionPoint: 'anchor'
    }
  })
  renderData()
  sendToken()
})

watch([() => props.gaugeScore, () => props.gaugeDataRange], () => {
  const currentCell = graphInstance.value?.getCellById('gaugePie')
  currentCell?.setData({
    gaugeScore: props.gaugeScore,
    gaugeDataRange: props.gaugeDataRange
  })
})
watch(
  () => props.nodeListData,
  (n, o) => {
    if (n.length) {
      o.forEach((ele) => {
        graphInstance.value?.removeCell(ele.id)
        layout()
      })
    }
  }
)
onUnmounted(() => {
  Graph.unregisterConnector('algo-connector')
  Graph.unregisterNode('gaugePie')
  Graph.unregisterNode('rightNode')
  clearInterval(timer)
})
</script>

<style>
.all {
  background-color: #000;
  align-items: center;
  color: #fff;
  display: inline-flex;
}
.patha {
  stroke-dasharray: 50 3;
  animation: dash 1s linear infinite;
}
@keyframes dash {
  0% {
    stroke-dashoffset: 100;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>
