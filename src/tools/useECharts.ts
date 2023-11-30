import { unref, nextTick, watch, ref, getCurrentInstance, onUnmounted, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts/core'
import 'echarts-gl'

import {
  LineChart,
  PieChart,
  RadarChart,
  TreeChart,
  SunburstChart,
  BarChart,
  GraphChart,
  ScatterChart,
  LinesChart,
  MapChart,
  GaugeChart,
  TreemapChart,
  EffectScatterChart
} from 'echarts/charts'
import 'echarts-gl'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  MarkLineComponent,
  VisualMapComponent,
  GeoComponent,
  TitleComponent,
  ToolboxComponent,
  MarkPointComponent,
  MarkAreaComponent
} from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TooltipComponent,
  GridComponent,
  LineChart,
  PieChart,
  CanvasRenderer,
  RadarChart,
  LegendComponent,
  TreeChart,
  DataZoomComponent,
  MarkLineComponent,
  VisualMapComponent,
  ToolboxComponent,
  SunburstChart,
  GraphChart,
  BarChart,
  GeoComponent,
  MapChart,
  ScatterChart,
  LinesChart,
  TitleComponent,
  EffectScatterChart,
  GaugeChart,
  MarkPointComponent,
  MarkAreaComponent,
  TreemapChart
])

let globalScreenRef: ComputedRef<string>
let globalWidthRef: ComputedRef<number>
let globalRealWidthRef: ComputedRef<number>
export type RemoveEventFn = () => void
export enum screenEnum {
  XS = 480,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1600
}

export interface UseEventParams {
  el?: Element | Ref<Element | undefined> | Window | any
  name: string
  listener: EventListener
  options?: boolean | AddEventListenerOptions
  autoRemove?: boolean
  isDebounce?: boolean
  wait?: number
}
export function useBreakpoint() {
  return {
    screenRef: computed(() => unref(globalScreenRef)),
    widthRef: globalWidthRef,
    screenEnum,
    realWidthRef: globalRealWidthRef
  }
}
export function useEventListener({
  el = window,
  name,
  listener,
  options,
  autoRemove = true,
  isDebounce = true,
  wait = 80
}: UseEventParams): { removeEvent: RemoveEventFn } {
  /* eslint-disable-next-line */
  let remove: RemoveEventFn = () => {}
  const isAddRef = ref(false)

  if (el) {
    const element: Ref<Element> = ref(el as Element)

    const [handler] = isDebounce ? useDebounce(listener, wait) : useThrottle(listener, wait)
    const realHandler = wait ? handler : listener
    const removeEventListener = (e: Element) => {
      isAddRef.value = true
      e.removeEventListener(name, realHandler, options)
    }
    const addEventListener = (e: Element) => e.addEventListener(name, realHandler, options)

    const removeWatch = watch(
      element,
      (v, _ov, cleanUp) => {
        if (v) {
          !unref(isAddRef) && addEventListener(v)
          cleanUp(() => {
            autoRemove && removeEventListener(v)
          })
        }
      },
      { immediate: true }
    )

    remove = () => {
      removeEventListener(element.value)
      removeWatch()
    }
  }
  return { removeEvent: remove }
}

export interface DebounceAndThrottleOptions {
  // 立即执行
  immediate?: boolean

  // 是否为debounce
  debounce?: boolean
  // 只执行一次
  once?: boolean
}
export type DebounceAndThrottleProcedure<T extends unknown[]> = (...args: T) => unknown
export type CancelFn = () => void
export type DebounceAndThrottleProcedureResult<T extends unknown[]> = [
  DebounceAndThrottleProcedure<T>,
  CancelFn
]
export interface DebounceAndThrottleOptions {
  // 立即执行
  immediate?: boolean

  // 是否为debounce
  debounce?: boolean
  // 只执行一次
  once?: boolean
}
export function throttle<T extends unknown[]>(
  handle: DebounceAndThrottleProcedure<T>,
  wait: number,
  options: DebounceAndThrottleOptions = {}
): DebounceAndThrottleProcedureResult<T> {
  if (!isFunction(handle)) {
    throw new Error('handle is not Function!')
  }
  let { immediate = false } = options
  const { once = false, debounce = false } = options
  let timeoutId: any
  // Has it been cancelled
  let cancelled: boolean | null = false
  /**
   * @description: clear timer
   */
  function clearTimer() {
    if (timeoutId) {
      window.clearTimeout(timeoutId)
      timeoutId = null
    }
  }
  /** cancel exec */
  function cancel() {
    clearTimer()
    cancelled = true
  }
  // If once is true, only execute once
  function cancelExec(): void {
    once && cancel()
  }
  function fn(this: unknown, ...args: T) {
    // If it has been cancelled, it will not be executed
    if (cancelled) {
      return
    }
    const exec = () => {
      !debounce && clearTimer()
      handle.apply(this, args)
      cancelExec()
    }
    if (immediate) {
      immediate = false
      const callNow = !timeoutId
      if (callNow) {
        exec()
        timeoutId = null
      }
    } else {
      debounce && clearTimer()
      if (!timeoutId || debounce) {
        timeoutId = setTimeout(exec, wait)
      }
    }
  }
  return [fn, cancel]
}

export function tryOnUnmounted(fn: () => Promise<void> | void) {
  getCurrentInstance() && onUnmounted(fn)
}
export function useThrottle<T extends unknown[]>(
  handle: DebounceAndThrottleProcedure<T>,
  wait: number,
  options: DebounceAndThrottleOptions = {}
): DebounceAndThrottleProcedureResult<T> {
  return throttle(handle, wait, options)
}

export function useDebounce<T extends unknown[]>(
  handle: DebounceAndThrottleProcedure<T>,
  wait: number,
  options: DebounceAndThrottleOptions = {}
): DebounceAndThrottleProcedureResult<T> {
  return useThrottle(
    handle,
    wait,
    Object.assign(options, {
      debounce: true
    })
  )
}

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function')
}

export function useTimeoutRef(wait: number) {
  const readyRef = ref(false)

  let timer: any
  function stop(): void {
    readyRef.value = false
    timer && window.clearTimeout(timer)
  }
  function start(): void {
    stop()
    timer = setTimeout(() => {
      readyRef.value = true
    }, wait)
  }

  start()

  tryOnUnmounted(stop)

  return { readyRef, stop, start }
}

export function useTimeoutFn<T>(handle: T, wait: number, native = false) {
  if (!isFunction(handle)) {
    throw new Error('handle is not Function!')
  }

  const { readyRef, stop, start } = useTimeoutRef(wait)
  if (native) {
    handle()
  } else {
    watch(
      readyRef,
      (maturity) => {
        maturity && handle()
      },
      { immediate: false }
    )
  }
  return { readyRef, stop, start }
}

export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: 'light' | 'dark' | 'default' = 'light'
) {
  let chartInstance: echarts.ECharts | null = null
  let resizeFn: any = resize
  let removeResizeFn: any = () => {}

  const [debounceResize] = useDebounce(resize, 200)
  resizeFn = debounceResize

  function initCharts() {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }

    chartInstance = echarts.init(el, theme, { useDirtyRect: true, renderer: 'canvas' })
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn
    })
    removeResizeFn = removeEvent
    const { widthRef, screenEnum } = useBreakpoint()
    if (unref(widthRef) <= screenEnum.MD || el.offsetHeight === 0) {
      useTimeoutFn(() => {
        resizeFn()
      }, 30)
    }
  }

  function setOptions(options: EChartsOption, clear = true) {
    if (unref(elRef)?.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(options)
      }, 30)
      return
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts()

          if (!chartInstance) return
        }
        clear && chartInstance?.clear()

        chartInstance?.setOption(options)
      }, 30)
    })
  }

  function resize() {
    chartInstance?.resize()
  }

  tryOnUnmounted(() => {
    if (!chartInstance) return
    removeResizeFn()
    chartInstance.dispose()
    chartInstance = null
  })

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts()
    }
    return chartInstance
  }
  return {
    setOptions,
    resize,
    echarts,
    getInstance,
    chartInstance
  }
}
