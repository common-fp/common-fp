import parserBabel from 'prettier/plugins/babel'
import parserTypescript from 'prettier/plugins/typescript'
import estree from 'prettier/plugins/estree'
import mergeParsers from './merge-parsers.mjs'
import printComment from './print-comment.mjs'

const parsers = {
  get babel() {
    const parser = parserBabel.parsers.babel
    return mergeParsers(parser, 'babel')
  },
  get typescript() {
    const parser = parserTypescript.parsers.typescript
    return mergeParsers(parser, 'typescript')
  },
}

const printers = {
  estree: {
    ...estree.printers.estree,
    printComment,
  },
}

export { parsers, printers }
