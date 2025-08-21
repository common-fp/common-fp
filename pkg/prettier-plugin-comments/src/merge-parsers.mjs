import getParser from './get-parser.mjs'
import { findPluginByParser } from './utils.mjs'

const mergeParsers = (originalParser, parserName) => {
  const parseComments = getParser(originalParser.parse, parserName)
  const preprocessComments = (text, options) => {
    const tsPluginParser = findPluginByParser(parserName, options)
    if (!tsPluginParser) {
      return originalParser.preprocess ?
          originalParser.preprocess(text, options)
        : text
    }
    const preprocess = tsPluginParser.preprocess || originalParser.preprocess
    Object.assign(parser, {
      ...parser,
      ...tsPluginParser,
      preprocess: preprocessComments,
      parse: parseComments,
    })
    return preprocess ? preprocess(text, options) : text
  }
  const parser = {
    ...originalParser,
    preprocess: preprocessComments,
    parse: parseComments,
  }
  return parser
}

export default mergeParsers
