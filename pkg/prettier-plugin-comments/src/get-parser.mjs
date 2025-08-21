import formatComments from './format-comments.mjs'
import mergeConsecutiveLineComments from './merge-consecutive-line-comments.mjs'
import { findPluginByParser } from './utils.mjs'

const getParser =
  (originalParse, parserName) => (text, parsersOrOptions, maybeOptions) => {
    const options = maybeOptions ?? parsersOrOptions
    const prettierParse =
      findPluginByParser(parserName, options)?.parse || originalParse

    const ast = prettierParse(text, options)

    mergeConsecutiveLineComments(ast, text)

    formatComments(ast, text, options)

    return ast
  }

export default getParser
