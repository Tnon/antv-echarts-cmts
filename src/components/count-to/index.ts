/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-12 10:05:30
 * @LastEditTime: 2023-05-12 10:07:00
 */
import countTo from './index.vue'
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}
export default countTo
