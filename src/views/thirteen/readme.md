<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-06-07 14:04:42
 * @LastEditTime: 2023-06-07 14:16:44
-->
# Component Name

Props|Type|Detail
-----|----|------
`size`|`{width:number;height:number}`|The size of container
`dataSource`|`I_Data_Source[]`|The Data Sources
`rawData`|`I_Data_Source`|Raw Data
`trustedData`|`I_Data_Source`|Trusted Data
`serviceData`|`I_Data_Source`|Service Data
`cataLog`|`I_Data_Source`|Catalog
`disCovery`|`I_Data_Source`|DisCovery
`lineAge`|`I_Data_Source`|Lineage
`dataLake`|`I_Data_Source`|Data lake
`dataShare`|`I_Data_Source`|Data Sharing
`dataVisualization`|`I_Data_Source`|Data Visualization
`mlDevelopment`|`I_Data_Source`|M.L Development
`addOn`|`{ [k: string]: I_Data_Source }`|Add-ons

# Types
```ts
interface I_Data_Source {
  label: string // The label of Node
  icon: string // The icon of Node (gif.wepb.img...)
  lineIcon?: string // The icon of line of Node (gif.wepb.img...)
}
````
