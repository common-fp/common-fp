#! /usr/bin/env node

import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'
import buildJs from './build-js.mjs'
import buildCjs from './build-cjs.mjs'
import buildTypes from './build-types.mjs'
import { fromRoot } from './utils.mjs'

const { dirname } = import.meta
console.log(dirname)

run()

async function run() {
  try {
    const distDir = fromRoot('dist')
    await deleteAsync(distDir)
    await makeDirectory(distDir)
    await buildJs()
    await Promise.all([buildCjs(), buildTypes()])
    console.log('build finished !')
  } catch (err) {
    console.error('error during build\n', err)
  }
}
