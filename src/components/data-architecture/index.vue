<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-09 13:43:40
 * @LastEditTime: 2023-08-11 10:08:02
-->
<template>
  <div>
    <div
      class="x6ContainerData"
      id="x6ContainerData"
      ref="renderRef"
      :style="{ width: size.width + 'px', height: size.height + 'px' }"
    ></div>
    <TeleportContainer />
  </div>
</template>

<script setup lang="ts">
import { Graph } from '@antv/x6'
import { onMounted, onUnmounted, ref } from 'vue'
import type { I_Data_Source } from './type'
import { useTeleport } from '@antv/x6-vue-shape'
import sourceTar from './cmts/sourceTar'
import squreList from './cmts/squreList'
import dataSourceText from './cmts/dataSourceText'
import encryptedArrow from './cmts/encryptedArrow'
import midDataLake from './cmts/midDataLake'
import arrowSmall from './cmts/arrowSmall'
import doubuleImg from './cmts/doubuleImg'
import drldw from './cmts/drldw'
import reveryt from './cmts/reveryt'
import dwGif from './imgs/dw.gif'
const props = defineProps<{
  size: { width: number; height: number }
  dataSource: I_Data_Source[]
  centerData: I_Data_Source[]
  endData: any
}>()

const UNIQ_GRAPH_ID = 'UNIQ_GRAPH_ID'
const TeleportContainer = useTeleport(UNIQ_GRAPH_ID)
const graphInstance = ref<Graph>()

Graph.registerNode('sourceTar', {
  inherit: 'vue-shape',
  component: sourceTar
})
Graph.registerNode('squreList', {
  inherit: 'vue-shape',
  component: squreList
})
Graph.registerNode('dataSourceText', {
  inherit: 'vue-shape',
  component: dataSourceText
})
Graph.registerNode('encryptedArrow', {
  inherit: 'vue-shape',
  component: encryptedArrow
})
Graph.registerNode('drldw', {
  inherit: 'vue-shape',
  component: drldw
})
Graph.registerNode('midDataLake', {
  inherit: 'vue-shape',
  component: midDataLake
})
Graph.registerNode('arrowSmall', {
  inherit: 'vue-shape',
  component: arrowSmall
})
Graph.registerNode('doubuleImg', {
  inherit: 'vue-shape',
  component: doubuleImg
})
Graph.registerNode('reveryt', {
  inherit: 'vue-shape',
  component: reveryt
})

const renderData = () => {
  //source
  props.dataSource.forEach((ele, index) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'sourceTar',
      id: 'sourceTar' + ele.label,
      x: 0,
      y: (props.size.height / 6) * index,
      data: { ...ele, width: props.size.height / 6, height: props.size.height / 6 },
      width: props.size.height / 6,
      height: props.size.height / 6
    })
    graphInstance.value!.addEdge({
      source: { x: props.size.height / 6 + 20, y: (props.size.height / 6) * (index + 1) - 40 },
      target: {
        x: props.size.height / 6 + 20 + (300 - props.size.height / 6) - 20,
        y:
          index < 3
            ? (props.size.height / 6) * (index + 1) - 40 - 40
            : (props.size.height / 6) * (index + 1) - 4
      },
      vertices: [
        {
          x: props.size.height / 6 + 20 + 40,
          y:
            index < 3
              ? (props.size.height / 6) * (index + 1) - 40 - 40
              : (props.size.height / 6) * (index + 1) - 4
        }
      ],
      attrs: {
        line: {
          stroke: '#01bea3',
          targetMarker: {
            tagName: 'path',
            stroke: 'none'
          }
        }
      }
    })
  })
  // squreList
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'squreList',
    id: 'squreList',
    x: 300,
    y: 0,
    data: Math.floor(props.size.height / 20),
    width: 20,
    height: props.size.height
  })
  //dataSourceText
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'dataSourceText',
    id: 'dataSourceText',
    x: 180,
    y: props.size.height / 2 - 10,
    width: 100,
    height: 20
  })
  //encrtpted
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'encryptedArrow',
    id: 'encryptedArrow1',
    x: 320,
    y: props.size.height / 2 - 20,
    data: { label: 'Encrypted', flag: true },
    width: 100,
    height: 20
  })
  // center
  props.centerData.forEach((ele, index) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'drldw',
      id: 'drldw' + index,
      x: index ? 640 : 420,
      y: props.size.height / 2 - props.size.height / 6 / 2,
      data: {
        ...ele,
        width: props.size.height / 6,
        height: props.size.height / 6,
        flag: index === 0
      },
      width: props.size.height / 6,
      height: props.size.height / 6
    })
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'encryptedArrow',
    id: 'encryptedArrow2',
    x: 550,
    y: props.size.height / 2 - 20,
    data: { label: 'Encrypted', flag: true },
    width: 100,
    height: 20
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'encryptedArrow',
    id: 'encryptedArrow3',
    x: 780,
    y: props.size.height / 2 - 40,
    data: { label: 'Encrypted', flag: true, title: 'Batch/Streaming' },
    width: 100,
    height: 20
  })
  graphInstance.value!.addEdge({
    source: { x: 460, y: props.size.height / 2 - props.size.height / 6 / 2 - 40 },
    target: {
      x: 900,
      y: props.size.height / 2 - props.size.height / 6 / 2 - 80
    },
    vertices: [
      {
        x: 500,
        y: props.size.height / 2 - props.size.height / 6 / 2 - 80
      }
    ],
    attrs: {
      line: {
        stroke: '#01bea3',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 460, y: props.size.height / 2 + props.size.height / 6 / 2 + 70 },
    target: {
      x: 900,
      y: props.size.height / 2 + props.size.height / 6 / 2 + 110
    },
    vertices: [
      {
        x: 500,
        y: props.size.height / 2 + props.size.height / 6 / 2 + 110
      }
    ],
    attrs: {
      line: {
        stroke: '#01bea3',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 520, y: props.size.height / 2 - props.size.height / 6 / 2 - 80 + 8 },
    target: {
      x: 760,
      y: props.size.height / 2 - props.size.height / 6 / 2 - 80 + 8
    },

    attrs: {
      line: {
        stroke: '#000',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 520, y: props.size.height / 2 - props.size.height / 6 / 2 - 80 + 16 },
    target: {
      x: 650,
      y: props.size.height / 2 - props.size.height / 6 / 2 - 80 + 16
    },

    attrs: {
      line: {
        stroke: '#000',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 520, y: props.size.height / 2 + props.size.height / 6 / 2 + 110 - 8 },
    target: {
      x: 760,
      y: props.size.height / 2 + props.size.height / 6 / 2 + 110 - 8
    },

    attrs: {
      line: {
        stroke: '#000',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 520, y: props.size.height / 2 + props.size.height / 6 / 2 + 110 - 16 },
    target: {
      x: 650,
      y: props.size.height / 2 + props.size.height / 6 / 2 + 110 - 16
    },

    attrs: {
      line: {
        stroke: '#000',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  //encrtpted
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'midDataLake',
    id: 'midDataLake',
    x: 900,
    y: 0,
    data: { height: props.size.height },
    width: 400,
    height: props.size.height
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'arrowSmall',
    id: 'arrowSmall1',
    x: 1300,
    y: props.size.height / 2 - 10,
    data: { flag: false },
    width: 50,
    height: 20
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'drldw',
    id: 'drldwDrp',
    x: 1350,
    y: props.size.height / 2 - props.size.height / 6 / 2,
    data: {
      label: 'Data Routing & Publish',
      icon: dwGif,
      width: props.size.height / 6,
      height: props.size.height / 6
    },
    width: props.size.height / 6,
    height: props.size.height / 6
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'arrowSmall',
    id: 'arrowSmall2',
    x: 1500,
    y: props.size.height / 2 - 10,
    data: { flag: false },
    width: 50,
    height: 20
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'drldw',
    id: 'drldwDrp2',
    x: 1550,
    y: props.size.height / 2 - props.size.height / 6 / 2,
    data: {
      label: 'NoSQL Store',
      icon: dwGif,
      width: props.size.height / 6,
      height: props.size.height / 6
    },
    width: props.size.height / 6,
    height: props.size.height / 6
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'arrowSmall',
    id: 'arrowSmall3',
    x: 1680,
    y: props.size.height / 2 - 10,
    data: { flag: false },
    width: 50,
    height: 20
  })
  props.endData.forEach((ele: any, index: number) => {
    graphInstance.value!.addNode({
      view: UNIQ_GRAPH_ID,
      shape: 'doubuleImg',
      id: 'doubuleImg' + index,
      x: 1710,
      y: 100 + index * 200,
      data: { ...ele, index },
      width: 300,
      height: 200
    })
  })
  graphInstance.value!.addEdge({
    source: { x: 1400, y: props.size.height / 2 - props.size.height / 6 / 2 - 30 },
    target: {
      x: 1710,
      y: props.size.height / 2 - props.size.height / 6 / 2 - 110
    },
    vertices: [
      {
        x: 1600,
        y: props.size.height / 2 - props.size.height / 6 / 2 - 30
      }
    ],
    attrs: {
      line: {
        stroke: '#01bea3',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addEdge({
    source: { x: 1400, y: props.size.height / 2 - props.size.height / 6 / 2 + 170 },
    target: {
      x: 1710,
      y: props.size.height / 2 - props.size.height / 6 / 2 + 240
    },
    vertices: [
      {
        x: 1600,
        y: props.size.height / 2 - props.size.height / 6 / 2 + 170
      }
    ],
    attrs: {
      line: {
        stroke: '#01bea3',
        targetMarker: {
          tagName: 'path',
          stroke: 'none'
        }
      }
    }
  })
  graphInstance.value!.addNode({
    view: UNIQ_GRAPH_ID,
    shape: 'reveryt',
    id: 'reveryt',
    x: 1450,
    y: props.size.height / 2 - props.size.height / 6 / 2 + 200,

    width: 200,
    height: 20
  })
}
onMounted(() => {
  graphInstance.value = new Graph({
    container: document.getElementById('x6ContainerData')!,
    interacting: {
      nodeMovable: false
    }
    // connecting: {
    //   connector: 'algo-connector',
    //   connectionPoint: 'anchor'
    // }
  })
  renderData()
})
onUnmounted(() => {
  Graph.unregisterNode('sourceTar')
})
</script>

<style scoped></style>
