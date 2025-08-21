import compat from 'eslint-plugin-compat'
import { importX } from 'eslint-plugin-import-x'
import jsEslint from '@eslint/js'
import baseConfigObj from './base-config-obj.mjs'

const baseCfg = [
  jsEslint.configs.recommended,
  importX.flatConfigs.recommended,
  baseConfigObj,
]

const withEnvironmentSupport = [
  ...baseCfg,
  compat.configs['flat/recommended'],
  {
    settings: {
      browserslist: ['defaults', 'maintained node versions'],
      polyfills: ['Promise'],
    },
  },
]

export default baseCfg
export { withEnvironmentSupport }
