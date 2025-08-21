import jsEslint from '@eslint/js'
import { importX } from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import tsEslint from 'typescript-eslint'
import baseConfigObj from './base-config-obj.mjs'

const allConfigs = [
  jsEslint.configs.recommended,
  importX.flatConfigs.recommended,
]

const tsConfigs = [
  ...tsEslint.configs.recommended,
  importX.flatConfigs.typescript,
  {
    ...baseConfigObj,
    languageOptions: {
      ...baseConfigObj.languageOptions,
      parser: tsParser,
    },
    rules: {
      ...baseConfigObj.rules,
      // fix no-unused-vars false positives
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'all',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // fix no-use-before-define false positives
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, variables: false },
      ],
    },
  },
].map(c => ({
  ...c,
  files: ['**/*.ts'],
}))

export default [...allConfigs, baseConfigObj, ...tsConfigs]
