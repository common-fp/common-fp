import { validUtilNames, validTypeNames } from '../valid-cfp-imports.mjs'

const validImportNames = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Validate cfp import names',
    },
  },
  create: context => ({
    ImportSpecifier: node => {
      const { name } = node.imported
      if (validUtilNames.has(name)) return

      const hasValidName =
        context.filename.endsWith('.ts') ? validTypeNames.has(name) : false

      if (!hasValidName) {
        context.report({
          node: node.imported,
          message: `${name} not found in common-fp`,
        })
      }
    },
  }),
}

export default validImportNames
