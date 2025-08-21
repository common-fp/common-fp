import noExports from './rules/no-exports.mjs'
import restrictedImports from './rules/restricted-imports.mjs'
import validImportNames from './rules/valid-import-names.mjs'
import configuredEslintJsRules from './configured-eslint-js-rules.mjs'
import configuredTypescriptEslintRules from './configured-typescript-eslint-rules.mjs'

const pluginRules = {
  '@common-fp/cfp-org/no-exports': 'error',
  '@common-fp/cfp-org/restricted-imports': 'error',
  '@common-fp/cfp-org/valid-import-names': 'error',
}

const configs = {
  recommended: {
    rules: {
      ...configuredEslintJsRules,
      ...pluginRules,
    },
  },
  tsRecommended: {
    rules: {
      ...configuredEslintJsRules,
      ...configuredTypescriptEslintRules,
      ...pluginRules,
    },
  },
}

const plugin = {
  configs,
  meta: {
    name: '@common-fp/eslint-plugin-cfp-org',
    version: '0.1.0',
  },
  rules: {
    'no-exports': noExports,
    'restricted-imports': restrictedImports,
    'valid-import-names': validImportNames,
  },
}

export default plugin
// todo: write tests in common-fp-org which ensures these exported rules cover
// every rule in-use.  Point being, we want all upstream rules to be explicitly
// defined to ensure a good DX.
export { configuredEslintJsRules, configuredTypescriptEslintRules }
