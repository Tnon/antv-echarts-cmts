<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 14:42:04
 * @LastEditTime: 2023-06-02 13:17:02
-->
<template>
  <div>
    <div
      class="x6Container"
      id="x6Container"
      ref="renderRef"
      :style="{ width: size.width + 'px', height: size.height + 'px' }"
    ></div>
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import { Cell, EdgeView, Graph, Path, Vector } from '@antv/x6'
import { onMounted, ref } from 'vue'
import type { I_Data_Source } from './type'
import sourceText from './cmts/sourceText'
import sourceNode from './cmts/sourceNode'
import dataLoaders from './cmts/dataLoaders'
import { useTeleport } from '@antv/x6-vue-shape'
import centerNode from './cmts/centerNode'
import dataSharing from './cmts/dataSharing'
import dataVis from './cmts/dataVis'
import mlDev from './cmts/mlDev'
import addOns from './cmts/addOns'
import chuiGif from './imgs/chui.gif'
import lingSvg from './imgs/ling.svg'
import digSvg from './imgs/dig.svg'
import { onUnmounted } from 'vue'
const props = defineProps<{
  size: { width: number; height: number }
  dataSource: I_Data_Source[]
  dataLoader: I_Data_Source
  rawData: I_Data_Source
  trustedData: I_Data_Source
  serviceData: I_Data_Source
  cataLog: I_Data_Source
  disCovery: I_Data_Source
  lineAge: I_Data_Source
  dataLake: I_Data_Source
  dataShare: I_Data_Source
  dataVisualization: I_Data_Source
  mlDevelopment: I_Data_Source
  addOn: { [k: string]: I_Data_Source }
}>()

const UNIQ_GRAPH_ID = 'UNIQ_GRAPH_ID'
const TeleportContainer = useTeleport(UNIQ_GRAPH_ID)
const graphInstance = ref<Graph>()
const sourceCellEdgess = ref<Cell[]>([])
const animateEdge = ref<Cell>()
const dataLoaderCenterEdge = ref<Cell>()
const centerNodeDs = ref<Cell>()
const centerNodeDv = ref<Cell>()
const centerNodeMl = ref<Cell>()
let timer1: any = 0
let timer2: any = 0
Graph.registerConnector(
  'algo-connector',
  (s, e) => {
    const offset = 12
    const deltaX = Math.abs(e.x - s.x)
    const control = Math.floor((deltaX / 4) * 2)
    const v1 = {
      x: s.x + offset + control,
      y: s.y
    }
    const v2 = {
      x: e.x - offset - control,
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
Graph.registerNode('sourceText', {
  inherit: 'vue-shape',
  component: sourceText
})
Graph.registerNode('dataSource', {
  inherit: 'vue-shape',
  component: sourceNode
})
Graph.registerNode('dataLoaders', {
  inherit: 'vue-shape',
  component: dataLoaders
})
Graph.registerNode('centerNodes', {
  inherit: 'vue-shape',
  component: centerNode
})
Graph.registerNode('dataSharing', {
  inherit: 'vue-shape',
  component: dataSharing
})
Graph.registerNode('dataVis', {
  inherit: 'vue-shape',
  component: dataVis
})
Graph.registerNode('mlDev', {
  inherit: 'vue-shape',
  component: mlDev
})
Graph.registerNode('addOns', {
  inherit: 'vue-shape',
  component: addOns
})

const renderData = () => {
  //先清空节点
  graphInstance.value!.clearCells()
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'sourceText',
    id: 'sourceText',
    x: 0,
    y: (props.size.height - 700) / 2,
    width: 150,
    height: 40
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'centerNodes',
    id: 'centerNode',
    x: 320,
    y: (props.size.height - 300) / 2 + 100,
    data: Object.assign(
      {},
      {
        rawData: props.rawData,
        trustedData: props.trustedData,
        serviceData: props.serviceData,
        cataLog: props.cataLog,
        disCovery: props.disCovery,
        lineAge: props.lineAge,
        dataLake: props.dataLake
      }
    ),
    width: 480,
    height: 300
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'dataSharing',
    id: 'dataSharing',
    x: 780,
    y: 0,
    data: props.dataShare,
    width: 170,
    height: 230
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'dataLoaders',
    id: 'dataLoaders',
    x: 250,
    y: (props.size.height - 150) / 2,
    data: props.dataLoader,
    width: 150,
    height: 150
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'dataVis',
    id: 'dataVis',
    x: 820,
    y: 300,
    data: props.dataVisualization,
    width: 120,
    height: 120
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'mlDev',
    id: 'mlDev',
    x: 820,
    y: 600,
    data: props.mlDevelopment,
    width: 120,
    height: 120
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'addOns',
    id: 'addOns',
    x: 940,
    y: 300,
    data: props.addOn,
    width: 370,
    height: 165
  })
  animateEdge.value = graphInstance.value!.addEdge({
    source: { x: 450, y: 420 },
    target: { x: 760, y: 420 },
    connector: { name: 'rounded' },
    vertices: [
      { x: 450, y: 340 },
      { x: 760, y: 340 }
    ],
    attrs: {
      line: {
        stroke: 'none',
        targetMarker: 'classic'
      }
    }
  })
  props.dataSource.forEach((ele, index) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'dataSource',
      id: 'sourceNode' + ele.label,
      x: 0,
      y: 110 * index + 40 + (props.size.height - 700) / 2,
      data: ele,
      width: 150,
      height: 100
    })

    sourceCellEdgess.value.push(
      graphInstance.value!.addEdge({
        source: {
          cell: 'sourceNode' + ele.label,
          anchor: {
            name: 'right',
            args: {
              dx: -30,
              dy: -8
            }
          },
          connectionPoint: 'anchor'
        },
        target: {
          cell: 'dataLoaders',
          anchor: {
            name: 'left',
            args: {
              dx: 8,
              dy: 18
            }
          },
          connectionPoint: 'anchor'
        },
        attrs: {
          fill: {
            connection: true,
            strokeWidth: 1,
            fill: 'none',
            stroke: '#aaa'
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
  dataLoaderCenterEdge.value = graphInstance.value!.addEdge({
    source: {
      cell: 'dataLoaders',
      anchor: {
        name: 'right',
        args: {
          dx: -10,
          dy: 20
        }
      },
      connectionPoint: 'anchor'
    },
    target: {
      cell: 'centerNode',
      anchor: {
        name: 'left',
        args: {
          dx: 130,
          dy: -80
        }
      },
      connectionPoint: 'anchor'
    },
    attrs: {
      fill: {
        connection: true,
        strokeWidth: 1,
        fill: 'none',
        stroke: '#aaa'
      }
    },
    markup: [
      {
        tagName: 'path',
        selector: 'fill'
      }
    ]
  })
  centerNodeDs.value = graphInstance.value!.addEdge({
    source: {
      cell: 'centerNode',
      anchor: {
        name: 'right',
        args: {
          dx: -38,
          dy: -78
        }
      },
      connectionPoint: 'anchor'
    },
    target: {
      cell: 'dataSharing',
      anchor: {
        name: 'bottom',
        args: {
          dx: -50,
          dy: 0
        }
      },
      connectionPoint: 'anchor'
    },
    attrs: {
      fill: {
        connection: true,
        strokeWidth: 1,
        fill: 'none',
        stroke: '#aaa'
      }
    },
    markup: [
      {
        tagName: 'path',
        selector: 'fill'
      }
    ]
  })
  centerNodeDv.value = graphInstance.value!.addEdge({
    source: {
      cell: 'centerNode',
      anchor: {
        name: 'right',
        args: {
          dx: -38,
          dy: -78
        }
      },
      connectionPoint: 'anchor'
    },
    target: {
      cell: 'dataVis',
      anchor: {
        name: 'bottom',
        args: {
          dx: 40
        }
      },
      connectionPoint: 'anchor'
    },
    attrs: {
      fill: {
        connection: true,
        strokeWidth: 1,
        fill: 'none',
        stroke: '#aaa'
      }
    },
    markup: [
      {
        tagName: 'path',
        selector: 'fill'
      }
    ]
  })
  centerNodeMl.value = graphInstance.value!.addEdge({
    source: {
      cell: 'centerNode',
      anchor: {
        name: 'right',
        args: {
          dx: -38,
          dy: -78
        }
      },
      connectionPoint: 'anchor'
    },
    target: {
      cell: 'mlDev',
      anchor: {
        name: 'top',
        args: {
          dx: 40
        }
      },
      connectionPoint: 'anchor'
    },
    attrs: {
      fill: {
        connection: true,
        strokeWidth: 1,
        fill: 'none',
        stroke: '#aaa'
      }
    },
    markup: [
      {
        tagName: 'path',
        selector: 'fill'
      }
    ]
  })

  timer1 = setInterval(() => {
    animateGif(animateEdge.value!, chuiGif, 2000, 80, () => {
      animateGif(centerNodeDs.value!, digSvg, 1000, 20)
      animateGif(centerNodeDv.value!, digSvg, 1000, 20)
      animateGif(centerNodeMl.value!, digSvg, 1000, 20)
    })
    sourceCellEdgess.value.forEach((ele: any, index: number) => {
      animateGif(ele, props.dataSource[index].lineIcon!, 4000, 50)
    })
  }, 4000)
  setTimeout(() => {
    timer2 = setInterval(() => {
      animateGif(dataLoaderCenterEdge.value!, lingSvg, 1000, 20)
    }, 1000)
  }, 2000)
}
const animateGif = (
  animateEdge: Cell,
  chuiGif: string,
  duration: number,
  size: number,
  callback?: any
) => {
  const view = graphInstance.value!.findViewByCell(animateEdge) as EdgeView
  const token = Vector.create('image', {
    'xlink:href': chuiGif,
    width: size,
    height: size,
    x: -size / 2,
    y: -size / 2
  })

  view.sendToken(token.node, duration, callback)
}
onMounted(() => {
  graphInstance.value = new Graph({
    container: document.getElementById('x6Container')!,
    interacting: {
      nodeMovable: false
    },
    connecting: {
      connector: 'algo-connector',
      connectionPoint: 'anchor'
    }
  })
  renderData()
})
onUnmounted(() => {
  clearInterval(timer1)
  clearInterval(timer2)
  Graph.unregisterNode('sourceText')
  Graph.unregisterNode('dataSource')
  Graph.unregisterNode('dataLoaders')
  Graph.unregisterNode('centerNodes')
  Graph.unregisterNode('dataSharing')
  Graph.unregisterNode('dataVis')
  Graph.unregisterNode('mlDev')
  Graph.unregisterNode('addOns')
})
</script>

<style scoped>
.x6Container {
  border: 1px solid #aaa;
}
</style>
