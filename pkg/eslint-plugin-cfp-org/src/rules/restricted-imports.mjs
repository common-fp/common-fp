const restrictedImports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Allows one static import from common-fp',
    },
  },
  create: context => {
    let hasImported = false

    return {
      ImportExpression: node => {
        context.report({
          node,
          message: 'Dynamic imports are not supported',
        })
      },
      ImportDeclaration: node => {
        if (node.source.value !== 'common-fp') {
          context.report({
            node: node.source,
            message: 'You may only import from common-fp',
          })
        } else if (hasImported) {
          context.report({
            node: node.source,
            message: 'You can only import common-fp once',
          })
        } else {
          hasImported = true
        }
      },
    }
  },
}

export default restrictedImports
