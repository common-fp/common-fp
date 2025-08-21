import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mKeepFirst'), changeLogToShow, removeComments],
  },
  medals: {
    both: [
      prependImport('get, mapValues, mKeepFirst'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
