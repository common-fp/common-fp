export default {
  arrowParens: 'avoid',
  experimentalTernaries: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['**/*.jsonc'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
