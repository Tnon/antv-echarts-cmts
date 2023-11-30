# Component Name
`<pointMap />`

Props | Type | Detail
------|----|----
`pointDataArray` | `I_Data_Node` | Data of pointMap
`size` | `{width:number;height:number}` | Size of pointMap
`period` | `number` | The cycle of animation
`scale` | `number` | The size of the animation，1 is off
`leftTopStatic` | `{label:string;value:number}` | Number of statistics

# Types
```ts
interface I_Data_Node {
  latAndLong: [number, number] //Longitude and latitude on the map
  color: string //Color of marking points
  img?: any //Background image of the current point
  size?: number //The size of the current point
}

```
### Note: pointDataArray supports dynamic changes

[example](./index.vue)