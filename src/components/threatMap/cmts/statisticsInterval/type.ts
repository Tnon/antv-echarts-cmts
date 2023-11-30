/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 13:35:28
 * @LastEditTime: 2023-05-26 15:04:55
 */
export interface I_Top_Five {
  title: string
  themeColor?: string
  data: {
    name: string
    percent: string
    code?: string
  }[]
}
export interface I_Top_Ratio {
  title: string
  themeColor: string
  data: {
    counts: number
    label: string | number
  }[]
}
