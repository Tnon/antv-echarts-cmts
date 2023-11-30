<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-06-07 10:40:38
 * @LastEditTime: 2023-06-07 11:17:13
-->
# Component Name
`<gaugePieFlow />`

Props | Type | Detail
------|----|----
`gaugeScore`|`number`|The count of gauge（Responsive）
`gaugeDataRange`|`I_Range`|The configes of gauge（Responsive）
`gaugeThemeColor`|`string`|The theme color of gauge
`gaugeSize`|`{width:number;height:number}`|The size of gauge
`containerSize`|`{width:number;height:number}`|The size of component
`nodeListData`|`I_NodeData[]`|The right data（Responsive）

# Types
```ts
enum E_DangerLevel {
  Danger = 1, //Danger is red
  Safe //Safe if green
}
interface I_Range<T> {
  begin: number //The starting point of the dashboard area 
  end: number //The endpoint of the dashboard area
  label: string // Text in the dashboard area
  color?: T //Background color of the dashboard area
}
interface I_NodeData {
  level: E_DangerLevel //The color of the connecting line
  inSideCount: number //The left count
  label: string //The label of node
  outSideCount: number //The right count
  id: string // The id of node
}

```


[example](./index.vue)
