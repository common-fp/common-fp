import { register } from 'tsx/esm/api'
import { spy } from '@common-fp/test-utils'

const show = spy()
global.show = show

register()

const afterEach = async () => {
  show.reset()
}
const beforeEach = async () => {
  show.reset()
}

const mochaHooks = { afterEach, beforeEach }

export { mochaHooks }
