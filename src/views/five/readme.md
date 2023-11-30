# Component Name
`<earthAttack />`

Props | Type 
------|----
`height` | `number`
`width` | `number`
`attackSourceTargetData` | `I_Globe_Attack_Data[]`

# Types 
```ts
interface I_Globe_Attack_Data {
  source: [number, number] //Latitude and longitude of 3D map sources
  target: [number, number] //Latitude and longitude of 3D map targets
  color: string //Line color
}
```
### Note: All data supports dynamic changes

[example](./index.vue)