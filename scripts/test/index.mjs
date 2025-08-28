import dedent from 'dedent'
import { execa } from 'execa'
import { Listr } from 'listr2'
import getPkgNames from './get-pkg-names.mjs'
import { cleanDir, fromRoot } from './utils.mjs'

const typeArg = process.argv.slice(2)[0]
if (!['--full', '--lite'].includes(typeArg)) {
  console.error('arg required --full or --lite')
  process.exitCode = 2
} else {
  const type = typeArg === '--full' ? 'full' : 'lite'
  run(type)
}

async function run(type) {
  try {
    const testResultsDir = fromRoot('test-results')
    await cleanDir(testResultsDir)

    await testAll(type)

    if (process.exitCode) {
      printError()
    } else {
      printTestsPass()
    }
  } catch (err) {
    console.error('error testing packages\n', err)
    process.exitCode = 1
  }
}

async function testAll(type) {
  const [pkgsWithTest, pkgsWithTestFullOrLite] = await Promise.all([
    getPkgNames({ scriptKey: 'test' }),
    getPkgNames({ scriptKey: `test-${type}` }),
  ])

  const byTitle = (l, r) => l.title.localeCompare(r.title)
  const toTestFullOrLiteItem = makeToTestFullOrLiteItem(type)
  const allTestItems = [
    ...pkgsWithTest.map(toTestItem),
    ...pkgsWithTestFullOrLite.map(toTestFullOrLiteItem),
  ].sort(byTitle)
  const list = new Listr(allTestItems, { concurrent: true, exitOnError: false })
  await list.run()
}

function getTestResultFpath(pkgName) {
  const fname = pkgName.replace('@common-fp/', '')
  return fromRoot(`test-results/${fname}.txt`)
}

function printError() {
  const msg = dedent(`
    -------------------------------------
    |                                   |
    |           tests failed            |
    |                                   |
    |   see test-results/ for details   |
    |                                   |
    -------------------------------------
  `)
  console.log('\n' + msg)
}

function printTestsPass() {
  const msg = dedent(`
    -------------------------------------
    |                                   |
    |          tests passed :)          |
    |                                   |
    |   see test-results/ for details   |
    |                                   |
    -------------------------------------
  `)
  console.log('\n' + msg)
}

function makeToTestFullOrLiteItem(type) {
  return function toFullOrLiteTestItem(pkgName) {
    const file = getTestResultFpath(pkgName)
    const title = pkgName + ` -> test-${type}`
    const task = async () => {
      try {
        await execa({ stdout: { file }, stderr: { file } })('pnpm', [
          'run',
          '--filter',
          pkgName,
          `test-${type}`,
        ])
      } catch (err) {
        const listrFriendlyErr = new Error(`${title} Failed`)
        listrFriendlyErr.cause = err
        process.exitCode = err.exitCode
        throw listrFriendlyErr
      }
    }
    return { task, title }
  }
}

function toTestItem(pkgName) {
  const file = getTestResultFpath(pkgName)
  const title = pkgName + ' -> test'
  const task = async () => {
    try {
      await execa({ stdout: { file }, stderr: { file } })('pnpm', [
        'run',
        '--filter',
        pkgName,
        'test',
      ])
    } catch (err) {
      const listrFriendlyErr = new Error(`${title} Failed`)
      listrFriendlyErr.cause = err
      process.exitCode = err.exitCode
      throw listrFriendlyErr
    }
  }
  return { task, title }
}
