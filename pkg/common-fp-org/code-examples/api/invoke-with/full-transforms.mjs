import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('invokeWith'), changeLogToShow],
  },
  animals: {
    both: [
      prependImport('invokeWith, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
