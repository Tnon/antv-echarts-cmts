# Component Name
`<gaugeAttack />`

Props | Type 
------|----
`topNodeData` | `I_Statistics_Node` 
`midNodeData` | `I_Statistics_Node`
`bottomNodeData` | `I_Statistics_Node`
`height` | `number`
`width` | `number`
`chartData` | `I_Chart_Data[]`
`attackSourceTargetData` | `I_Globe_Attack_Data[]`

# Types 
```ts
interface I_Statistics_Node {
  label: string //show label
  value: string //show value
}
interface I_Chart_Data {
  outSide: number //Number of small red dots on the outside 
  areaCount: number //The size of the area
  label?: string //The text displayed in this area
  inSide: number //Number of small red dots on the inside 
  backgroundColor?: string //The background color of this area
  fontColor?: string //The text color of this area
  icon?: any //Icon for this area
}
interface I_Globe_Attack_Data {
  source: [number, number] //Latitude and longitude of 3D map sources
  target: [number, number] //Latitude and longitude of 3D map targets
  color: string //Line color
}
```
### Note: All data supports dynamic changes

[example](./index.vue)