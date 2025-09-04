import fsp from 'node:fs/promises'
import { getUtilNames, myCamelCase } from './utils.mjs'
import { fromRoot } from '../utils/index.mjs'

const buildUtilityNames = async () => {
  const utilNames = (await getUtilNames()).map(n => myCamelCase(n))
  const content =
    'const utilityNames = ' +
    JSON.stringify(utilNames, null, 2) +
    '\n\nexport default utilityNames\n'

  fsp.writeFile(fromRoot('app/built/utility-names.js'), content)
}

export default buildUtilityNames
