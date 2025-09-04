#! /usr/bin/env node

/**
 * tstyche doesn't have parallel support yet, so this runs our supported
 * versions in parallel
 */

import { execa } from 'execa'
import { Listr } from 'listr2'
import supportedTsVersions from '../src/supported-ts-versions.mjs'

run()

async function run() {
  try {
    const args = process.argv.slice(2)
    const testTasks = supportedTsVersions.map(v => {
      const title = v
      const task = async ctx => {
        let all
        try {
          const res = await execa({ all: true })('tstyche', [
            '--target',
            v,
            ...args,
          ])
          all = res.all
        } catch (err) {
          all = err.all
          const listrFriendlyErr = new Error(`${title} Failed`)
          listrFriendlyErr.cause = err
          process.exitCode = err.exitCode
          throw listrFriendlyErr
        } finally {
          const vIdx = v[2]
          ctx.out[vIdx] = all
        }
      }
      return { title, task }
    })
    const list = new Listr(
      [
        {
          title: 'Running tests against TS versions',
          task: (_, task) =>
            task.newListr(testTasks, {
              concurrent: true,
              exitOnError: false,
              rendererOptions: { collapseSubtasks: false },
            }),
        },
        {
          title: 'Print results',
          task: ctx => {
            console.log(ctx.out.join('\n\n\n'))
          },
        },
      ],
      { ctx: { out: [] } }
    )

    await list.run()
  } catch (err) {
    console.error('error testing ts\n', err)
    process.exitCode = 2
  }
}
