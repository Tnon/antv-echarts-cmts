# Component Name
`<sourceTarget />`
Props|Types|Detail
-----|-----|-----
`dirction`|`T_Dirction` |  lr:left to right<br />rl:right to left
`size`| {width:number,height:number}|The size of component
`sourceAttack`|`I_Source_Country[]`| As follow
`centerNode`| `I_Center_Host` | As follow 
`targetAttack`| `I_Target_Country[]`| As follow

# Types
```ts
//target
export interface I_Target_Country {
  countryCode: string// Abbreviation of the target country， CN is China，SA is Saudi Arabia
  ip: string //IP of the target country
}
//center
export interface I_Center_Host {
  ip: string //IP of intermediate nodes
  label: string //Text for intermediate nodes
}
//source
export interface I_Source_Country {
  countryCode: string // Abbreviation of the source country
  count: number// Counts of the source country
}
//Popover
export interface I_Source_Ip {
  ip: string //The ip of Souce Country 
  external: string //external actor 
  reputation: string //reputation
}
//dirction
export type T_Dirction = 'lr' | 'rl'
```

### Note: For a better user experience, please control the number of nodes

### Note: The country's IP adopts lazy loading, please add data according to business needs

[example](./index.vue)

[IP Lazy Loading](../../components/source-target/cmts/sourceIps/index.vue)