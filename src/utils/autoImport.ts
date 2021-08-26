// api模块自动注册
export function autoImportApiModule() {
  const requireModule = import.meta.glob('../api/modules/*.ts')
  console.log(requireModule)
  return requireModule
}
