/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-13 15:32:36
 * @LastEditTime: 2023-05-15 20:08:35
 */
import echartsMap from './index.vue'
export const addRegions = (name: string, color: string) => {
  return {
    name,
    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
        areaColor: color
      }
    }
  }
}
export default echartsMap
