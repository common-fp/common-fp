import path from 'node:path'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'
import { createNodeResolver } from 'eslint-plugin-import-x'

const { dirname } = import.meta

const pathToApp = path.resolve(dirname, 'app')
const reactCfg = react.configs.flat

const reactHooksCompatCfg = {
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: reactHooks.configs.recommended.rules,
}

const nextCompatCfg = {
  plugins: { '@next/next': next },
  rules: {
    ...next.configs.recommended.rules,
    // removing this rule reduces lint time by a lot
    '@next/next/no-html-link-for-pages': 'off',
  },
}

const codeExampleOverrides = {
  files: ['**/code-examples/**/code/*.js'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
}

const nextPageOverrides = {
  files: ['**/page.js'],
  rules: {
    // next requires `export const` for some reason, which conflicts with this
    // import plugin rule
    'import-x/group-exports': 'off',
  },
}

export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/resolver-next': [
        createNodeResolver({
          alias: {
            '@/*': [`${pathToApp}/*`],
          },
        }),
      ],
    },
  },
  reactCfg.recommended,
  reactCfg['jsx-runtime'],
  reactHooksCompatCfg,
  nextCompatCfg,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',
    },
  },
  codeExampleOverrides,
  nextPageOverrides,
  {
    ignores: ['app/built', 'app/deps', 'app/bundles', 'public/bundles'],
  },
]
