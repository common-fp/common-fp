import { createWorker } from '@valtown/codemirror-ts/worker'
import createTsEnvironment from './create-ts-environment'

let tsEnvironment

const getTsEnvironment = async () => {
  tsEnvironment ??= createTsEnvironment()
  return tsEnvironment
}

const codemirrorTsWorkerApi = createWorker(() => getTsEnvironment())

export { codemirrorTsWorkerApi, getTsEnvironment }
