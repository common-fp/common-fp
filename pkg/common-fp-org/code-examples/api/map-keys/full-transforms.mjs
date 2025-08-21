import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('get, mapKeys'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
