/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-09 09:25:42
 * @LastEditTime: 2023-05-09 09:27:14
 */
import gaugeEarth from './index.vue'
const redData: any = []
for (let i = 0; i < 50; i++) {
  redData.push({
    value: 2 + i * 8,
    name: '3' + i
  })
}
import img1 from './imgs/1.png'
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'
import img4 from './imgs/4.png'
import img5 from './imgs/5.png'
export const useSetoptions = (setOptions: any, echarts: any, percent: any) => {
  setOptions({
    series: [
      // 外层
      {
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        center: ['50%', '60%'],
        min: 0,
        max: 240,
        splitNumber: 12,

        radius: '80%',
        // 指针设置
        itemStyle: {
          show: false
        },
        // progress: {
        //   show: false,
        //   // roundCap: true,
        //   width: 2,
        // },
        // 指针设置
        pointer: {
          show: true,
          icon: 'circle',
          width: 10,
          offsetCenter: [0, '-67%'],
          itemStyle: {
            color: 'rgba(237, 46, 46, 1)'
          }
        },
        // 刻度线设置
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 20,
            color: [[1, '#1A2626']]
          }
        },
        // 小刻度线设置
        axisTick: {
          show: false
        },
        // 大刻度线设置
        splitLine: {
          show: false
        },
        // 刻度label
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        // 数据显示详情设置
        detail: {
          show: false
        },
        data: redData
      },
      // 中间数据层
      {
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        center: ['50%', '60%'],
        min: 0,
        max: 100,
        splitNumber: 100,
        itemStyle: {
          // color: '#58D9F9',
          shadowColor: 'rgba(1, 147, 160, 0.45)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        // progress: {
        //   show: false,
        //   // roundCap: true,
        //   width: 2,
        // },
        pointer: {
          show: false
        },
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 100,
            color: [
              [
                0.2,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.2,
                      color: 'rgba(1, 147, 160, 1)' // 0 ~ 20%处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(1, 89, 116, 1)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              [
                0.5,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.2,
                      color: 'rgba(65, 89, 34, 1)' // 0 ~ 20%处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(48, 63, 28, 1)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              [
                0.6,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.2,
                      color: 'rgba(113, 107, 23, 1)' // 0 ~ 20%处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(80, 77, 21, 1)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              [
                0.7,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.2,
                      color: 'rgba(108, 45, 24, 1)' // 0 ~ 20%处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(72, 19, 21, 1)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              [
                1,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.2,
                      color: 'rgba(65, 25, 64, 1)' // 0 ~ 20%处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(50, 22, 49, 1)' // 100% 处的颜色
                    }
                  ]
                }
              ]
            ]
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          distance: -5,
          formatter: (value: number) => {
            if (value === 10) {
              return '{aImg|}\n{aColor|10 / 299}'
            } else if (value === 35) {
              return '{bImg|}\n{bColor|10 / 299}'
            } else if (value === 55) {
              return '{cImg|}\n{cColor|10 / 299}'
            } else if (value === 65) {
              return '{dImg|}\n{dColor|10 / 299}'
            } else if (value === 85) {
              return '{eImg|}\n{eColor|10 / 299}'
            }
            return ''
          },

          rich: {
            // titleBg: {
            //   height: 30,
            //   borderRadius: [5, 5, 0, 0],
            //   padding: [0, 10, 0, 10],
            //   width: '100%',
            //   color: '#eee'
            // },
            aImg: {
              backgroundColor: {
                image: img1
              },
              height: 50,
              align: 'center'
            },
            aColor: {
              color: '#0fdbed'
            },
            bImg: {
              backgroundColor: {
                image: img2
              },
              align: 'center',
              height: 50
            },
            bColor: {
              color: '#82d90e'
            },
            cImg: {
              backgroundColor: {
                image: img3
              },
              align: 'center',
              height: 50
            },
            cColor: {
              color: '#dacf0a'
            },

            dImg: {
              backgroundColor: {
                image: img4
              },
              align: 'center',
              height: 50
            },
            dColor: {
              color: '#e3330a'
            },

            eImg: {
              backgroundColor: {
                image: img5
              },
              align: 'center',
              height: 50
            },
            eColor: {
              color: '#e40cde'
            }
            // b: {
            //   backgroundColor: {
            //     image: 'xxx/xxx.jpg'
            //   },
            //   height: 40
            // },
            // x: {
            //   fontSize: 18,
            //   fontFamily: 'Microsoft YaHei',
            //   borderColor: '#449933',
            //   borderRadius: 4
            // }
          }
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: percent
          }
        ]
      },

      // 最内层
      {
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        center: ['50%', '60%'],
        min: 0,
        max: 240,
        splitNumber: 12,

        radius: '55%',
        // 指针设置
        // itemStyle: {
        //   color: '#58D9F9',
        //   shadowColor: 'rgba(0,138,255,0.45)',
        //   shadowBlur: 10,
        //   shadowOffsetX: 2,
        //   shadowOffsetY: 2,
        // },
        // progress: {
        //   show: false,
        //   // roundCap: true,
        //   width: 2,
        // },
        // 指针设置
        pointer: {
          show: true,
          icon: 'circle',
          width: 10,
          offsetCenter: [0, '-65%'],
          itemStyle: {
            color: 'rgba(237, 46, 46, 1)'
          }
        },
        // 刻度线设置
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 20,
            color: [[1, '#1A2626']]
          }
        },
        // 小刻度线设置
        axisTick: {
          show: true,
          splitNumber: 10,
          distance: -26,
          lineStyle: {
            width: 1,
            color: '#a0f1f0'
          }
        },
        // 大刻度线设置
        splitLine: {
          length: 14,
          distance: -36,
          lineStyle: {
            width: 1,
            color: '#a0f1f0'
          }
        },
        // 刻度label
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        // 数据显示详情设置
        detail: {
          show: false
        },
        data: redData
      }
    ]
  })
}

export default gaugeEarth
