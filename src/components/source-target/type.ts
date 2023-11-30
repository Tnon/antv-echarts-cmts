/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-17 17:06:09
 * @LastEditTime: 2023-05-26 11:09:21
 */

//target
export interface I_Target_Country {
  countryCode: string
  ip: string
}
//center
export interface I_Center_Host {
  ip: string
  label: string
}
//source
export interface I_Source_Country {
  countryCode: string
  count: number
}
export interface I_Source_Ip {
  ip: string
  external: string
  reputation: string
}
//dirction
export type T_Dirction = 'lr' | 'rl'
