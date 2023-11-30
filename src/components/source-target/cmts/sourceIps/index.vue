<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-18 14:18:42
 * @LastEditTime: 2023-05-26 11:47:17
-->
<template>
  <div class="sourceIps" :style="{ height: nodeState.height + 'px' }">
    <img :src="virusImg" class="virusImg" :style="virusImgStyle" />
    <div class="search"></div>
    <div class="background" :style="{ [nodeState.dirction === 'lr' ? 'right' : 'left']: 0 }">
      <div class="search">
        <img class="searchImg" :src="searchImg" />
        <input class="ipt" type="text" v-model="searchText" @keyup.enter="renderData" />
        <img class="filter" :src="filterImg" />
      </div>
    </div>
    <div
      class="scrollContainer"
      ref="scrollContainer"
      :style="{ height: nodeState.height - 40 + 'px' }"
    >
      <div
        class="nodesContainer"
        id="nodesContainer"
        :style="{
          height: containerHeight + 'px'
        }"
      ></div>
      <TeleportContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive, computed, ref, onMounted } from 'vue'
import type { I_Source_Ip } from '../../type'
import searchImg from './imgs/search.svg'
import filterImg from './imgs/filter.svg'
import virusImg from './imgs/Virus.svg'
import { useTeleport } from '@antv/x6-vue-shape'
import { Cell, EdgeView, Graph, Path, Vector, Node } from '@antv/x6'
import { watchEffect } from 'vue'
import { watch } from 'vue'
import type { I_SourceIP_Props } from './type'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = reactive<I_SourceIP_Props>(GraphNode.data)
const searchText = ref('')
const scrollContainer = ref<HTMLElement>()
const scrollInstacne = ref(0)
const sourceIps = ref<I_Source_Ip[]>([])

const handleScroll = (event: any) => {
  scrollInstacne.value = event.target.scrollTop
}

const virusImgStyle = ref<any>({})
watchEffect(() => {
  virusImgStyle.value = {
    top: nodeState.offsetY - 14 + 'px',
    [nodeState.dirction === 'lr' ? 'right' : 'left']: '-14px'
  }
})
GraphNode?.on('change:data', ({ current }: { current: I_SourceIP_Props }) => {
  Object.assign(nodeState, current)
  renderData()
})
const containerHeight = computed(() => {
  const cmpHeight = sourceIps.value.length * 32 + (sourceIps.value.length - 1) * 8 + 20
  return cmpHeight < 200 ? 200 : cmpHeight
})

const UNIQ_GRAPH_ID = 'UNIQ_GRAPH_ID_node'
const TeleportContainer = useTeleport(UNIQ_GRAPH_ID)

const graphInstance = ref<Graph>()
const dymicNode = ref<Node>()
const sourceNodeArr = ref<Node[]>([])
Graph.registerConnector(
  'algo-connector',
  (s, e) => {
    const offset = 12
    const deltaX = Math.abs(e.x - s.x)
    const control = Math.floor((deltaX / 4) * 2)
    const v1 = {
      x: nodeState.dirction === 'lr' ? s.x + offset + control : s.x - offset - control,
      y: s.y
    }
    const v2 = {
      x: nodeState.dirction === 'lr' ? e.x - offset - control : e.x + offset + control,
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
//mock data
const renderData = () => {
  graphInstance.value!.clearCells()
  sourceIps.value = []
  //mock data
  setTimeout(() => {
    for (let i = 0; i < nodeState.sourceIpsDataLength; i++) {
      sourceIps.value.push({
        ip:
          (searchText.value ? searchText.value : Math.floor(Math.random() * 255)) +
          '.1.2.' +
          Math.floor(Math.random() * 255),
        external: Math.floor(Math.random() * 255) + '.1.2.' + Math.floor(Math.random() * 255),
        reputation: 'reputation String'
      })
    }
    dymicNode.value = graphInstance.value!.addNode({
      shape: 'rect',
      id: 'dymicNode',
      x: nodeState.dirction === 'lr' ? 600 : 0,
      y: nodeState.offsetY - 40 + scrollInstacne.value,
      width: 0,
      height: 0
    })
    sourceIps.value.forEach((ele, index) => {
      sourceNodeArr.value.push(
        graphInstance.value!.addNode({
          view: UNIQ_GRAPH_ID,
          shape: 'sourceIpNodes',
          id: index + 'ip_' + ele.ip,
          x: nodeState.dirction === 'lr' ? 10 + 320 : 600 - 320 - 180 - 10,
          y: 10 + index * (32 + 8),
          data: Object.assign({}, ele, {
            index,
            length: sourceIps.value.length,
            dirction: nodeState.dirction
          }),
          width: 180,
          height: 32
        })
      )

      graphInstance.value!.addEdge({
        source: {
          cell: index + 'ip_' + ele.ip,
          anchor: {
            name: nodeState.dirction === 'lr' ? 'right' : 'left'
          },
          connectionPoint: 'anchor'
        },
        target: {
          cell: 'dymicNode'
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
  }, 200)
}
// updateCellId
watch(scrollInstacne, () => {
  dymicNode.value?.position(
    nodeState.dirction === 'lr' ? 600 : 0,
    nodeState.offsetY - 40 + scrollInstacne.value
  )
})
onMounted(() => {
  //第一次计算宽度
  graphInstance.value = new Graph({
    container: document.getElementById('nodesContainer')!,
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
  graphInstance.value.on('signal', (cell: Cell) => {
    if (cell.isEdge()) {
      const view = graphInstance.value!.findViewByCell(cell) as EdgeView
      if (view) {
        const token = Vector.create('circle', { r: 3, fill: '#f82c30' })
        const target = cell.getTargetCell()
        view.sendToken(token.node, 2000, () => {
          if (target) {
            graphInstance.value!.trigger('signal', target)
          }
        })
      }
    } else {
      const edges = graphInstance.value!.model.getConnectedEdges(cell, {
        outgoing: true
      })
      edges.forEach((edge) => graphInstance.value!.trigger('signal', edge))
    }
  })
  const trigger = () => {
    sourceNodeArr.value.forEach((ele) => {
      graphInstance.value?.trigger('signal', ele)
    })
    setTimeout(trigger, 2000)
  }
  trigger()

  scrollContainer.value!.addEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="less">
.sourceIps {
  width: 600px;

  box-sizing: border-box;
  // border: 1px solid #66282a;
  border-radius: 8px;
  position: relative;
  .search {
    height: 40px;
  }
  .background {
    background: #321414;
    width: 280px;
    border: 1px solid #66282a;
    height: 100%;
    position: absolute;
    top: 0px;
    .search {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      border-radius: 8px 8px 0 0;
      background-color: #000;
      .ipt {
        flex: 1;
        border: none;
        padding: 0;
        outline: none;
        background-color: unset;
        color: #fff;
      }
      .searchImg,
      .filter {
        width: 24px;
        height: 24px;
        padding: 5px;
        box-sizing: content-box;
      }
    }
  }
  .virusImg {
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #66282a;
    border-radius: 50%;
    padding: 5px;
    box-sizing: content-box;
    z-index: 1;
  }

  .scrollContainer {
    width: 600px;
    overflow: auto;
    .nodesContainer {
      width: 600px;
    }
  }
}
</style>
