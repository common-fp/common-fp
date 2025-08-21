import {
  changeLogToShow,
  prepend,
  removeComments,
} from '#code-example-transforms'
import withMap from './with-map.mjs'

const fullTransforms = {
  andUse: {
    both: [changeLogToShow, removeComments],
  },
  arraysAndSets: {
    both: [
      prepend(`import { mapValues } from 'common-fp'\n\n`),
      changeLogToShow,
      removeComments,
    ],
  },
  withMap,
}

export default fullTransforms
