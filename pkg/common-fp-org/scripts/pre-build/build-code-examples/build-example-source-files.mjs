import fsp from 'node:fs/promises'
import path from 'node:path'
import { globby } from 'globby'
import { format } from 'prettier'
import prettierConfig from '@common-fp/prettier-config'
import { getExt, readUtf8, removeExt } from '../utils.mjs'
import getRawFullContent from './get-raw-full-content.mjs'
import { parserByLang } from './utils.mjs'

const buildExampleSourceFiles = async ({ codeExamplesGlob, getBuiltFpath }) => {
  const allExamples = path.resolve(codeExamplesGlob, 'code/*')
  const fullExamples = allExamples + '_full.{js,ts}'
  const files = await globby([allExamples, `!${fullExamples}`])
  const setOfFiles = new Set(files)

  return Promise.all(
    files.map(async fpath => {
      const fname = path.basename(fpath)
      const content = await readUtf8(fpath)
      const rawFullContent = await getRawFullContent({ fpath, fname, content })
      const lang = getExt(fpath)
      const parser = parserByLang[lang]
      const baseCfg = {
        ...prettierConfig,
        parser,
        plugins: [
          ...(prettierConfig.plugins || []),
          '@common-fp/prettier-plugin-comments',
        ],
      }
      const smallCfg = {
        ...baseCfg,
        printWidth: 50,
      }

      let formattedContent
      let smallContent
      let fullContent
      let fullSmallContent
      try {
        ;[formattedContent, smallContent, fullContent, fullSmallContent] =
          await Promise.all([
            process(content, baseCfg),
            process(content, smallCfg),
            process(rawFullContent, baseCfg),
            process(rawFullContent, smallCfg),
          ])
      } catch (err) {
        err.message = `Error formatting ${fpath}\n${err.message}`
        throw err
      }

      const builtFpath = getBuiltFpath({ fname: removeExt(fname), fpath })

      // prettier-ignore
      const filesWritten = [
      fsp.writeFile(builtFpath + `_tablet-and-larger_display.${lang}`, formattedContent),
      fsp.writeFile(builtFpath + `_tablet-and-larger_full.${lang}`, fullContent),
      fsp.writeFile(builtFpath + `_mobile-and-smaller_display.${lang}`, smallContent),
      fsp.writeFile(builtFpath + `_mobile-and-smaller_full.${lang}`, fullSmallContent),
    ]

      // when we don't define a ts equivalent, copy the js to ts.  A lot of
      // examples are simple enough to not warrant ts-specific syntax
      const tsFpath = changeExtTo('ts', fpath)
      const tsFname = changeExtTo('ts', fname)
      const makeTsCopies = getExt(fname) === 'js' && !setOfFiles.has(tsFpath)

      if (makeTsCopies) {
        const rawFullContentTs = await getRawFullContent({
          fpath: tsFpath,
          fname: tsFname,
          content,
        })
        let tsFullContent
        let tsFullSmallContent
        try {
          // examples can declare ts-specific full-transforms without a separate
          // ts file. e.g. code-examples/pages/home/full-transforms/with-map
          ;[tsFullContent, tsFullSmallContent] = await Promise.all([
            process(rawFullContentTs, { ...baseCfg, parser: parserByLang.ts }),
            process(rawFullContentTs, { ...smallCfg, parser: parserByLang.ts }),
          ])
        } catch (err) {
          err.message = `Error formatting ${tsFpath}\n${err.message}`
          throw err
        }

        // prettier-ignore
        filesWritten.push(...[
          fsp.writeFile(builtFpath + '_tablet-and-larger_display.ts', formattedContent),
          fsp.writeFile(builtFpath + '_tablet-and-larger_full.ts', tsFullContent),
          fsp.writeFile(builtFpath + '_mobile-and-smaller_display.ts', smallContent),
          fsp.writeFile(builtFpath + '_mobile-and-smaller_full.ts', tsFullSmallContent),
        ])
      }

      return Promise.all(filesWritten)
    })
  )
}

// formats code then collapses triple slash comments - which are used to opt out
// of @common-fp/prettier-plugin-comments formatting
async function process(content, prettierCfg) {
  const formattedContent = await format(content, prettierCfg)
  const tripleSlashRe = /(^|\n)(\s*)\/\/\/(\s|\n)/g
  return formattedContent
    .replaceAll(tripleSlashRe, '$1$2//$3')
    .replaceAll(tripleSlashRe, '$1$2//$3')
}

function changeExtTo(newExt, fpath) {
  const allExceptExt = fpath.slice(0, fpath.lastIndexOf('.') + 1)
  return allExceptExt + newExt
}

export default buildExampleSourceFiles
