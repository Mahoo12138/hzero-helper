const _import = (module: string) => {
  if (_hzero_externals) {
    return _hzero_externals[module];
  }
  return null;
};

window._import = _import;

export {}