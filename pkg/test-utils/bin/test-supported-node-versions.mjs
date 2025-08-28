#! /usr/bin/env node

/**
 * Note: this is a workaround to some buggy behavior when calling test-full from
 * the monorepo root.  Previously I declared a script
 * "test-full": "nve 20,22,24 mocha..."
 * but this caused pnpm to hang.
 */

import nvexeca from 'nvexeca'

const supportedNodeVersions = ['20', '22', '24']

run()

async function run() {
  try {
    const cmd = process.argv.slice(2)
    const execaOpts = { stdout: 'inherit', stderr: 'inherit' }
    for (const v of supportedNodeVersions) {
      console.log(`Node v${v}`)
      const res = await nvexeca(v, cmd[0], cmd.slice(1), execaOpts)
      await res.childProcess
    }
  } catch (err) {
    console.error('error testing supported node versions\n', err)
    process.exitCode = 1
  }
}
