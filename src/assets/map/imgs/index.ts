const components = import.meta.glob('./*.{png,vue}', { eager: true })
const modules: any = {}
Object.keys(components).forEach((path) => {
  if (path.includes('png')) {
    const fileName = path.slice(2, 4)
    modules[fileName] = (components[path] as any).default
  }
})
export default modules
