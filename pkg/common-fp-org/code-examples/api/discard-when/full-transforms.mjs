import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = [
  prependImport('discardWhen'),
  changeLogToShow,
  removeComments,
]

const fullTransforms = {
  minimal: {
    both: commonTransforms,
  },
  soda: {
    both: commonTransforms,
  },
}

export default fullTransforms
