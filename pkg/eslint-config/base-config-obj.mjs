import globals from 'globals'

export default {
  languageOptions: {
    ecmaVersion: 2025,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha,
      ...globals.es2022,
      ...globals.worker,
    },
  },
  settings: {
    lintAllEsApis: true,
  },
  linterOptions: {
    reportUnusedDisableDirectives: false,
  },
  rules: {
    'no-async-promise-executor': 'off',
    'no-confusing-arrow': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-extra-semi': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'require-atomic-updates': 'off',
    semi: 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // import-x plugin rules
    'import-x/group-exports': 'error',
    'import-x/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import-x/newline-after-import': 'error',
    'import-x/no-cycle': 'error',
    'import-x/no-deprecated': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-extraneous-dependencies': 'error',
    'import-x/no-named-as-default-member': 'off',
    'import-x/no-named-as-default': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-unresolved': ['error', { commonjs: true }],
    'import-x/no-unused-modules': 'error',
    'import-x/no-useless-path-segments': 'error',
  },
}
