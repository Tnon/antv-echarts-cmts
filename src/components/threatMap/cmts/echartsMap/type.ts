type T_Poi = [number, number]

export interface I_Attack_Data {
  from: T_Poi
  to: T_Poi
  countryName: string
}
// export interface I_AttackProps{

// // }
export interface I_AttackProps {
  name: string
  selected: boolean
  color: string
  lineAreaColor: string
  data: I_Attack_Data[]
}
