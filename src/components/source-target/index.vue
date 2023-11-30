<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 17:04:16
 * @LastEditTime: 2023-05-29 18:09:11
-->
<template>
  <div class="outerContainer" :style="{ width: size.width + 'px', height: size.height + 'px' }">
    <div
      id="container"
      :style="{
        height: containerSize.height + 'px',
        width: containerSize.width + 'px'
      }"
    ></div>
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import { Cell, EdgeView, Graph, Path, Vector, Node, Edge } from '@antv/x6'
import type { I_Center_Host, I_Source_Country, I_Target_Country, T_Dirction } from './type'
import { onMounted, ref, onUnmounted, reactive, watchEffect } from 'vue'
import { useTeleport } from '@antv/x6-vue-shape'
import sourceNode from './cmts/sourceNode'
import targetNode from './cmts/targetNode'
import centerNode from './cmts/centerNode'
import sourceIps from './cmts/sourceIps'
import sourceIpNodes from './cmts/sourceIpNodes'
import virusImg from './imgs/svg'
import { isNumber } from '../count-to'
const props = defineProps<{
  dirction: T_Dirction
  size: {
    width: number
    height: number
  }
  sourceAttack: I_Source_Country[]
  centerNode: I_Center_Host
  targetAttack: I_Target_Country[]
}>()
const containerSize = reactive({
  width: 0,
  height: 0
})
const ipsNodeInstance = ref<Node>()
const ipEdgeInstance = ref<Edge>()
const sourceNodes = ref<Node[]>([])
const UNIQ_GRAPH_ID = 'UNIQ_GRAPH_ID'
const TeleportContainer = useTeleport(UNIQ_GRAPH_ID)
watchEffect(() => {
  const sourceLength = props.sourceAttack.length
  const targetLength = props.targetAttack.length
  const sourceHeight = sourceLength * 88 + (sourceLength - 1) * 48 + 400
  const targetHeight = targetLength * 94 + (targetLength - 1) * 40 + 400
  containerSize.height =
    sourceHeight > targetHeight
      ? props.size.height > sourceHeight
        ? props.size.height
        : sourceHeight
      : props.size.height > targetHeight
      ? props.size.height
      : targetHeight
  containerSize.width =
    props.size.width > 320 + 280 + 80 + 88 + 240 + 180 + 200 + 156 + 400
      ? props.size.width
      : 320 + 280 + 80 + 88 + 240 + 180 + 200 + 156 + 400
})
Graph.registerNode('sourceNode', {
  inherit: 'vue-shape',
  component: sourceNode
})
Graph.registerNode('targetNode', {
  inherit: 'vue-shape',
  component: targetNode
})
Graph.registerNode('centerNode', {
  inherit: 'vue-shape',
  component: centerNode
})
Graph.registerNode('sourceIps', {
  inherit: 'vue-shape',
  component: sourceIps
})
Graph.registerNode('sourceIpNodes', {
  inherit: 'vue-shape',
  component: sourceIpNodes
})
//打开攻击源的子节点
const openSourceChildren = (id: string, y: number, sourceIpsDataLength: number) => {
  props.sourceAttack.forEach((ele) => {
    const currentCell = graphInstance.value?.getCellById('source_' + ele.countryCode)
    const actived = (currentCell as any).store.data.data.actived
    if (id === 'source_' + ele.countryCode) {
      currentCell?.setData({
        actived: actived === undefined ? true : !actived
      })
    } else {
      currentCell?.setData({
        actived: false
      })
    }
  })
  const currentCell = graphInstance.value?.getCellById(id)
  const actived = (currentCell as any).store.data.data.actived
  if (ipsNodeInstance.value) {
    graphInstance.value!.removeCell(ipsNodeInstance.value)
  }
  if (ipEdgeInstance.value) {
    graphInstance.value!.removeEdge(ipEdgeInstance.value)
  }
  if (!actived) {
    return false
  }
  const ipComponentHeight = sourceIpsDataLength * 32 + (sourceIpsDataLength - 1) * 8 + 10 + 10 + 40
  const computedHeight =
    ipComponentHeight > containerSize.height - 200 ? containerSize.height - 200 : ipComponentHeight
  let offsetY = 0
  let ipComponentY = 0
  if (y - 65 + computedHeight > containerSize.height - 100) {
    ipComponentY = containerSize.height - 100 - computedHeight
    offsetY = computedHeight - (containerSize.height - 100 - y - 44)
  } else {
    ipComponentY = y - 65
    offsetY = 108
  }
  ipsNodeInstance.value = graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'sourceIps',
    id: 'ips_source',
    x: props.dirction === 'lr' ? 200 : containerSize.width - 200 - 280 - 320,
    y: ipComponentY,
    data: Object.assign(
      {},
      {
        sourceId: id,
        sourceIpsDataLength,
        height: computedHeight < 200 ? 200 : computedHeight,
        offsetY,
        dirction: props.dirction
      }
    ),
    width: 600,
    height: computedHeight < 200 ? 200 : computedHeight
  })
  ipEdgeInstance.value = graphInstance.value!.addEdge({
    source: {
      cell: 'ips_source',
      anchor: {
        name: props.dirction === 'lr' ? 'topRight' : 'topLeft',
        args: {
          dy: offsetY
        }
      },
      connectionPoint: 'anchor'
    },
    target: {
      cell: id,
      anchor: {
        name: props.dirction === 'lr' ? 'left' : 'right'
      },
      connectionPoint: 'anchor'
    },
    attrs: {
      fill: {
        connection: true,
        strokeWidth: 1,
        fill: 'none',
        stroke: '#F82C30'
      }
    },
    markup: [
      {
        tagName: 'path',
        selector: 'fill'
      }
    ]
  })
}

// //添加子节点
// const addSourceChilds = ( sourceIpsData: I_Source_Ip[],x:number,y:number)=>{

// }
// const sourceCells = ref<any[]>([])
//实例
const graphInstance = ref<Graph>()
Graph.registerConnector(
  'algo-connector',
  (s, e) => {
    const offset = 12
    const deltaX = Math.abs(e.x - s.x)
    const control = Math.floor((deltaX / 4) * 2)
    const v1 = {
      x: props.dirction === 'lr' ? s.x + offset + control : s.x - offset - control,
      y: s.y
    }
    const v2 = {
      x: props.dirction === 'lr' ? e.x - offset - control : e.x + offset + control,
      y: e.y
    }
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
//renderData
const renderData = () => {
  //先清空节点
  graphInstance.value!.clearCells()

  //center

  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'centerNode',
    id: 'center_' + props.centerNode.ip,
    x: props.dirction === 'lr' ? 200 + 320 + 280 + 80 + 88 + 185 : 200 + 156 + 130,
    y: containerSize.height / 2 - 150,
    data: Object.assign({}, props.centerNode, { dirction: props.dirction }),
    width: 300,
    height: 300
  })
  //计算留白的长度
  let sourceTopBottonHeight = 0
  let targetTopBottomHeight = 0
  sourceTopBottonHeight =
    (containerSize.height -
      (props.sourceAttack.length * 88 + (props.sourceAttack.length - 1) * 48)) /
    2
  targetTopBottomHeight =
    (containerSize.height -
      (props.targetAttack.length * 94 + (props.targetAttack.length - 1) * 40)) /
    2
  //source
  props.sourceAttack.forEach((ele, index) => {
    sourceNodes.value.push(
      graphInstance.value!.addNode({
        view: UNIQ_GRAPH_ID,
        shape: 'sourceNode',
        id: 'source_' + ele.countryCode,
        x:
          props.dirction === 'lr'
            ? 200 + 320 + 280 + 80
            : containerSize.width - 200 - 320 - 280 - 80 - 88,
        y: sourceTopBottonHeight + index * (88 + 48),
        data: Object.assign(
          {},
          ele,
          { openSourceChildren },
          { y: sourceTopBottonHeight + index * (88 + 48) }
        ),
        width: 88,
        height: 88
      })
    )

    graphInstance.value!.addEdge({
      source: {
        cell: 'source_' + ele.countryCode,
        anchor: {
          name: props.dirction === 'lr' ? 'right' : 'left'
        },
        connectionPoint: 'anchor'
      },
      target: {
        cell: 'center_' + props.centerNode.ip,
        anchor: {
          name: props.dirction === 'lr' ? 'left' : 'right',
          args: {
            dx: props.dirction === 'lr' ? 45 : -45
          }
        },
        connectionPoint: 'anchor'
      },
      attrs: {
        fill: {
          connection: true,
          strokeWidth: 1,
          fill: 'none',
          stroke: '#F82C30'
        }
      },
      markup: [
        {
          tagName: 'path',
          selector: 'fill'
        }
      ]
    })
  })

  //target
  props.targetAttack.forEach((ele, index) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'targetNode',
      id: 'target_' + ele.countryCode,
      x: props.dirction === 'lr' ? containerSize.width - 200 - 156 : 200,
      y: targetTopBottomHeight + index * (94 + 40),
      data: ele,
      width: 156,
      height: 94
    })

    graphInstance.value!.addEdge({
      source: {
        cell: 'center_' + props.centerNode.ip,
        anchor: {
          name: props.dirction === 'lr' ? 'right' : 'left',
          args: {
            dx: props.dirction === 'lr' ? -45 : 45
          }
        },
        connectionPoint: 'anchor'
      },
      target: {
        cell: 'target_' + ele.countryCode,
        anchor: {
          name: props.dirction === 'lr' ? 'left' : 'right'
        },
        connectionPoint: 'anchor'
      },
      attrs: {
        fill: {
          connection: true,
          strokeWidth: 1,
          fill: 'none',
          stroke: '#F82C30'
        }
      },
      markup: [
        {
          tagName: 'path',
          selector: 'fill'
        }
      ]
    })
  })
}
onMounted(() => {
  //第一次计算宽度
  graphInstance.value = new Graph({
    container: document.getElementById('container')!,
    // autoResize: true,
    resizing: false,
    // panning: true,
    interacting: {
      nodeMovable: false
    },

    connecting: {
      connector: 'algo-connector',
      connectionPoint: 'anchor'
    }
  })
  renderData()
  graphInstance.value.on('signal', (info: { cell: Cell; counts: number }) => {
    const cell = info.cell
    const counts = info.counts
    if (cell.isEdge()) {
      const view = graphInstance.value!.findViewByCell(cell) as EdgeView
      if (view) {
        let token = undefined
        if (isNumber(counts)) {
          token = Vector.create(
            '<g>' +
              virusImg +
              '<text x="30" y="18" fill="#F82C30">' +
              counts +
              '</text><rect rx="8" ry="8" width="64" height="24" fill="rgba(255, 91, 91, 0.2)"></rect></g>'
          )
        } else {
          // token = Vector.create('circle', {
          //   r: 3,
          //   fill: '#F82C30'
          // })
          token = Vector.create(
            '<g><rect rx="8" ry="8" width="64" height="24" fill="rgba(255, 91, 91, 0.05)"></rect>' +
              virusImg +
              '<text x="30" y="18" fill="#F82C30">' +
              counts +
              '</text></g>'
          )
        }
        const target = cell.getTargetCell()
        view.sendToken(token.node, 4000, () => {
          if (target) {
            graphInstance.value!.trigger('signal', { cell: target, counts: undefined })
          }
        })
      }
    } else {
      const edges = graphInstance.value!.model.getConnectedEdges(cell, {
        outgoing: true
      })
      edges.forEach((edge) => {
        const target = edge.getTargetCell()
        const code = (target as any).store.data.data.countryCode
        graphInstance.value!.trigger('signal', { cell: edge, counts: code ?? counts })
      })
    }
  })
})
const trigger = () => {
  sourceNodes.value.forEach((ele) => {
    const counts = (ele as any).store.data.data.count
    graphInstance.value?.trigger('signal', { cell: ele, counts })
  })
}
let timer: any = 0
timer = setInterval(() => {
  trigger()
}, 4000)
onUnmounted(() => {
  Graph.unregisterNode('sourceNode')
  Graph.unregisterNode('targetNode')
  Graph.unregisterNode('centerNode')
  Graph.unregisterNode('sourceIps')
  Graph.unregisterNode('sourceIpNodes')
  clearInterval(timer)
})
</script>

<style scoped lang="less">
.outerContainer {
  overflow: auto;
}
</style>
