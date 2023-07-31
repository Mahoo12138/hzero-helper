declare global {
  const _import = (modulePath: stirng) => any
  interface Window {
    _hzero_externals: Record<string, any>
    _import: typeof _import
  }
  declare interface Route {
    name: string;
    path: string;
  }
}



export { }