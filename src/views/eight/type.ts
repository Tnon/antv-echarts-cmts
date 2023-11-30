/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-11 19:43:18
 * @LastEditTime: 2023-05-11 21:57:48
 */
export const enum E_DangerLevel {
  Danger = 1,
  Safe
}
export interface I_Range<T> {
  begin: number
  end: number
  label: string
  color?: T
}
export interface I_NodeData {
  level: E_DangerLevel
  inSideCount: number
  label: string
  outSideCount: number
  id: string
}
