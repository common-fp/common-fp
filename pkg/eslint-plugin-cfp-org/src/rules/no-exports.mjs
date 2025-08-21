const noExports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Export is not allowed',
    },
  },
  create: context => {
    const notAllowed = node => {
      context.report({
        node,
        message: 'Export is not allowed',
      })
    }

    return {
      ExportNamedDeclaration: notAllowed,
      ExportDefaultDeclaration: notAllowed,
      ExportAllDeclaration: notAllowed,
    }
  },
}

export default noExports
