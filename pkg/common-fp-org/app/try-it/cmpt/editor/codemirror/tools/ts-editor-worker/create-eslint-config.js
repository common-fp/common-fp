import cfpOrg from '@common-fp/eslint-plugin-cfp-org'
import baseEditorEslintConfig from '../base-editor-eslint-config'
import createParser from './create-parser'

const createEslintConfig = ({ tsEnvironment, tsEslintWebUtils }) => {
  const { configs } = tsEslintWebUtils
  const baseLanguageOptions = baseEditorEslintConfig.languageOptions
  const baseParserOptions = baseLanguageOptions.parserOptions

  const parser = createParser({ tsEnvironment, tsEslintWebUtils })

  const editorEslintConfig = {
    ...baseEditorEslintConfig,
    languageOptions: {
      ...baseLanguageOptions,
      parser,
      parserOptions: {
        ...baseParserOptions,
        project: ['./tsconfig.json'],
      },
    },
  }

  const tsOverrides = {
    files: ['example.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  }

  return [
    configs['eslint:recommended'],
    ...configs['plugin:@typescript-eslint/flat/recommended'],
    editorEslintConfig,
    cfpOrg.configs.tsRecommended,
    tsOverrides,
  ]
}

export default createEslintConfig
