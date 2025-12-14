import fsp from 'node:fs/promises'
import { kebabCase } from 'change-case'
import ky from 'ky'
import { minify } from 'terser'
import makeCompatible from './make-compatible.mjs'
import { fromRoot } from '../../utils/index.mjs'

const buildCompatibleTsEslintBundle = async () => {
  const version = '8.39.1'

  const bundleFPath = fromRoot(
    `app/bundles/typescript-eslint-web-utils_v${kebabCase(version)}.js`
  )

  const originalJs = await ky
    .get(
      `https://github.com/common-fp/typescript-eslint/releases/download/v${version}-cfp/index.js`
    )
    .text()
  const compatibleJs = makeCompatible(originalJs)
  const compatibleJsMin = await minify(compatibleJs)

  await fsp.writeFile(bundleFPath, compatibleJsMin.code)
}

export default buildCompatibleTsEslintBundle
