<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-08-10 15:31:24
 * @LastEditTime: 2023-08-11 09:14:16
-->
<template>
  <div class="container" :style="{ height: nodeState.height - 25 + 'px' }">
    <div class="title">Centralized/Separate Backend Services</div>
    <div class="storage">Stroage</div>
    <div class="border" :style="{ height: (nodeState.height - 25) / 3 + 'px' }">
      <div class="f">
        <div class="node">
          <img src="./imgs/mc.gif" alt="" />
          <!-- <div class="label">Raw Data</div> -->
        </div>
        <img class="arrow" src="./imgs/arrowb.gif" alt="" />
        <div class="node">
          <img src="./imgs/mc.gif" alt="" />
          <!-- <div class="label">Processed Data</div> -->
        </div>
        <img class="arrow" src="./imgs/arrowb.gif" alt="" />
        <div class="node">
          <img src="./imgs/mc.gif" alt="" />
          <!-- <div class="label">Trusted Data</div> -->
        </div>
      </div>
      <div class="text">
        <div class="label">Raw Data</div>
        <div class="label">Processed Data</div>
        <div class="label">Trusted Data</div>
      </div>
      <div class="dl">
        <img src="./imgs/drl.gif" alt="" />
        <div class="label">Data Lake</div>
      </div>
      <div class="foo">
        <div class="fn o">
          <img src="./imgs/ci.gif" alt="" />
          <div class="lb">Partitioned<br />Bucketed</div>
        </div>
        <div class="fn t">
          <img src="./imgs/ci.gif" alt="" />
          <div class="lb">Replication&</div>
        </div>
        <div class="fn th">
          <img src="./imgs/ci.gif" alt="" />
          <div class="lb">RBAC</div>
        </div>
      </div>
    </div>
    <div class="b2">
      <img class="arrowb" src="./imgs/arrowb.gif" alt="" />
      <img class="arrowg" src="./imgs/arrowg.gif" alt="" />
      <div class="node">
        <img src="./imgs/mc.gif" alt="" />
        <div class="lb">Metadata&<br />Catalog</div>
      </div>
      <div class="node">
        <img src="./imgs/mc.gif" alt="" />
        <div class="lb">Privacy&<br />Governance</div>
      </div>
      <div class="node">
        <img src="./imgs/l.gif" alt="" />
        <div class="lb">Lineage</div>
      </div>
      <div class="node">
        <img src="./imgs/do.gif" alt="" />
        <div class="lb">Discovery&<br />Observability</div>
      </div>
    </div>
    <div class="ac">
      <img class="arrowb1" src="./imgs/arrowb.gif" alt="" />
      <img class="arrowg1" src="./imgs/arrowg.gif" alt="" />
    </div>
    <div class="dtr">
      <div class="node dp">
        <img src="./imgs/dp.gif" alt="" />
        <div class="lb">Data Processing</div>
      </div>
      <div class="node ts">
        <div class="im">
          <img src="./imgs/dp.gif" class="one" alt="" />
          <img src="./imgs/dp.gif" class="two" alt="" />
        </div>
        <div class="lb">
          Task Scheduler & <br />
          Resourse Management
        </div>
      </div>
      <div class="node ci">
        <img src="./imgs/ci.gif" alt="" />
        <div class="lb">Caching & Indexing</div>
      </div>
      <div class="node cso">
        <img src="./imgs/ci.gif" alt="" />
      </div>
      <div class="node ds">
        <img src="./imgs/ds.gif" alt="" />
        <div class="lb">Data Shuffle</div>
      </div>
      <div class="node cst">
        <img src="./imgs/ds.gif" alt="" />
        <div class="lb">Commodity Servers</div>
      </div>
    </div>
    <div class="cpm">Compute</div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
const getNode: any = inject('getNode')
const GraphNode = getNode()
const nodeState = ref<{ height: number }>(GraphNode.data)
</script>

<style scoped lang="less">
.container {
  width: 400px;
  border-top: 3px dashed #c8dfe9;
  border-bottom: 3px dashed #c8dfe9;
  border-left: 2px dashed #c8dfe9;
  border-right: 2px dashed #c8dfe9;
  position: relative;
  margin-top: 25px;
  .title {
    text-align: center;
    margin-top: -25px;
    color: #6cb17b;
    font-size: 14px;
    font-weight: 800;
  }
  .storage {
    text-align: center;
    color: #6cb17b;
    font-size: 14px;
    font-weight: 800;
    margin: 8px 0;
  }
  .border {
    width: 380px;
    border: 4px dashed #79a8b5;
    margin: 0 10px;
    position: relative;
    .f {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .arrow {
        width: 30px;
        // height: 0px;
      }
      .node {
        display: flex;
        flex-direction: column;
        .label {
          color: rgba(0, 0, 0, 0.8);
          font-size: 12px;
          word-wrap: keep-all;
        }
        img {
          width: 60px;
          height: 80px;
        }
      }
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 12px;
    }
    .dl {
      text-align: center;
      img {
        width: 100%;
        height: 80px;
      }
      .label {
        font-weight: 800;
        text-align: center;
      }
    }
    .foo {
      .fn {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 10px;
        width: 30px;
        .lb {
          word-wrap: break-all;
          font-size: 12px;
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
      .o {
        left: 20px;
      }
      .t {
        right: 73px;
      }
      .th {
        right: 20px;
      }
    }
  }
  .b2 {
    border: 2px dashed #79a8b5;
    display: flex;
    width: 380px;
    margin: 0 10px;
    border-top: none;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    position: relative;
    .arrowb {
      position: absolute;
      transform: rotateZ(90deg);
      width: 30px;
      top: -5px;
      left: calc(50% - 10px);
    }
    .arrowg {
      position: absolute;
      transform: rotateZ(-90deg);
      width: 30px;
      top: -10px;
      left: calc(50% - 20px);
    }
    .node {
      img {
        width: 65px;
        // height: 100px;
      }
      .lb {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
  .ac {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrowb1 {
      transform: rotateZ(90deg);
      height: 20px;
      margin-right: -15px;
    }
    .arrowg1 {
      transform: rotateZ(-90deg);
      height: 20px;
      margin-left: -15px;
    }
  }
  .dtr {
    border: 2px dashed #79a8b5;
    width: 380px;
    margin: 15px 10px 0;
    padding: 8px;
    position: relative;
    height: 280px;
    .node {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      .lb {
        margin-top: -20px;
        text-align: center;
      }
    }
    .dp {
      top: 10px;
      left: 10px;
      img {
        width: 90px;
      }
    }
    .ts {
      top: 10px;
      right: 10px;
      .im {
        display: flex;
        align-items: center;
      }

      img {
        width: 90px;
      }
    }
    .ci {
      bottom: 10px;
      left: 10px;
      img {
        width: 90px;
      }
    }
    .cso {
      left: 80px;
      top: 60px;

      img {
        width: 200px;
        height: 200px;
      }
    }
    .ds {
      left: 150px;
      bottom: 10px;

      img {
        width: 80px;
        height: 80px;
      }
    }
    .cst {
      right: 20px;
      bottom: 10px;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }
  .cpm {
    text-align: center;
    color: #6cb17b;
    font-size: 14px;
    font-weight: 800;
  }
}
</style>
