const createTypeCheckFunction = typesArray => {
  const types = new Set(typesArray)
  return node => types.has(node?.type)
}

const findPluginByParser = (parserName, options) => {
  const tsPlugin = options.plugins.find(plugin => {
    return (
      typeof plugin === 'object' &&
      plugin.name &&
      plugin.parsers &&
      Object.hasOwn(plugin.parsers, parserName)
    )
  })

  return (
      !tsPlugin ||
        tsPlugin.name.endsWith('src/index.mjs') ||
        tsPlugin.name === '@common-fp/prettier-plugin-comments' ||
        Object.hasOwn(tsPlugin.parsers, 'comments-parser')
    ) ?
      undefined
    : tsPlugin.parsers?.[parserName]
}

const getBeginningSpace = (posStart, text) => {
  let pos = posStart - 1
  while (pos >= 0 && text[pos] === ' ') pos -= 1
  pos += 1

  return ' '.repeat(posStart - pos)
}

const getPosEnd = node => node.end ?? node.range[1]
const getPosStart = node => {
  const start = node.start ?? node.range[0]

  // Handle nodes with decorators. They should start at the first decorator
  const firstDecorator = (node.declaration?.decorators ?? node.decorators)?.[0]
  if (firstDecorator) {
    return Math.min(getPosStart(firstDecorator), start)
  }

  return start
}

// a comment starting with three slashes opts out of this plugin's formatting.
// I may decide on a clearer approach in the future.
const isTripleSlashRe = /^\/(\s|$)/
const isFormattable = node => !isTripleSlashRe.test(node.value)

const isWholeLineComment = (node, text) => {
  let pos = getPosStart(node) - 1

  while (pos >= 0 && text[pos] === ' ') pos -= 1

  return pos === -1 || (pos >= 0 && text[pos] === '\n')
}

const lineCommentTypes = new Set(['Line', 'CommentLine'])

const negate =
  fn =>
  (...args) =>
    !fn(...args)

const setPosEnd = (node, posEnd) => {
  if (node.end !== undefined) {
    node.end = posEnd
  } else {
    node.range[1] = posEnd
  }
}

export {
  createTypeCheckFunction,
  findPluginByParser,
  getBeginningSpace,
  getPosEnd,
  getPosStart,
  isFormattable,
  isWholeLineComment,
  lineCommentTypes,
  negate,
  setPosEnd,
}
