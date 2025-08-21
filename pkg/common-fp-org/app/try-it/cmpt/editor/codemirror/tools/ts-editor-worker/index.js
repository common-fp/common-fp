import * as Comlink from 'comlink'
import typescript from 'typescript'
import getErrorRangeFromCharPosition from './get-error-range-from-char-position'
import getLints from './get-lints'
import transpile from './transpile'
import { codemirrorTsWorkerApi } from './utils'

globalThis.ts = typescript

const workerApi = {
  ...codemirrorTsWorkerApi,
  // this overrides the 'getLints' method in codemirrorTsWorkerApi
  getLints,
  transpile,
  getErrorRangeFromCharPosition,
}

Comlink.expose(workerApi)
