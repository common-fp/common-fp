import { returnFirstArg } from './fp-utils.mjs'

const getParsedByName = {
  namedImports: parsed => parsed?.['common-fp'],
  namedReexports: parsed => parsed?.['common-fp'],
}

const getParsed = (name, importsExports) => {
  const fn = getParsedByName[name] ?? returnFirstArg
  return fn(importsExports[name])
}

export default getParsed
