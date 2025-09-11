import { parseImportsExports } from 'parse-imports-exports'
import MagicString from 'magic-string'
import { isLadenObj } from './fp-utils.mjs'
import * as transforms from './transforms/index.mjs'
import getParsed from './get-parsed.mjs'

const handler = (code, id) => {
  const importsExports = parseImportsExports(code)
  const parsedByTransform = {}
  for (const name of Object.keys(transforms)) {
    const parsed = getParsed(name, importsExports)
    if (parsed) parsedByTransform[name] = parsed
  }

  const hasAnyTransforms = isLadenObj(parsedByTransform)
  if (!hasAnyTransforms) return

  const ms = new MagicString(code)
  for (const [name, parsed] of Object.entries(parsedByTransform)) {
    transforms[name]({ parsed, ms })
  }

  return {
    code: ms.toString(),
    map: ms.generateMap({ source: id }),
  }
}

export default handler
