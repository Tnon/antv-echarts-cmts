<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-05 11:11:30
 * @LastEditTime: 2023-05-09 19:29:11
-->
<template>
  <div id="container" :style="{ height: height + 'px', width: width + 'px' }"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
const props = defineProps<{
  leftIps: any
  center: any
  rightIps: any
  width: number
  height: number
}>()
G6.registerEdge(
  'circle-running',
  {
    afterDraw(cfg: any, group: any) {
      const shape = group.get('children')[0]

      // the start position of the edge's path
      let html = ''
      for (let i = 0; i < cfg!.dotted.length; i++) {
        html += `<div style='color:#fff'> <img src=${cfg.dotted[i].img} style="width:10px;height:10px;margin-right:16px" />${cfg.dotted[i].count}</div>`
      }
      const circle = group.addShape('dom', {
        attrs: {
          width: 50,
          height: 50,
          html
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: 'dom-node-keyShape'
      })
      // animation for the red circle
      circle.animate(
        (ratio: any) => {
          // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
          // get the position on the edge according to the ratio
          const tmpPoint = shape.getPoint(ratio)
          // returns the modified configurations here, x and y here
          return {
            x: tmpPoint.x,
            y: tmpPoint.y
          }
        },
        {
          repeat: true, // Whether executes the animation repeatly
          duration: 3000 // the duration for executing once
        }
      )
    }
  },
  'line' // extend the built-in edge 'cubic'
)
//实例
const graphInstance = ref<Graph>()
const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 10,
  // the types of items that allow the tooltip show up
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node'],
  // custom the tooltip's content
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div')
    outDiv.style.width = 'fit-content'
    //outDiv.style.padding = '0px 0px 20px 0px';
    outDiv.innerHTML = `
      <h4>Custom Content</h4>
      <ul>
        <li>Type: ${e!.item!.getType()}</li>
      </ul>
      <ul>
        <li>Label: ${e!.item!.getModel().label || e!.item!.getModel().id}</li>
      </ul>`
    return outDiv
  }
})
G6.registerNode(
  'dom-node',

  {
    draw: (cfg: any, group: any) => {
      const container = group.addShape('dom', {
        attrs: {
          width: 200,
          height: 24,
          // 传入 DOM 的 html
          html: `
       <div style="border:1px solid #1A3567;color:#fff;border-radius:20px;display:flex;align-items:center">
        <img src=${cfg.img} style="width:20px;height:16px;margin:0 16px" />
        <span>${cfg.id}</span>
        </div>
          `
        },
        name: 'dom-node-keyShape', // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        draggable: true
      })
      /* 左边的粗线 */
      group.addShape('rect', {
        attrs: {
          width: 200,
          height: 24,
          fill: '#fff',
          opacity: 0.1
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: 'rect'
      })
      return container
    }
  },
  'single-node'
)
const renderData = () => {
  //先清空节点
  graphInstance.value!.clear()
  const data: any = {
    nodes: [
      {
        id: props.center.ip,
        x: props.width / 2 - 100,
        y: props.height / 2,
        img: props.center.img
      }
    ],
    edges: []
  }

  props.leftIps.forEach((ele: any, index: number) => {
    data.nodes.push({
      id: ele.ip,
      img: ele.img,
      x: 0,
      y: (props.height / props.leftIps.length) * index + 10,
      anchorPoints: [[1, 0.5]]
    })
    data.edges.push({
      source: ele.ip,
      target: props.center.ip,
      dotted: ele.dotted
    })
  })
  props.rightIps.forEach((ele: any, index: number) => {
    data.nodes.push({
      id: ele.ip,
      img: ele.img,
      x: props.width - 200,
      y: (props.height / props.rightIps.length) * index + 10,
      anchorPoints: [[0, 0.5]]
    })
    data.edges.push({
      source: props.center.ip,
      target: ele.ip,
      dotted: ele.dotted
    })
  })
  graphInstance.value!.data(data)
  graphInstance.value!.render()
}

onMounted(() => {
  graphInstance.value = new G6.Graph({
    container: document.getElementById('container')!,
    width: props.width,
    height: props.height,
    plugins: [tooltip],
    defaultEdge: {
      type: 'circle-running',
      style: {
        lineWidth: 1,
        stroke: '#666'
      }
    },
    modes: {
      default: ['zoom-canvas', 'drag-canvas']
    },
    renderer: 'svg',
    // fitView: true,
    defaultNode: {
      type: 'dom-node'
    }
  })
  renderData()
  graphInstance.value.on('node:mouseenter', (e) => {
    graphInstance.value!.setItemState(e!.item!, 'active', true)
  })
  graphInstance.value.on('node:mouseleave', (e) => {
    graphInstance.value!.setItemState(e!.item!, 'active', false)
  })
})
</script>

<style scoped></style>
