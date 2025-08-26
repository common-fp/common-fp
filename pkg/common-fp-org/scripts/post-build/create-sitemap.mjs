/**
 * Note: this outputs to both out/ and public/ since it takes the html files
 * from out/ as input.  And we want the sitemap both for our deployable and for
 * local development.
 */

import fsp from 'node:fs/promises'
import path from 'node:path'
import { format } from 'date-fns'
import xml from 'xml'
import { globby } from 'globby'
import {
  compose,
  discardArr,
  mapValuesArr,
  passThrough,
  prepend,
  prependOne,
} from '../fp-utils/index.mjs'
import { fromRoot, removeExt } from '../utils/index.mjs'

const lastmod = format(new Date(), 'yyyy-MM-dd')
const urlToPriority = {
  '': 1,
  '/try-it': 1,
  '/docs': 1,
}

const createSitemap = async () => {
  const outDir = fromRoot('out')
  const publicDir = fromRoot('public')
  const cleanUrl = compose([removeExt, prepend('/')])
  const matchedPages = await globby(['**/*.html'], { cwd: outDir })
  const urls = await passThrough(matchedPages, [
    mapValuesArr(cleanUrl),
    prependOne(''),
    discardArr(['/404', '/index']),
  ])
  const urlSetXmlInput = urls.map(toXmlInput)
  const xmlOpts = { declaration: true, indent: '  ' }
  const content = xml(
    {
      urlset: [
        { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
        ...urlSetXmlInput,
      ],
    },
    xmlOpts
  )
  await Promise.all([
    fsp.writeFile(path.resolve(outDir, 'sitemap.xml'), content),
    fsp.writeFile(path.resolve(publicDir, 'sitemap.xml'), content),
  ])
}

function toXmlInput(relativeUrl) {
  const baseUrl = 'https://common-fp.org'
  const children = [
    { loc: baseUrl + relativeUrl },
    { lastmod },
    { changefreq: 'weekly' },
  ]
  const priority = urlToPriority[relativeUrl]
  if (priority !== undefined) {
    children.push({ priority })
  }

  return { url: children }
}

export default createSitemap
