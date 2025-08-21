import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mDiscardLast'), changeLogToShow, removeComments],
  },
  weather: {
    both: [
      prependImport('forEach, mDiscardLast'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
