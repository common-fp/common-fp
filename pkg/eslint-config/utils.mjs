const removeImportPlugin = baseCfgArr =>
  baseCfgArr.map(cfg => {
    if (cfg.plugins?.import) {
      const plugins = { ...cfg.plugins }
      delete plugins.import
      return { ...cfg, plugins }
    }

    return cfg
  })

export { removeImportPlugin }
