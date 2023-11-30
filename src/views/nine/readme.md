<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-06-07 11:38:08
 * @LastEditTime: 2023-06-07 12:09:13
-->
# Component Name
`<threatMap />`

Props | Type | Detail
-----|------|------
`dataRange`|`hour/day/month`| Statistical cycle（Responsive）
`attackData` | `I_AttackProps[]`| Attack Data（Responsive）

# Types 
```ts
type T_Poi = [number, number] //latitude and longitude

interface I_Attack_Data {
  from: T_Poi // The latitude and longitude of the starting point of the attack
  to: T_Poi //The longitude and latitude of the endpoint of the attack
  countryName: string //The name of the country where the attack originated
}
interface I_AttackProps {
  name: string // Attack type name
  selected: boolean //Is selected
  color: string // Attack type color
  lineAreaColor: string // Background color of the bottom line chart
  data: I_Attack_Data[] //Attack Data
}

```
[example](./index.vue)
# Component Name
`<cLine />`
Props | Type | Detail
-----|------|------
`yData`|`number[]`| Data of attack-line （Responsive）
`xData`|`string[]`| Determined by statistical cycle

## Note:
The following line chart can be displayed in one hour, one day and one month<br />
<b>In the case of one hour</b>, the minimum interval on the horizontal axis is 5 seconds, which means requesting new data in 5 seconds;<br />
<b>In a day</b>, the minimum interval on the horizontal axis is 2 minutes, which means updating the data within 2 minutes;<br />
<b>In the case of a month</b>, the minimum interval on the horizontal axis is 1 hour, which means updating the data within 1 hour.<br />
In all three cases, the horizontal axis has 720 divisions.

[example](../../components/threatMap/cmts/attackLines/index.vue)


# Component Name
`<topFive />`

Props | Type | Detail
-----|------|------
`dataSource`|`I_Top_Five`| Data Source（Responsive）
# Types
```ts
 interface I_Top_Five {
  title: string // Title of statistics
  themeColor?: string // The theme color of the component
  data: {
    name: string // Name of node data
    percent: string // Percent of node data 
    code?: string // If there is a national flag, add the country's code
  }[]
}
```

# Component Name
`<topRatio />`

Props | Type | Detail
-----|------|------
`dataSource`|`I_Top_Ratio`| Data Source （Responsive）
# Types
```ts
 interface I_Top_Ratio {
  title: string // Title of statistics
  themeColor: string // The theme color of the component
  data: {
    counts: number // Count of node
    label: string | number // show label
  }[]
}
```