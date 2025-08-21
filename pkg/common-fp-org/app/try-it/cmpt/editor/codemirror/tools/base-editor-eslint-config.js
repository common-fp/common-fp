import cfpOrg from '@common-fp/eslint-plugin-cfp-org'
import globals from './trimmed-globals.json'
import c from '@/constants'

const baseEditorEslintConfig = {
  languageOptions: {
    globals: {
      ...globals.worker,
      show: false,
    },
    parserOptions: {
      ecmaVersion: c.editor.ecmaVersion,
      sourceType: c.editor.sourceType,
    },
  },
  plugins: { '@common-fp/cfp-org': cfpOrg },
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}

export default baseEditorEslintConfig
