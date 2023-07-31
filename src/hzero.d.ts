declare global {
  const _hzero_externals: Record<string, any>
  const _import = (modulePath: stirng) => any
  interface Window {
    _import: typeof _import
  }
  declare interface Route {
    name: string;
    path: string;
  }
}



export { }