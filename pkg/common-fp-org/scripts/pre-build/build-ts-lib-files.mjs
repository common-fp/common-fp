import fsp from 'node:fs/promises'
import * as ts from 'typescript'
import * as vfs from '@typescript/vfs/dist/vfs.esm.js'
import { fromRoot } from '../utils/index.mjs'
import { fileExists } from './utils.mjs'
import {
  isEmpty,
  mapKeysMap,
  mDiscardWhenMap,
  mMapValuesMap,
  passThrough,
  waitMs,
} from '../fp-utils/index.mjs'

async function buildTsLibFiles() {
  const libFilesFpath = fromRoot(
    'app/try-it/cmpt/editor/codemirror/tools/ts-editor-worker/lib-files.json'
  )
  if (await fileExists(libFilesFpath)) return

  let filesMap = await createFilesMap()
  if (isEmpty(filesMap)) {
    await waitMs(2000)
    filesMap = await createFilesMap()
    if (isEmpty(filesMap)) {
      throw new Error('Error fetching typescript lib files')
    }
  }

  // for some reason createDefaultMapFromCDN includes files that don't exist
  const remove404Files = mDiscardWhenMap(content =>
    content.includes('ErrorCode: WebContentNotFound')
  )
  const copyrightStr = getCopyrightString()
  const trim = content => {
    const minified =
      content.startsWith(copyrightStr) ?
        content.slice(copyrightStr.length)
      : content
    return minified.trim()
  }
  const removeLeadingSlashInFilename = mapKeysMap((_contents, fname) =>
    fname.slice(1)
  )
  const trimFiles = mMapValuesMap(trim)

  const filesObj = passThrough(filesMap, [
    remove404Files,
    trimFiles,
    removeLeadingSlashInFilename,
    Object.fromEntries,
  ])

  await fsp.writeFile(libFilesFpath, JSON.stringify(filesObj, null, 2))
}

function getCopyrightString() {
  return `/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */`
}

async function createFilesMap() {
  return vfs.createDefaultMapFromCDN(
    {
      target: ts.ScriptTarget.ES2023,
      lib: ['ES2023', 'webworker'],
    },
    '5.7.2',
    false,
    ts
  )
}

export default buildTsLibFiles
