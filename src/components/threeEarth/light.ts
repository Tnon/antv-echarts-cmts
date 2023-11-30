/*
 * @Author: ZY
 * @Date: 2021-12-30 17:32:26
 * @LastEditors: ZY
 * @LastEditTime: 2022-01-05 14:36:30
 * @FilePath: /3d-earth/lib/src/light.ts
 * @Description: 灯光
 */

import { DirectionalLight, PointLight, HemisphereLight, AmbientLight, Scene } from 'three'

export const initLight = (scene: Scene) => {
  /**
   * 光源设置
   */
  // 平行光1
  const directionalLight1 = new DirectionalLight(0x80b5ff, 1)
  directionalLight1.position.set(-250, 250, 100)
  scene.add(directionalLight1)
  const directionalLight2 = new DirectionalLight(0x80d4ff, 1)
  directionalLight2.position.set(-250, 250, 100)
  scene.add(directionalLight2)
  const directionalLight3 = new DirectionalLight(0x80b5ff, 1)
  directionalLight3.position.set(-250, 250, 100)
  scene.add(directionalLight3)
  const directionalLight4 = new DirectionalLight(0xc2ffff, 1)
  directionalLight4.position.set(-250, 250, 100)
  scene.add(directionalLight4)
  // 点光1
  const pointLight = new PointLight(0x80d4ff, 1)
  pointLight.position.set(-250, 250, 100)
  scene.add(pointLight)

  // 半球光1
  const hemisphereLight1 = new HemisphereLight(0xffffff, 0x3d6399, 1)
  hemisphereLight1.position.set(-250, 250, 100)
  scene.add(hemisphereLight1)
  const hemisphereLight2 = new HemisphereLight(0xffffff, 0x3d6399, 1)
  hemisphereLight2.position.set(-250, 250, 100)
  scene.add(hemisphereLight2)
  //环境光
  const ambient = new AmbientLight(0x002bff, 0.8)
  scene.add(ambient)
}
