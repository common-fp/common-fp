import baseCfg, {
  withEnvironmentSupport as envCfg,
} from '@common-fp/eslint-config/base'

const localCfg = baseCfg.map(cfg => ({
  ...cfg,
  files: ['test/**/*', 'scripts/**/*', 'dist/**/*.cjs'],
}))

const browserCfg = envCfg.map(cfg => ({
  ...cfg,
  files: ['src/**/*'],
}))

export default [...localCfg, ...browserCfg, { ignores: ['*/deps/**/*'] }]
