/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 09:29:12
 * @LastEditTime: 2023-05-23 15:24:45
 */
// Data of top and bottom and mid
export interface I_Statistics_Node {
  label: string
  value: string
}
// Data of gauge
export interface I_Chart_Data {
  outSide: number
  areaCount: number
  label?: string
  inSide: number
  backgroundColor?: string
  fontColor?: string
  icon?: any
}
// Data of AttackLine
export interface I_Globe_Attack_Data {
  source: [number, number]
  target: [number, number]
  color: string
}
