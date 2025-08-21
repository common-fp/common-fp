import baseCfg, {
  withEnvironmentSupport as envCfg,
} from '@common-fp/eslint-config'

// note: we're adding dist as a sanity check in case something fails in my crude
// mjs -> cjs conversion.  If a bug gets through, I'll end up running dist/cjs
// files through functionality tests

const localCfg = baseCfg.map(cfg => ({
  ...cfg,
  files: ['test/**/*', 'scripts/**/*', 'dist/**/*.cjs'],
}))

const browserCfg = envCfg.map(cfg => ({
  ...cfg,
  files: ['src/**/*'],
}))

export default [...localCfg, ...browserCfg]
