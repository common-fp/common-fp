import path from 'node:path'
import { execa } from 'execa'

const { dirname } = import.meta
const pathToTsconfig = path.resolve(dirname, 'tsconfig.json')

suite('ts examples', () => {
  test('should compile without errors', async () => {
    await execa('tsc', ['--noEmit', '-p', pathToTsconfig])
  })
})
