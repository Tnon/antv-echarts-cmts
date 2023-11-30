# Component Name
`<lineCharts />`

Props | Type | Detail
------|----|----
`title` | `string` | Title of line chart
`xAxis` | `string[]` | Abscissa of line chart
`series` | `I_Line_Series[]` | As follows
`themeColor` | `string` | Theme color of line chart
`bgColor` | `string` | Background color of line chart

# Types
```ts
interface I_Line_Series {
  color: string //Color of Polylines
  data: number[] //Line data
  name: string //Name of Polylines
}
```
### Note: All data supports dynamic changes

[example](./index.vue)