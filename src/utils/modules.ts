const _import = (module: string) => {
  if (window._hzero_externals) {
    return window._hzero_externals[module];
  }
  return null;
};

window._import = _import;
console.log("window._import", window._import);
export { _import }