import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import './shared-internals.mjs'

const validatePruneArg = (await import('#internal/validate-prune-arg')).default

const pathToModule = '../../src/internal/validate-prune-arg.mjs'

const validatePruneArgSpy = spy(validatePruneArg)
await replace(pathToModule, { default: validatePruneArgSpy })

export default validatePruneArgSpy
