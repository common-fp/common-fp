import base from '@common-fp/eslint-config/base-with-ts'

const pkg = [
  {
    rules: {
      // we're specifically testing require cases, so let's turn this off
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    ignores: ['test/*/bundle/'],
  },
]

export default [...base, ...pkg]
