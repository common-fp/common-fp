import fsp from 'node:fs/promises'
import path from 'node:path'
import deepEql from 'deep-eql'
import { globby } from 'globby'

const { dirname } = import.meta

const fromRepoRoot = fpath => path.resolve(dirname, '../../..', fpath)
const requiredTstycheProps = Object.entries({
  target: ['>=5.0'],
  checkSuppressedErrors: true,
})

suite('tstyche configs', () => {
  test('configs have required props per /config.mjs -> tstyche', async () => {
    const configFiles = await globby(fromRepoRoot('**/tstyche.config.json'), {
      ignore: ['**/node_modules/**'],
    })
    const configInfo = await Promise.all(
      configFiles.map(async fpath => {
        const cfg = JSON.parse(await fsp.readFile(fpath, 'utf8'))
        return { cfg, fpath }
      })
    )

    const badConfigs = configInfo.filter(info => {
      for (const [k, v] of requiredTstycheProps) {
        if (!deepEql(info.cfg[k], v)) return true
      }
    })
    if (badConfigs.length) {
      const badCfgFpaths = badConfigs.map(({ fpath }) => `\n${fpath}`)
      const errMsg =
        'the following configs lack requried properties' + badCfgFpaths
      throw new Error(errMsg)
    }
  })
})
